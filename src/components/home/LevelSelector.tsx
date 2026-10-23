import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpen, Brain, Target, Compass } from 'lucide-react';
import { EDUCATION_LEVELS } from '../../data/gradesData';

export const LevelSelector: React.FC = () => {
  const levels = [
    {
      ...EDUCATION_LEVELS['tieu-hoc'],
      title: 'TIỂU HỌC — LỚP 1–5',
      slogan: 'Xây nền tảng, hình thành thói quen học tập.',
      buttonText: 'Chọn lớp 1–5',
      badgeText: '5 lớp học • Khởi đầu tươi sáng',
      icon: BookOpen,
      themeColor: '#F5A623',
      bgCard: 'hover:border-amber-400 group-hover:shadow-glow-primary',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      btnBg: 'bg-amber-500 hover:bg-amber-600 text-white',
      accentGradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
      gradeList: [1, 2, 3, 4, 5],
    },
    {
      ...EDUCATION_LEVELS['thcs'],
      title: 'THCS — LỚP 6–9',
      slogan: 'Củng cố kiến thức, phát triển tư duy.',
      buttonText: 'Chọn lớp 6–9',
      badgeText: '4 lớp học • Nâng tầm suy luận',
      icon: Brain,
      themeColor: '#10B981',
      bgCard: 'hover:border-emerald-400 group-hover:shadow-glow-secondary',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      btnBg: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      accentGradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
      gradeList: [6, 7, 8, 9],
    },
    {
      ...EDUCATION_LEVELS['thpt'],
      title: 'THPT — LỚP 10–12',
      slogan: 'Học chuyên sâu, chủ động ôn tập.',
      buttonText: 'Chọn lớp 10–12',
      badgeText: '3 lớp học • Bứt phá mục tiêu',
      icon: Target,
      themeColor: '#8B5CF6',
      bgCard: 'hover:border-purple-400 group-hover:shadow-glow-high',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
      btnBg: 'bg-purple-600 hover:bg-purple-700 text-white',
      accentGradient: 'from-purple-500/10 via-purple-500/5 to-transparent',
      gradeList: [10, 11, 12],
    },
  ];

  return (
    <section id="chon-lop" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-ice border border-blue-200 text-brand-blue text-xs md:text-sm font-semibold mb-3">
            <Compass className="w-4 h-4" />
            <span>Định hướng theo từng giai đoạn phát triển</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Con đang học lớp mấy?
          </h2>
          
          <p className="mt-3 text-base md:text-lg text-brand-muted leading-relaxed">
            Chọn đúng lớp để khám phá ứng dụng gia sư phù hợp với lứa tuổi và chương trình học của con.
          </p>
        </div>

        {/* 3 Main Level Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level) => {
            const IconComponent = level.icon;
            return (
              <div
                key={level.id}
                className="group relative rounded-3xl bg-white border border-slate-200/90 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between overflow-hidden hover-lift"
              >
                {/* Decorative Top Ambient Gradient */}
                <div className={`absolute top-0 inset-x-0 h-36 bg-gradient-to-b ${level.accentGradient} pointer-events-none`} />

                <div className="relative p-6 sm:p-8 flex-1 flex flex-col">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${level.badgeBg}`}>
                      {level.badgeText}
                    </span>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: level.themeColor }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Level Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors">
                    {level.title}
                  </h3>

                  {/* Level Slogan */}
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                    “{level.slogan}”
                  </p>

                  {/* Grade quick pills inside card */}
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <div className="text-xs text-slate-400 font-medium mb-2.5">Các lớp thuộc cấp học:</div>
                    <div className="flex flex-wrap gap-2">
                      {level.gradeList.map((gNum) => (
                        <Link
                          key={gNum}
                          to={`${level.route}?grade=${gNum}`}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-400 hover:bg-slate-100 transition-colors"
                        >
                          Lớp {gNum}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-6 sm:p-8 pt-0">
                  <Link
                    to={level.route}
                    className={`w-full py-3.5 px-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all duration-200 transform group-hover:-translate-y-0.5 ${level.btnBg}`}
                  >
                    <span>{level.buttonText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick direct selector bar for all 12 grades */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-soft-sm text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5">
            <div className="text-left">
              <h4 className="text-sm md:text-base font-bold text-brand-navy flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-blue" />
                Truy cập trực tiếp 12 ứng dụng gia sư AI
              </h4>
              <p className="text-xs md:text-sm text-brand-muted">
                Bấm vào số lớp của con để vào ngay trang chi tiết và mở ứng dụng:
              </p>
            </div>
            <span className="text-xs text-slate-500 font-medium bg-white px-3 py-1 rounded-full border border-slate-200 shrink-0">
              Không cần đăng nhập • Trải nghiệm ngay
            </span>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 sm:gap-2.5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => {
              const route = num <= 5 ? '/tieu-hoc' : num <= 9 ? '/thcs' : '/thpt';
              const colorClass =
                num <= 5
                  ? 'hover:border-amber-400 hover:bg-amber-50 hover:text-amber-800'
                  : num <= 9
                  ? 'hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-800'
                  : 'hover:border-purple-400 hover:bg-purple-50 hover:text-purple-800';

              return (
                <Link
                  key={num}
                  to={`${route}?grade=${num}`}
                  className={`py-2.5 px-2 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-sm shadow-2xs hover:shadow-sm transition-all duration-150 flex flex-col items-center justify-center gap-0.5 ${colorClass}`}
                >
                  <span className="text-[10px] text-slate-400 uppercase font-medium">Lớp</span>
                  <span className="text-base font-extrabold">{num}</span>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
