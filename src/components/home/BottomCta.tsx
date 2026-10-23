import React from 'react';
import { ArrowRight, GraduationCap, Sparkles } from 'lucide-react';

interface BottomCtaProps {
  onSelectGradeClick: () => void;
}

export const BottomCta: React.FC<BottomCtaProps> = ({ onSelectGradeClick }) => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy via-[#1e3a8a] to-brand-navy p-8 sm:p-12 md:p-16 text-center text-white shadow-soft-lg overflow-hidden">
          
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Đồng hành cùng học sinh lớp 1 đến lớp 12</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Bắt đầu từ lớp học của con
            </h2>

            <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              Chọn lớp phù hợp và khám phá ứng dụng VietTuorz ngay hôm nay. Trải nghiệm trực quan, hoàn toàn miễn phí và không cần đăng nhập.
            </p>

            <div className="pt-2">
              <button
                onClick={onSelectGradeClick}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base md:text-lg shadow-lg hover:shadow-amber-500/30 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Chọn lớp ngay</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-300 font-medium">
              <span>✓ 12 Ứng dụng lớp riêng biệt</span>
              <span>✓ Gợi ý bài học cá nhân hóa</span>
              <span>✓ Không lưu trữ dữ liệu cá nhân</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
