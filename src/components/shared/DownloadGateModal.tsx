'use client';

import { useState } from 'react';
import { X, Download, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  fileName: string;
  fileUrl: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? '';

export default function DownloadGateModal({ isOpen, onClose, fileName, fileUrl }: Props) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', org: '' });
  const [status, setStatus] = useState<Status>('idle');

  if (!isOpen) return null;

  const handleClose = () => {
    if (status === 'sending') return;
    onClose();
    setTimeout(() => {
      setStatus('idle');
      setForm({ name: '', phone: '', email: '', org: '' });
    }, 300);
  };

  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          user_name:     form.name,
          user_phone:    form.phone,
          user_email:    form.email,
          user_org:      form.org || 'غير محدد',
          file_name:     fileName,
          download_time: new Date().toLocaleString('ar-SA', {
            dateStyle: 'full',
            timeStyle: 'short',
          }),
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      triggerDownload();

      setTimeout(() => {
        handleClose();
      }, 2500);
    } catch {
      setStatus('error');
    }
  };

  const field = (
    id: keyof typeof form,
    label: string,
    type: string,
    placeholder: string,
    required = true,
    isLtr = false
  ) => (
    <div>
      <label htmlFor={id} className="block text-sm font-bold text-charcoal mb-1.5">
        {label}{' '}
        {required ? (
          <span className="text-red-500">*</span>
        ) : (
          <span className="text-charcoal/30 font-normal text-xs">(اختياري)</span>
        )}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={form[id]}
        onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
        placeholder={placeholder}
        dir={isLtr ? 'ltr' : undefined}
        className="w-full bg-surface border border-charcoal/10 rounded-xl px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/10 transition-all"
      />
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" dir="rtl">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative bg-warm-white rounded-2xl shadow-2xl w-full max-w-md z-10 overflow-hidden"
      >
        {/* Brand accent bar */}
        <div className="h-1 bg-brand w-full" />

        <div className="p-8">
          {/* Close button */}
          <button
            onClick={handleClose}
            disabled={status === 'sending'}
            className="absolute top-5 left-5 w-8 h-8 rounded-full bg-charcoal/5 flex items-center justify-center hover:bg-charcoal/10 transition-colors disabled:opacity-40"
            aria-label="إغلاق النافذة"
          >
            <X className="w-4 h-4 text-charcoal/60" />
          </button>

          {/* Success state */}
          {status === 'success' ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">جاري التحميل!</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                شكراً لك. سيبدأ تحميل الملف تلقائياً.
                <br />
                إن لم يبدأ التحميل، تحقق من إعدادات المتصفح.
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-brand" />
                </div>
                <h3 id="modal-title" className="text-xl font-bold text-charcoal mb-1">
                  تحميل الوثيقة
                </h3>
                <p className="text-charcoal/40 text-xs truncate mb-2">{fileName}</p>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  يرجى تعبئة البيانات التالية للمتابعة وتحميل الملف.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {field('name',  'الاسم الكامل',        'text',  'أدخل اسمك الكامل')}
                {field('phone', 'رقم الجوال',          'tel',   '05xxxxxxxx',         true, true)}
                {field('email', 'البريد الإلكتروني',   'email', 'example@email.com',   true, true)}
                {field('org',   'الجهة / المنظمة',     'text',  'اسم الجهة أو المنظمة', false)}

                {/* Error message */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 rounded-xl p-3 text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى.</span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-brand text-white font-bold py-3 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      جاري الإرسال…
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      تأكيد وتحميل الملف
                    </>
                  )}
                </button>

                <p className="text-charcoal/30 text-xs text-center">
                  بياناتك محمية ولن تُشارك مع أي طرف ثالث
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
