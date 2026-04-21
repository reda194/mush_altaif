'use client';

import { useState, type ReactNode } from 'react';
import DownloadGateModal from './DownloadGateModal';

interface Props {
  /** اسم الملف الذي يظهر في النموذج وفي البريد */
  fileName: string;
  /** المسار النسبي للملف مثل /docs/bylaws.pdf */
  fileUrl: string;
  /** المحتوى الذي يُعرض كزر التحميل */
  children: ReactNode;
  className?: string;
}

export default function DocumentDownloadButton({
  fileName,
  fileUrl,
  children,
  className,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
        aria-label={`تحميل ${fileName}`}
      >
        {children}
      </button>

      <DownloadGateModal
        isOpen={open}
        onClose={() => setOpen(false)}
        fileName={fileName}
        fileUrl={fileUrl}
      />
    </>
  );
}
