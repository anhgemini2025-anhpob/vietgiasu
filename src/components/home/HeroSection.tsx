import React from 'react';
import { Sparkles, ArrowRight, BookOpen, Compass, CheckCircle2, Bot, HelpCircle } from 'lucide-react';

interface HeroSectionProps {
  onSelectGradeClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectGradeClick,
  onExploreClick,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-brand-ice/60 via-white to-white">
      {/* Background Soft Lighting Gradients */}
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-ice border border-blue-200/80 shadow-soft-sm">
              <Sparkles className="w-4 h-4 text-brand-blue animate-pulse" />
              <span className="text-xs md:text-sm font-bold text-brand-navy tracking-wide uppercase">
                HỆ SINH THÁI GIA SƯ AI | LỚP 1–12
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.15]">
              Học đúng cách.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-indigo-600 block sm:inline">
                Tiến bộ mỗi ngày.
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-lg md:text-xl text-brand-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Khám phá hệ sinh thái gia sư AI VietTuorz – đồng hành cùng học sinh từ lớp 1 đến lớp 12 trên hành trình học tập phù hợp với từng giai đoạn.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onSelectGradeClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold text-base shadow-soft hover:shadow-glow-blue transition-all duration-200 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span>Chọn lớp học ngay</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-brand-navy font-semibold text-base border border-slate-200 shadow-soft-sm transition-all duration-200 flex items-center justify-center gap-2 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                <Compass className="w-5 h-5 text-brand-muted" />
                <span>Khám phá hệ sinh thái</span>
              </button>
            </div>

            {/* Supporting Line */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-2 text-xs md:text-sm text-slate-500 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>12 ứng dụng theo từng lớp học • Trải nghiệm trực tiếp • Không cần đăng nhập</span>
            </div>
          </div>

          {/* Right Column (Visual Device Mockup & Floating Badges) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Device Frame (Modern Tablet / Laptop Preview) */}
              <div className="relative rounded-3xl bg-slate-900 p-3 sm:p-4 shadow-2xl border border-slate-800">
                {/* Screen bezel */}
                <div className="rounded-2xl bg-slate-950 overflow-hidden border border-slate-800/80 shadow-inner">
                  
                  {/* Top App bar */}
                  <div className="px-4 py-2.5 bg-slate-900 flex items-center justify-between border-b border-slate-800 text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 font-medium">vietgiasu.vercel.app</span>
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Sẵn sàng
                    </span>
                  </div>

                  {/* App Screen Content Preview */}
                  <div className="p-4 sm:p-5 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0c1833] text-slate-100 min-h-[300px] flex flex-col justify-between">
                    
                    {/* Simulated Header inside app */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Gia sư AI Đồng Hành</div>
                          <div className="text-[10px] text-slate-400">Hướng dẫn bài học cá nhân hóa</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        Chương trình 2018
                      </span>
                    </div>

                    {/* Interactive Simulated Dialogue */}
                    <div className="space-y-3 my-4">
                      {/* Student question */}
                      <div className="flex items-start gap-2 max-w-[85%]">
                        <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold shrink-0 text-slate-300">
                          Con
                        </div>
                        <div className="bg-slate-800/90 rounded-2xl rounded-tl-sm px-3.5 py-2 text-xs text-slate-200 border border-slate-700/50">
                          Thầy ơi, bài toán này con chưa hiểu bước phân tích giả thiết ạ?
                        </div>
                      </div>

                      {/* AI Tutor supportive response */}
                      <div className="flex items-start gap-2 max-w-[92%] ml-auto flex-row-reverse">
                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0 text-white">
                          <Bot className="w-3.5 h-3.5" />
                        </div>
                        <div className="bg-blue-900/40 rounded-2xl rounded-tr-sm px-3.5 py-2.5 text-xs text-blue-100 border border-blue-700/40 shadow-sm">
                          <p className="font-medium text-amber-300 text-[11px] mb-1 flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Gợi ý từng bước:
                          </p>
                          <p className="leading-relaxed">
                            Con hãy để ý từ khóa <span className="underline decoration-amber-400 text-white font-semibold">"tổng quãng đường"</span> nhé. Con thử vẽ sơ đồ đoạn thẳng ra nháp trước xem sao!
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons inside mockup */}
                    <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/60">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                        Bám sát SGK hiện hành
                      </span>
                      <span className="flex items-center gap-1 text-amber-300">
                        <HelpCircle className="w-3.5 h-3.5" />
                        Gợi mở tư duy
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Grade Pill 1: Lớp 3 (Tiểu học) */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-soft-lg border border-amber-200 flex items-center gap-2.5 transform -rotate-2 hover:rotate-0 transition-transform">
                <div className="w-7 h-7 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Lớp 3 • Tiểu học</div>
                  <div className="text-[10px] text-amber-600 font-medium">Tập trung nền nếp & tư duy</div>
                </div>
              </div>

              {/* Floating Grade Pill 2: Lớp 7 (THCS) */}
              <div className="absolute top-1/2 -right-4 sm:-right-6 translate-y-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-soft-lg border border-emerald-200 flex items-center gap-2.5 transform rotate-2 hover:rotate-0 transition-transform">
                <div className="w-7 h-7 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs">
                  07
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Lớp 7 • THCS</div>
                  <div className="text-[10px] text-emerald-600 font-medium">Đào sâu suy luận & KHTN</div>
                </div>
              </div>

              {/* Floating Grade Pill 3: Lớp 12 (THPT) */}
              <div className="absolute -bottom-5 left-6 sm:left-10 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-soft-lg border border-purple-200 flex items-center gap-2.5 transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="w-7 h-7 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold text-xs">
                  12
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Lớp 12 • THPT</div>
                  <div className="text-[10px] text-purple-600 font-medium">Chiến lược Tốt nghiệp & ĐGNL</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
