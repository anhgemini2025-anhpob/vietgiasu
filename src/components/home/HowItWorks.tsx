import React from 'react';
import { Layers, MousePointerClick, Rocket } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Chọn cấp học',
      description: 'Lựa chọn Tiểu học (Lớp 1–5), THCS (Lớp 6–9) hoặc THPT (Lớp 10–12) phù hợp giai đoạn của con.',
      icon: Layers,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-200',
    },
    {
      number: '02',
      title: 'Chọn đúng lớp của con',
      description: 'Xem thông tin định hướng và các tính năng hỗ trợ được thiết kế riêng cho khối lớp.',
      icon: MousePointerClick,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-200',
    },
    {
      number: '03',
      title: 'Mở ứng dụng & khám phá',
      description: 'Bấm "Vào học ngay" để trải nghiệm ứng dụng gia sư AI trực tiếp mà không cần đăng ký phức tạp.',
      icon: Rocket,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-200',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs md:text-sm font-semibold mb-3">
            <span>Dễ dàng cho mọi phụ huynh</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Quy trình sử dụng trong 3 bước
          </h2>
          <p className="mt-3 text-base md:text-lg text-brand-muted">
            Không cần tài khoản phức tạp, chỉ cần vài giây để kết nối con với môi trường học tập.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 border-t-2 border-dashed border-slate-200 -translate-y-8 z-0 pointer-events-none" />

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative z-10 rounded-3xl bg-white p-8 border border-slate-200/90 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col items-center text-center hover-lift"
              >
                {/* Step number badge */}
                <span className="text-xs font-black tracking-widest text-slate-400 uppercase mb-4">
                  Bước {step.number}
                </span>

                {/* Step Icon */}
                <div className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center ${step.color} mb-6 shadow-sm`}>
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
