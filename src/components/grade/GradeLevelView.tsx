import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ChevronRight, Layers } from 'lucide-react';
import { EducationLevel, GradeItem } from '../../types';
import { GradeCard } from './GradeCard';

interface GradeLevelViewProps {
  level: EducationLevel;
  grades: GradeItem[];
}

export const GradeLevelView: React.FC<GradeLevelViewProps> = ({ level, grades }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedGrade = Number(searchParams.get('grade'));

  // Default to requested grade if it belongs to this level, otherwise select the first grade
  const initialGrade = grades.find((g) => g.gradeNumber === requestedGrade) || grades[0];
  const [selectedGradeId, setSelectedGradeId] = useState<number>(initialGrade.id);

  // Sync state if URL query parameter changes
  useEffect(() => {
    if (requestedGrade) {
      const match = grades.find((g) => g.gradeNumber === requestedGrade);
      if (match) {
        setSelectedGradeId(match.id);
      }
    }
  }, [requestedGrade, grades]);

  const activeGrade = grades.find((g) => g.id === selectedGradeId) || grades[0];

  const handleSelectGrade = (grade: GradeItem) => {
    setSelectedGradeId(grade.id);
    setSearchParams({ grade: grade.gradeNumber.toString() });
  };

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-6">
          <Link to="/" className="hover:text-brand-navy transition-colors">
            Trang chủ
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-brand-navy">{level.name}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-700">{activeGrade.name}</span>
        </nav>

        {/* Level Hero Header */}
        <div className="rounded-3xl p-6 sm:p-10 md:p-12 mb-10 text-center relative overflow-hidden shadow-soft-sm border"
             style={{ 
               backgroundColor: level.bgLight, 
               borderColor: level.borderColor 
             }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div 
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ backgroundColor: level.color }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border shadow-2xs text-xs md:text-sm font-bold uppercase tracking-wider"
                 style={{ color: level.color, borderColor: level.borderColor }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{level.name} • {level.range}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
              {level.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {level.heroDescription}
            </p>
          </div>
        </div>

        {/* SECTION 5 MANDATORY INTERACTIVE GRADE SELECTOR */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <h2 className="text-lg md:text-xl font-bold text-brand-navy flex items-center gap-2">
                <Layers className="w-5 h-5 text-brand-blue" />
                <span>Chọn lớp để xem chi tiết ứng dụng:</span>
              </h2>
              <p className="text-xs md:text-sm text-brand-muted">
                Bấm vào từng lớp bên dưới để hiển thị nội dung và đường link mở ứng dụng riêng biệt.
              </p>
            </div>

            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full self-start sm:self-auto">
              Đang chọn: <span className="font-bold text-brand-navy">{activeGrade.name}</span>
            </span>
          </div>

          {/* Grade Selector Tabs / Pills */}
          <div className="p-2 bg-slate-100/80 rounded-2xl border border-slate-200/80 flex flex-wrap gap-2 sm:gap-3">
            {grades.map((grade) => {
              const isActive = grade.id === activeGrade.id;

              return (
                <button
                  key={grade.id}
                  onClick={() => handleSelectGrade(grade)}
                  className={`flex-1 min-w-[100px] sm:min-w-[120px] py-3.5 px-4 rounded-xl text-sm font-bold transition-all duration-200 flex flex-col items-center justify-center gap-1 shadow-2xs focus:outline-none focus:ring-2 ${
                    isActive
                      ? 'text-white shadow-soft transform -translate-y-0.5'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80 hover:border-slate-300'
                  }`}
                  style={{
                    backgroundColor: isActive ? level.color : undefined,
                  }}
                  aria-pressed={isActive}
                >
                  <span className="text-xs opacity-80 uppercase tracking-wider font-semibold">Khối</span>
                  <span className="text-base sm:text-lg font-extrabold">{grade.name}</span>
                  {isActive && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE GRADE DETAIL VIEW (Strict requirement: ONLY the active grade detail is rendered) */}
        <div className="transition-all duration-300">
          <GradeCard grade={activeGrade} />
        </div>

        {/* Other Education Levels Navigation Helper */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base font-bold text-brand-navy">
              Bạn có con học ở cấp học khác?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Chuyển nhanh sang các cấp học khác trong hệ sinh thái VietTuorz:
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {level.id !== 'tieu-hoc' && (
              <Link
                to="/tieu-hoc"
                className="px-4 py-2.5 rounded-xl bg-white border border-amber-300 text-amber-700 text-xs sm:text-sm font-bold hover:bg-amber-50 transition-colors shadow-2xs flex items-center gap-1.5"
              >
                <span>Cấp Tiểu học (1–5)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}

            {level.id !== 'thcs' && (
              <Link
                to="/thcs"
                className="px-4 py-2.5 rounded-xl bg-white border border-emerald-300 text-emerald-700 text-xs sm:text-sm font-bold hover:bg-emerald-50 transition-colors shadow-2xs flex items-center gap-1.5"
              >
                <span>Cấp THCS (6–9)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}

            {level.id !== 'thpt' && (
              <Link
                to="/thpt"
                className="px-4 py-2.5 rounded-xl bg-white border border-purple-300 text-purple-700 text-xs sm:text-sm font-bold hover:bg-purple-50 transition-colors shadow-2xs flex items-center gap-1.5"
              >
                <span>Cấp THPT (10–12)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
