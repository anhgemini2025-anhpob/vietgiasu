import React from 'react';
import { BookCheck, Cpu, HeartHandshake, ShieldCheck } from 'lucide-react';

export const CoreValues: React.FC = () => {
  const values = [
    {
      title: 'Theo sát chương trình học',
      description: 'Nội dung được định hướng theo chương trình giáo dục phổ thông của Bộ GD&ĐT, trong phạm vi đã được xác minh.',
      icon: BookCheck,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
      badge: 'Chuẩn GDPT',
    },
    {
      title: 'Hỗ trợ học tập bằng AI',
      description: 'Hỗ trợ giải đáp, gợi ý bài tập và ôn tập theo năng lực, tùy tính năng thực tế của từng ứng dụng.',
      icon: Cpu,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-100',
      badge: 'Cá nhân hóa',
    },
    {
      title: 'Phụ huynh đồng hành cùng con',
      description: 'Hỗ trợ xây dựng mục tiêu, động viên và thiết lập phần thưởng học tập nếu tính năng này có trong ứng dụng.',
      icon: HeartHandshake,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-100',
      badge: 'Gắn kết gia đình',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-brand-ice/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs md:text-sm font-semibold mb-3">
            <ShieldCheck className="w-4 h-4 text-brand-blue" />
            <span>Cam kết trách nhiệm & minh bạch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Học tập phù hợp hơn với từng học sinh
          </h2>

          <p className="mt-3 text-base md:text-lg text-brand-muted">
            Xây dựng trên nền tảng giáo dục thực tế, hướng tới sự tiến bộ bền vững của con.
          </p>
        </div>

        {/* 3 Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, index) => {
            const IconComponent = v.icon;
            return (
              <div
                key={index}
                className="rounded-3xl bg-white p-7 sm:p-8 border border-slate-200/90 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between hover-lift"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${v.bgColor} flex items-center justify-center ${v.color}`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {v.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {v.title}
                  </h3>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {v.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Ứng dụng thực tế theo khối lớp</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
