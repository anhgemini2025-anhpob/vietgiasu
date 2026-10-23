import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageSquare, ExternalLink, Heart, ShieldCheck } from 'lucide-react';
import { Logo } from '../common/Logo';
import { SITE_CONFIG } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-slate-200 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col (2 cols on large screen) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="md" />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mt-3">
              {SITE_CONFIG.subSlogan}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>12 ứng dụng độc lập • Trải nghiệm an toàn cho học sinh</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Cấp học VietTuorz
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/tieu-hoc" className="hover:text-amber-400 transition-colors flex items-center justify-between group">
                  <span>Tiểu học</span>
                  <span className="text-xs text-slate-400 group-hover:text-amber-300">Lớp 1–5</span>
                </Link>
              </li>
              <li>
                <Link to="/thcs" className="hover:text-emerald-400 transition-colors flex items-center justify-between group">
                  <span>Trung học cơ sở</span>
                  <span className="text-xs text-slate-400 group-hover:text-emerald-300">Lớp 6–9</span>
                </Link>
              </li>
              <li>
                <Link to="/thpt" className="hover:text-purple-400 transition-colors flex items-center justify-between group">
                  <span>Trung học phổ thông</span>
                  <span className="text-xs text-slate-400 group-hover:text-purple-300">Lớp 10–12</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Điều hướng
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/tieu-hoc" className="hover:text-white transition-colors">
                  Giới thiệu Tiểu học
                </Link>
              </li>
              <li>
                <Link to="/thcs" className="hover:text-white transition-colors">
                  Giới thiệu THCS
                </Link>
              </li>
              <li>
                <Link to="/thpt" className="hover:text-white transition-colors">
                  Giới thiệu THPT
                </Link>
              </li>
              <li>
                <Link to="/lien-he" className="hover:text-white transition-colors">
                  Liên hệ & Góp ý
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Kết nối & Hỗ trợ
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {SITE_CONFIG.contact.email && (
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="truncate">{SITE_CONFIG.contact.email}</span>
                  </a>
                </li>
              )}
              {SITE_CONFIG.contact.phone && (
                <li>
                  <span className="inline-flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{SITE_CONFIG.contact.phone}</span>
                  </span>
                </li>
              )}
              {SITE_CONFIG.contact.zaloUrl && (
                <li>
                  <a
                    href={SITE_CONFIG.contact.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition-colors inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Liên hệ Zalo</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </li>
              )}
              {SITE_CONFIG.contact.address && (
                <li className="text-xs text-slate-400 pt-1 leading-normal">
                  {SITE_CONFIG.contact.address}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Duy Anh Lab credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {SITE_CONFIG.copyrightYear} {SITE_CONFIG.brandName}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-slate-300">
            <span>{SITE_CONFIG.designerCredit}</span>
            <span className="text-slate-600">•</span>
            <span className="inline-flex items-center gap-1 text-slate-400">
              Đồng hành cùng học sinh Việt <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
