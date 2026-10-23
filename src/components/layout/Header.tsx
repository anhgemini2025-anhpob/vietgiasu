import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight, GraduationCap, Sparkles } from 'lucide-react';
import { Logo } from '../common/Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Tiểu học', path: '/tieu-hoc', badge: 'Lớp 1–5', color: 'hover:text-amber-600' },
    { name: 'THCS', path: '/thcs', badge: 'Lớp 6–9', color: 'hover:text-emerald-600' },
    { name: 'THPT', path: '/thpt', badge: 'Lớp 10–12', color: 'hover:text-purple-600' },
    { name: 'Liên hệ', path: '/lien-he' },
  ];

  const handleSelectGradeCta = () => {
    if (location.pathname === '/') {
      const section = document.getElementById('chon-lop');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#chon-lop');
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft-sm py-3 border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-sm py-4 md:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-brand-blue bg-blue-50/80 font-bold'
                      : 'text-slate-600 hover:text-brand-navy hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
                {link.badge && (
                  <span className="hidden lg:inline-block text-[11px] font-normal text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-md">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleSelectGradeCta}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-navy to-brand-navy-light text-white text-sm font-semibold shadow-soft hover:shadow-soft-lg hover:from-brand-blue hover:to-brand-navy transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Chọn lớp ngay</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleSelectGradeCta}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-brand-navy text-white text-xs font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Chọn lớp</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-brand-navy hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
              aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-100 animate-fade-in pb-4">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between transition-colors ${
                      isActive
                        ? 'text-brand-blue bg-blue-50 font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  <div className="flex items-center gap-2">
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-xs font-normal text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </NavLink>
              ))}

              <div className="pt-3 px-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleSelectGradeCta();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-navy text-white text-base font-semibold shadow-soft"
                >
                  <GraduationCap className="w-5 h-5 text-amber-400" />
                  <span>Chọn lớp học ngay (Lớp 1–12)</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
