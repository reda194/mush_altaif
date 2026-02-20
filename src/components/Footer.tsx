import Link from 'next/link';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 py-12 px-6 border-t border-white/10 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white font-bold">
              م
            </div>
            <span className="text-xl font-bold text-white">مشاة الطائف</span>
          </div>
          <p className="text-sm max-w-sm leading-relaxed mb-6">
            جمعية رائدة تهدف إلى نشر ثقافة المشي وتعزيز الصحة العامة في محافظة الطائف من خلال مبادرات وفعاليات مجتمعية مستدامة.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all">
              <Twitter size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all">
              <Instagram size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all">
              <Linkedin size={18} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
          <ul className="space-y-3">
            {['عن الجمعية', 'المبادرات والبرامج', 'معرض المسارات', 'المركز الإعلامي', 'اتصل بنا'].map((item, i) => (
              <li key={i}>
                <Link href="#" className="text-sm hover:text-brand transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand/50"></span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">الحوكمة والسياسات</h4>
          <ul className="space-y-3">
            {['اللائحة الأساسية', 'سياسة الخصوصية', 'التقارير المالية', 'مجلس الإدارة'].map((item, i) => (
              <li key={i}>
                <Link href="#" className="text-sm hover:text-brand transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand/50"></span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© {new Date().getFullYear()} جمعية مشاة الطائف. جميع الحقوق محفوظة.</p>
        <p className="flex items-center gap-1">
          تم التطوير بحب وإتقان <span className="text-brand text-lg leading-none">♥</span>
        </p>
      </div>
    </footer>
  );
}
