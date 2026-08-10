"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Trash2, UploadCloud, FileText, Image as ImageIcon, FileQuestion } from "lucide-react";
import {
  ALLOWED_CONTENT_TYPES,
  DISCLOSURE_CATEGORIES,
  DISCLOSURE_CATEGORY_LABELS,
  MAX_FILE_SIZE,
  type DisclosureCategory,
  type DisclosureFile,
} from "@/lib/disclosureShared";

function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function fileIcon(contentType: string) {
  if (contentType.startsWith("image/")) return ImageIcon;
  if (contentType === "application/pdf" || contentType.includes("word")) return FileText;
  return FileQuestion;
}

export default function AdminPanel() {
  const router = useRouter();
  const [category, setCategory] = useState<DisclosureCategory>(DISCLOSURE_CATEGORIES[0]);
  const [files, setFiles] = useState<DisclosureFile[]>([]);
  const [loadingFiles, setLoadingFiles] = useState(true);
  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadFiles = useCallback(async (cat: DisclosureCategory) => {
    setLoadingFiles(true);
    try {
      const res = await fetch(`/api/disclosure/${cat}`, { cache: "no-store" });
      const data = await res.json();
      setFiles(data.files ?? []);
    } catch {
      setError("Failed to load files.");
    } finally {
      setLoadingFiles(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- fetching on category change is the correct use of an effect here
    loadFiles(category);
    setError("");
    setSuccess("");
  }, [category, loadFiles]);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!selectedFile) {
      setError("Please choose a file.");
      return;
    }
    if (!title.trim()) {
      setError("Please enter a title.");
      return;
    }
    if (!ALLOWED_CONTENT_TYPES[selectedFile.type]) {
      setError("Unsupported file type. Allowed: PDF, DOC, DOCX, JPG, PNG, WEBP.");
      return;
    }
    if (selectedFile.size > MAX_FILE_SIZE) {
      setError(`File too large. Maximum size is ${MAX_FILE_SIZE / (1024 * 1024)} MB.`);
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("title", title.trim());

      const uploadRes = await fetch(`/api/admin/disclosure/${category}/upload`, {
        method: "POST",
        body: formData,
      });
      if (uploadRes.status === 401) {
        setError("Your session has expired. Please sign in again.");
        router.refresh();
        return;
      }
      if (!uploadRes.ok) {
        const data = await uploadRes.json().catch(() => ({}));
        setError(data.error || "Failed to upload file.");
        return;
      }

      setSuccess("File uploaded successfully.");
      setTitle("");
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      loadFiles(category);
    } catch {
      setError("Something went wrong during upload.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this file? This cannot be undone.")) return;
    setDeletingId(id);
    setError("");
    try {
      const res = await fetch(`/api/admin/disclosure/${category}/${id}`, { method: "DELETE" });
      if (res.status === 401) {
        setError("Your session has expired. Please sign in again.");
        router.refresh();
        return;
      }
      if (!res.ok) {
        setError("Failed to delete file.");
        return;
      }
      setFiles((prev) => prev.filter((f) => f.id !== id));
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Disclosure Documents</h1>
          <p className="text-slate-500 text-sm mt-1">Upload and manage published documents.</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors text-sm font-medium"
        >
          <LogOut className="w-4 h-4" /> Log Out
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {DISCLOSURE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              category === cat
                ? "bg-gradient-primary text-white shadow"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {DISCLOSURE_CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      {/* Upload Form */}
      <form
        onSubmit={handleUpload}
        className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-10 space-y-4"
      >
        <h2 className="font-semibold text-slate-900 flex items-center gap-2">
          <UploadCloud className="w-5 h-5 text-primary-600" /> Upload New Document
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Document title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
            onChange={(e) => setSelectedFile(e.target.files?.[0] ?? null)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-primary-50 file:text-primary-700 file:font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>
        <p className="text-xs text-slate-400">
          Allowed: PDF, DOC, DOCX, JPG, PNG, WEBP &middot; Max {MAX_FILE_SIZE / (1024 * 1024)} MB
        </p>
        {error && <p className="text-sm text-red-600">{error}</p>}
        {success && <p className="text-sm text-emerald-600">{success}</p>}
        <button
          type="submit"
          disabled={uploading}
          className="px-6 py-3 bg-gradient-primary text-white rounded-xl font-semibold shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40 transition-all disabled:opacity-60"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {/* File List */}
      <div>
        <h2 className="font-semibold text-slate-900 mb-4">
          {DISCLOSURE_CATEGORY_LABELS[category]}
        </h2>
        {loadingFiles ? (
          <p className="text-slate-400 text-sm">Loading...</p>
        ) : files.length === 0 ? (
          <p className="text-slate-400 text-sm">No documents uploaded yet.</p>
        ) : (
          <div className="space-y-3">
            {files.map((file) => {
              const Icon = fileIcon(file.contentType);
              return (
                <div
                  key={file.id}
                  className="flex items-center justify-between gap-4 bg-white rounded-xl p-4 border border-slate-100"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-slate-900 truncate">{file.title}</p>
                      <p className="text-xs text-slate-400">
                        {file.originalName} &middot; {formatSize(file.size)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(file.id)}
                    disabled={deletingId === file.id}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors text-sm font-medium disabled:opacity-60 flex-shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                    {deletingId === file.id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
