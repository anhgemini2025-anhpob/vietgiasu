import React from 'react';
import { CheckCircle2, Sparkles, BookOpen, Brain, Compass, ArrowUpRight } from 'lucide-react';
import { GradeItem } from '../../types';

interface GradeCardProps {
  grade: GradeItem;
}

export const GradeCard: React.FC<GradeCardProps> = ({ grade }) => {
  return (
    <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-soft-lg overflow-hidden animate-fade-in">
      
      {/* Top Banner Accent with subtle gradient */}
      <div 
        className="h-3 w-full"
        style={{ backgroundColor: grade.accentColor }}
      />

      <div className="p-6 sm:p-8 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Main Info (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Grade Name & Level Badge */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <span 
                  className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border shadow-2xs"
                  style={{ 
                    backgroundColor: grade.lightBgColor, 
                    color: grade.accentColor,
                    borderColor: grade.borderColor 
                  }}
                >
                  {grade.levelName} • Lớp {grade.gradeNumber}
                </span>

                <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-600">
                  {grade.badge}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
                {grade.name} – Gia sư AI Đồng Hành
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              {grade.description}
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="text-brand-navy font-semibold">Đối tượng phù hợp: </strong>
              {grade.targetAudience}
            </div>

            {/* 4 Standard & Custom Features as mandated in Section 6 */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                Tính năng hỗ trợ học tập lớp {grade.gradeNumber}
              </h3>

              <div className="space-y-2.5">
                {grade.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 hover:bg-slate-50 transition-colors border border-slate-100">
                    <CheckCircle2 
                      className="w-5 h-5 shrink-0 mt-0.5" 
                      style={{ color: grade.accentColor }} 
                    />
                    <span className="text-sm text-slate-700 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}

                {/* Custom Feature 4 [TÍNH NĂNG RIÊNG LỚP X] */}
                <div 
                  className="flex items-start gap-3 p-3.5 rounded-xl border transition-colors shadow-2xs"
                  style={{ 
                    backgroundColor: grade.lightBgColor, 
                    borderColor: grade.borderColor 
                  }}
                >
                  <Sparkles 
                    className="w-5 h-5 shrink-0 mt-0.5" 
                    style={{ color: grade.accentColor }} 
                  />
                  <div className="text-sm font-semibold" style={{ color: '#0F172A' }}>
                    <span className="font-bold underline decoration-amber-400/80 mr-1.5">
                      Đặc thù Lớp {grade.gradeNumber}:
                    </span>
                    {grade.customFeature}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Action & Highlights Card (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-slate-50/80 p-6 sm:p-7 rounded-2xl border border-slate-200/80 space-y-6">
            
            {/* Subjects preview */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                <BookOpen className="w-4 h-4 text-brand-blue" />
                <span>Các môn học tiêu biểu</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {grade.highlights.subjects.map((sub, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-2xs"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            {/* Focus Skills */}
            <div className="space-y-3 pt-3 border-t border-slate-200">
              <div className="flex items-start gap-2.5 text-xs text-slate-600">
                <Brain className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800">Trọng tâm: </span>
                  {grade.highlights.focusSkill}
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-600">
                <Compass className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800">Phương pháp: </span>
                  {grade.highlights.learningStyle}
                </div>
              </div>
            </div>

            {/* Launch App Box */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <a
                href={grade.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl font-bold text-base flex items-center justify-center gap-2 text-white shadow-soft hover:shadow-soft-lg transition-all duration-200 transform hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: grade.accentColor }}
              >
                <span>Vào học ngay {grade.name}</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Exact destination URL display */}
              <div className="text-center">
                <span className="text-[11px] text-slate-500 inline-flex items-center gap-1 font-mono">
                  <span>Mở ứng dụng độc lập:</span>
                  <span className="text-brand-blue font-semibold underline underline-offset-2">
                    {grade.appUrl.replace('https://', '')}
                  </span>
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
