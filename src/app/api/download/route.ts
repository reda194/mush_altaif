import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

// Allowed file names (whitelist) — prevents directory traversal
const ALLOWED_FILES = new Set([
  "annual-report-2023.pdf",
  "board-formation-letter.pdf",
  "bylaws.pdf",
  "correspondence-2025.pdf",
  "financial-report-2021.pdf",
  "financial-report-2022.pdf",
  "financial-report-2024.pdf",
  "license-info.pdf",
  "registration-decision.pdf",
]);

const DOCS_DIR = path.join(process.cwd(), "private", "docs");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fileName } = body;

    // Validate fileName against whitelist
    const baseName = fileName?.startsWith("/") ? fileName.slice(1) : fileName;
    const cleanName = baseName?.replace(/^docs\//, "");

    if (!cleanName || !ALLOWED_FILES.has(cleanName)) {
      return NextResponse.json(
        { error: "ملف غير موجود" },
        { status: 404 }
      );
    }

    const filePath = path.join(DOCS_DIR, cleanName);

    // Extra safety: ensure resolved path is within DOCS_DIR
    if (!filePath.startsWith(DOCS_DIR)) {
      return NextResponse.json(
        { error: "مسار غير صالح" },
        { status: 400 }
      );
    }

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "الملف غير موجود" },
        { status: 404 }
      );
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${cleanName}"`,
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "خطأ في الخادم" },
      { status: 500 }
    );
  }
}
