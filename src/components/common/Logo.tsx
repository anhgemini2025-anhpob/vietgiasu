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
  const isLight = variant === 'light'; // Light text for dark navy background (Footer)

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <Link to="/" className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-xl">
      {/* Brand Icon SVG */}
      <div className={`relative ${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full drop-shadow-sm">
          <rect width="48" height="48" rx="12" fill={isLight ? '#1E3A8A' : '#172554'} />
          {/* Cap diamond */}
          <polygon points="24,12 38,19 24,26 10,19" fill="#3B82F6" />
          <polyline points="10,19 24,26 38,19" stroke="#93C5FD" strokeWidth="1.5" />
          {/* Cap base arch */}
          <path d="M15 22.5 V27 C15 31 33 31 33 27 V22.5" fill="none" stroke={isLight ? '#60A5FA' : '#3B82F6'} strokeWidth="2" strokeLinecap="round" />
          {/* Open book lower wings in gold */}
          <path d="M12 32 C17 29 22 31 24 33 C26 31 31 29 36 32 V35 C31 32 26 34 24 36 C22 34 17 32 12 35 Z" fill="#F5A623" />
          {/* Central AI Star Spark */}
          <path d="M24 16 Q24 19 27 19 Q24 19 24 22 Q24 19 21 19 Q24 19 24 16 Z" fill="#FFFFFF" />
          {/* Gold tassel */}
          <path d="M24 19 Q31 20 34 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" />
          <circle cx="34" cy="25" r="1.5" fill="#F5A623" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className={`font-bold tracking-tight leading-none ${textSizes[size]}`}>
          <span className={isLight ? 'text-white' : 'text-brand-navy'}>Viet</span>
          <span className="text-brand-blue">Tuorz</span>
        </div>
        {showTagline && (
          <span className={`text-[10px] tracking-wider uppercase font-semibold mt-1 ${isLight ? 'text-slate-300' : 'text-brand-muted'}`}>
            Gia sư AI lớp 1–12
          </span>
        )}
      </div>
    </Link>
  );
};
