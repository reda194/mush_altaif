"use client";

import { useState, type FormEvent } from "react";
import { Send, Phone, Mail, MapPin, Loader2, AlertCircle, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID           ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID
                 ?? process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID          ?? "";
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY           ?? "";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name:    form.name,
          user_email:   form.email,
          user_phone:   form.phone || "غير محدد",
          user_subject: form.subject,
          user_message: form.message,
          send_time:    new Date().toLocaleString("ar-SA", {
            dateStyle: "full",
            timeStyle: "short",
          }),
        },
        PUBLIC_KEY
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-brand" />
        </div>
        <h3 className="text-xl font-bold text-charcoal mb-2">تم إرسال رسالتك بنجاح</h3>
        <p className="text-charcoal/60">سنتواصل معك في أقرب وقت ممكن.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-charcoal">الاسم</label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all"
            placeholder="أدخل اسمك"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-charcoal">البريد الإلكتروني</label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all"
              placeholder="email@example.com"
              dir="ltr"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-charcoal">رقم الجوال</label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all"
              placeholder="05xxxxxxxx"
              dir="ltr"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-charcoal">الموضوع</label>
          <input
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all"
            placeholder="موضوع الرسالة"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-charcoal">الرسالة</label>
          <textarea
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all min-h-[120px] resize-y"
            placeholder="اكتب رسالتك هنا..."
          />
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 rounded-xl p-3 text-sm">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى.</span>
          </div>
        )}

        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <Loader2 className="w-4 h-4 ml-2 animate-spin" />
              جاري الإرسال…
            </>
          ) : (
            <>
              <Send className="w-4 h-4 ml-2" />
              إرسال الرسالة
            </>
          )}
        </Button>
      </form>

      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5 text-brand" />
          </div>
          <div>
            <p className="font-medium text-charcoal">الهاتف</p>
            <p className="text-charcoal/60 text-sm" dir="ltr">{CONTACT.phone}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5 text-brand" />
          </div>
          <div>
            <p className="font-medium text-charcoal">الرقم الوطني الموحد</p>
            <p className="text-charcoal/60 text-sm" dir="ltr">{CONTACT.nationalNumber}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-brand" />
          </div>
          <div>
            <p className="font-medium text-charcoal">البريد الإلكتروني</p>
            <p className="text-charcoal/60 text-sm">{CONTACT.email}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-brand" />
          </div>
          <div>
            <p className="font-medium text-charcoal">العنوان</p>
            <p className="text-charcoal/60 text-sm">{CONTACT.address}</p>
            <p className="text-charcoal/40 text-sm">{CONTACT.workHours}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
