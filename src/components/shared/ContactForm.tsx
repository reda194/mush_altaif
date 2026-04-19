"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { CONTACT } from "@/lib/constants";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-brand" />
        </div>
        <h3 className="text-xl font-bold text-charcoal mb-2">تم إرسال رسالتك بنجاح</h3>
        <p className="text-charcoal/60">سنتواصل معك في أقرب وقت ممكن.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <Input label="الاسم" placeholder="أدخل اسمك" required />
          <Input label="البريد الإلكتروني" type="email" placeholder="email@example.com" required />
        </div>
        <Input label="رقم الجوال" type="tel" placeholder="05xxxxxxxx" />
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-charcoal">الموضوع</label>
          <input
            className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all"
            placeholder="موضوع الرسالة"
            required
          />
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-charcoal">الرسالة</label>
          <textarea
            className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all min-h-[120px] resize-y"
            placeholder="اكتب رسالتك هنا..."
            required
          />
        </div>
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          <Send className="w-4 h-4 ml-2" />
          إرسال الرسالة
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
