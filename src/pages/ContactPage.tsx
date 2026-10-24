import React from 'react';
import { Mail, Phone, MessageSquare, MapPin, Send, ExternalLink, ShieldAlert, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const ContactPage: React.FC = () => {
  const { email, phone, address, zaloUrl } = SITE_CONFIG.contact;

  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-brand-ice/50 via-white to-white min-h-[75vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-ice border border-blue-200 text-brand-blue text-xs md:text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Lắng nghe để hoàn thiện mỗi ngày</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
            Kết nối cùng VietTutorz
          </h1>

          <p className="mt-3 text-base sm:text-lg text-brand-muted leading-relaxed">
            Mọi góp ý đều góp phần hoàn thiện trải nghiệm học tập. Chúng tôi luôn trân trọng từng chia sẻ từ quý phụ huynh và các em học sinh.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* Email Card */}
          {email && (
            <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-soft hover:shadow-soft-lg transition-all duration-200 flex flex-col justify-between hover-lift">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-1">Hộp thư điện tử</h3>
                <p className="text-xs text-slate-500 mb-4">
                  Gửi câu hỏi, đề xuất nội dung bài học hoặc phản hồi trải nghiệm ứng dụng.
                </p>
                <div className="text-base font-semibold text-brand-navy font-mono break-all">
                  {email}
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={`mailto:${email}`}
                  className="w-full py-3 px-5 rounded-xl bg-brand-navy hover:bg-brand-blue text-white text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi email</span>
                </a>
              </div>
            </div>
          )}

          {/* Hotline / Zalo Card */}
          {(phone || zaloUrl) && (
            <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-soft hover:shadow-soft-lg transition-all duration-200 flex flex-col justify-between hover-lift">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-1">Điện thoại & Zalo</h3>
                <p className="text-xs text-slate-500 mb-4">
                  Hỗ trợ giải đáp nhanh về cách lựa chọn lớp học và mở ứng dụng gia sư.
                </p>
                {phone && (
                  <div className="text-base font-semibold text-brand-navy font-mono mb-2">
                    {phone}
                  </div>
                )}
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-3">
                {zaloUrl && (
                  <a
                    href={zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Liên hệ Zalo</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                )}
                {phone && (
                  <a
                    href={`tel:${phone.replace(/\D/g, '')}`}
                    className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Gọi điện</span>
                  </a>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Address Card (if available) */}
        {address && (
          <div className="rounded-3xl bg-white p-6 sm:p-7 border border-slate-200/90 shadow-soft-sm mb-10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-navy mb-0.5">Địa chỉ vận hành</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {address}
              </p>
            </div>
          </div>
        )}

        {/* Privacy & Safety Note */}
        <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-slate-600 leading-relaxed flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
          <div>
            <strong className="text-brand-navy font-semibold">Bảo mật thông tin: </strong>
            VietTutorz cam kết không lưu trữ thông tin nhận dạng cá nhân của học sinh và không yêu cầu đăng ký tài khoản bắt buộc để trải nghiệm nền tảng.
          </div>
        </div>

      </div>
    </div>
  );
};
