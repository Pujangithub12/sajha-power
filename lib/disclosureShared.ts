export const DISCLOSURE_CATEGORIES = [
  "annual-financial-statements",
  "quarterly-financial-statements",
  "news-and-notice",
] as const;

export type DisclosureCategory = (typeof DISCLOSURE_CATEGORIES)[number];

export function isDisclosureCategory(value: string): value is DisclosureCategory {
  return (DISCLOSURE_CATEGORIES as readonly string[]).includes(value);
}

export type DisclosureFile = {
  id: string;
  title: string;
  originalName: string;
  contentType: string;
  size: number;
  uploadedAt: string;
};

export const ALLOWED_CONTENT_TYPES: Record<string, string> = {
  "application/pdf": ".pdf",
  "application/msword": ".doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
};

export const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB

export const DISCLOSURE_CATEGORY_LABELS: Record<DisclosureCategory, string> = {
  "annual-financial-statements": "Annual Financial Statements",
  "quarterly-financial-statements": "Quarterly Financial Statements",
  "news-and-notice": "News & Notice",
};
