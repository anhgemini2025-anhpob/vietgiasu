import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07111E] text-slate-100 pt-16 pb-12 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Grid identical to ungdung.vercel.app */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12">
          
          {/* Left Column (5 Cols): Brand Box, Description & Slogan */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Brand Box Pill */}
            <div className="inline-flex items-center gap-3.5 p-2 pr-5 rounded-2xl bg-[#0A192F] border border-amber-400/40 shadow-md shadow-black/50">
              <img
                src="/logo.png"
                alt="VietTutorz Logo"
                className="h-11 w-auto object-contain rounded-xl"
              />
              <div className="border-l border-slate-700/60 pl-3.5">
                <div className="text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-wide">
                  VietTutorz
                </div>
                <div className="text-xs text-slate-300 font-mono">
                  Hệ Sinh Thái Gia Sư AI Lớp 1–12
                </div>
              </div>
            </div>

            {/* Ecosystem Description */}
            <p className="text-slate-300 max-w-md leading-relaxed text-sm sm:text-base">
              Hệ sinh thái gia sư AI toàn diện đồng hành cùng học sinh Việt Nam từ lớp 1 đến lớp 12. Ứng dụng công nghệ AI cá nhân hóa giúp củng cố kiến thức, bám sát chương trình GDPT và khơi gợi tinh thần tự học chủ động mỗi ngày.
            </p>

            {/* Slogan in quotes */}
            <div className="text-xs text-amber-300/90 font-mono font-bold">
              "MỖI NGÀY TIẾN BỘ → MỖI BƯỚC TỰ TIN"
            </div>
          </div>

          {/* Middle Column (3 Cols): Danh Mục Cấp Học */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="font-extrabold text-amber-300 text-base">
              Danh Mục Cấp Học
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base">
              <li>
                <Link
                  to="/tieu-hoc"
                  className="text-slate-300 hover:text-amber-300 transition-colors"
                >
                  Tiểu học (Lớp 1 – 5)
                </Link>
              </li>
              <li>
                <Link
                  to="/thcs"
                  className="text-slate-300 hover:text-amber-300 transition-colors"
                >
                  THCS (Lớp 6 – 9)
                </Link>
              </li>
              <li>
                <Link
                  to="/thpt"
                  className="text-slate-300 hover:text-amber-300 transition-colors"
                >
                  THPT (Lớp 10 – 12)
                </Link>
              </li>
              <li>
                <Link
                  to="/#chon-lop"
                  className="text-slate-300 hover:text-amber-300 transition-colors"
                >
                  12 Ứng dụng lớp học riêng biệt
                </Link>
              </li>
              <li>
                <Link
                  to="/lien-he"
                  className="text-slate-300 hover:text-amber-300 transition-colors"
                >
                  Liên hệ & Hỗ trợ
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column (4 Cols): Tư Vấn & Đồng Hành */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="font-extrabold text-amber-300 text-base">
              Tư Vấn & Đồng Hành
            </h4>
            <p className="leading-relaxed text-slate-300 text-sm">
              Bạn có mong muốn tìm kiếm giải pháp học tập AI hiệu quả, phù hợp với năng lực và giai đoạn học tập của con? Đội ngũ kỹ thuật luôn sẵn sàng đồng hành, tư vấn giải pháp và hoàn thiện trải nghiệm học tập tốt nhất cho từng học sinh.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-amber-400/90 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>Liên hệ tư vấn & trao đổi qua khung liên hệ trực tiếp</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Về đầu trang button */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="text-slate-400">
            © {SITE_CONFIG.copyrightYear} {SITE_CONFIG.brandName.toUpperCase()} •{' '}
            <a
              href="https://vietgiasu.vercel.app/"
              className="text-amber-400 font-bold hover:underline"
            >
              vietgiasu.vercel.app
            </a>
            {' '}• {SITE_CONFIG.designerCredit}
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A192F] hover:bg-amber-400 text-amber-300 hover:text-slate-950 transition-all border border-amber-400/30 font-bold cursor-pointer text-xs sm:text-sm"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
