import React from 'react';
import { Award, FileText } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

export const TrustBanner: React.FC = () => {
  const { documentNumber, issueDate, documentName } = SITE_CONFIG.legalNotice;
  
  // Format the legal notice line gracefully
  const legalLine = documentNumber && documentName
    ? `Căn cứ: ${documentNumber}${issueDate ? `, ngày ${issueDate}` : ''} – ${documentName}`
    : null;

  return (
    <section className="py-10 bg-slate-50/80 border-y border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
          {/* Badge Icon */}
          <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-soft-sm flex items-center justify-center text-brand-blue shrink-0">
            <Award className="w-6 h-6" />
          </div>

          {/* Text Information */}
          <div className="space-y-1.5 flex-1">
            <p className="text-sm md:text-base font-semibold text-brand-navy leading-snug">
              Nội dung học tập được định hướng bám sát Chương trình giáo dục phổ thông của Bộ Giáo dục và Đào tạo.
            </p>

            {legalLine && (
              <p className="text-xs md:text-sm text-slate-500 flex items-center justify-center sm:justify-start gap-1.5 flex-wrap">
                <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{legalLine}.</span>
              </p>
            )}

            <p className="text-[11px] text-slate-400 italic">
              * Lưu ý: VietTuorz là công cụ gia sư AI bổ trợ phương pháp tự học và ôn tập độc lập cho học sinh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
