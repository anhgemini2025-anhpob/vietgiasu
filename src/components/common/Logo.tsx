import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = true,
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-8 h-8 rounded-xl',
    md: 'w-10 h-10 rounded-2xl',
    lg: 'w-13 h-13 rounded-2xl',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <Link
      to="/"
      className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-xl"
    >
      {/* Official Brand Icon from User */}
      <div
        className={`relative ${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105 overflow-hidden shadow-sm shadow-blue-900/30 border border-blue-900/40`}
      >
        <img
          src="/logo.png"
          alt="VietTutorz Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Brand Typography: VietTutorz */}
      <div className="flex flex-col">
        <div className={`font-bold tracking-tight leading-none ${textSizes[size]}`}>
          <span className={isLight ? 'text-white' : 'text-brand-navy'}>Viet</span>
          <span className="text-brand-blue">Tutorz</span>
        </div>
        {showTagline && (
          <span
            className={`text-[10px] tracking-wider uppercase font-semibold mt-1 ${
              isLight ? 'text-slate-300' : 'text-brand-muted'
            }`}
          >
            Gia sư AI lớp 1–12
          </span>
        )}
      </div>
    </Link>
  );
};
