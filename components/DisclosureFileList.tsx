import { FileText, Image as ImageIcon, Download, Calendar, FileQuestion } from "lucide-react";
import type { DisclosureCategory, DisclosureFile } from "@/lib/appwrite";

function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function fileIcon(contentType: string) {
  if (contentType.startsWith("image/")) return ImageIcon;
  if (contentType === "application/pdf") return FileText;
  if (contentType.includes("word")) return FileText;
  return FileQuestion;
}

export default function DisclosureFileList({
  category,
  files,
  accentText = "text-primary-600",
  accentBg = "bg-primary-50",
}: {
  category: DisclosureCategory;
  files: DisclosureFile[];
  accentText?: string;
  accentBg?: string;
}) {
  if (files.length === 0) {
    return (
      <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-100">
        <FileQuestion className="w-10 h-10 text-slate-300 mx-auto mb-3" />
        <p className="text-slate-500 font-medium">No documents published yet.</p>
        <p className="text-slate-400 text-sm mt-1">Check back soon.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {files.map((file) => {
        const Icon = fileIcon(file.contentType);
        return (
          <div
            key={file.id}
            className="flex items-center justify-between gap-4 bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div
                className={`w-12 h-12 rounded-xl ${accentBg} flex items-center justify-center flex-shrink-0`}
              >
                <Icon className={`w-6 h-6 ${accentText}`} />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-slate-900 truncate">{file.title}</h3>
                <p className="text-sm text-slate-500 flex items-center gap-1 mt-1 flex-wrap">
                  <Calendar className="w-3.5 h-3.5" /> {formatDate(file.uploadedAt)} &middot;{" "}
                  {formatSize(file.size)}
                </p>
              </div>
            </div>
            <a
              href={`/api/disclosure/download?category=${category}&id=${file.id}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-primary text-white text-sm font-semibold shadow hover:shadow-lg hover:scale-105 transition-all flex-shrink-0"
            >
              <Download className="w-4 h-4" /> Download
            </a>
          </div>
        );
      })}
    </div>
  );
}
