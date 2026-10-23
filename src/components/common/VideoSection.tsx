import React from 'react';
import { Play, Sparkles, Video } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

interface VideoSectionProps {
  videoUrl?: string;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  videoUrl = SITE_CONFIG.youtubeUrl,
}) => {
  // Check if we have an active YouTube link
  const hasValidVideo = Boolean(videoUrl && videoUrl.trim() !== '' && videoUrl !== '[LINK_YOUTUBE]');

  // Normalize YouTube embed URL
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('embed/')) return url;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube-nocookie.com/embed/${match[2]}?rel=0`
      : url;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-brand-ice/40 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-ice border border-blue-200 text-brand-blue text-xs md:text-sm font-semibold mb-4">
            <Video className="w-4 h-4" />
            <span>Trực quan & Dễ hiểu</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand-navy tracking-tight">
            Khám phá VietTuorz trong vài phút
          </h2>
          <p className="mt-3 text-base md:text-lg text-brand-muted">
            Tìm hiểu cách hệ sinh thái gia sư AI đồng hành cùng từng học sinh từ lớp 1 đến lớp 12.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="relative mx-auto max-w-4xl rounded-2xl md:rounded-3xl overflow-hidden shadow-soft-lg border border-slate-200/80 bg-slate-900 aspect-video group">
          {hasValidVideo ? (
            <iframe
              src={getEmbedUrl(videoUrl)}
              title="Khám phá VietTuorz – Gia sư AI lớp 1–12"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            /* Elegant Placeholder When Video URL is pending */
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-12 text-center overflow-hidden">
              {/* Decorative Tech Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy via-[#1e3a8a] to-slate-900 opacity-95" />
              
              {/* Radial Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

              {/* Grid Overlay */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} 
              />

              {/* Center Content */}
              <div className="relative z-10 flex flex-col items-center max-w-md mx-auto">
                {/* Glowing Play Placeholder Button */}
                <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-300" />
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-105">
                    <Play className="w-7 h-7 md:w-8 md:h-8 text-amber-300 fill-amber-300 translate-x-0.5" />
                  </div>
                </div>

                {/* Status Notice */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs md:text-sm font-medium mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Video giới thiệu sẽ được cập nhật</span>
                </div>

                <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                  Trải nghiệm lớp học AI thế hệ mới
                </h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-sm">
                  Video hướng dẫn chi tiết cách học sinh tự học, làm bài tập và hỏi đáp gia sư AI theo từng môn học sẽ sớm ra mắt.
                </p>

                {/* Floating Grade badges preview */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 text-amber-200 text-xs font-medium border border-amber-300/30">
                    Tiểu học (1–5)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 text-emerald-200 text-xs font-medium border border-emerald-300/30">
                    THCS (6–9)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 text-purple-200 text-xs font-medium border border-purple-300/30">
                    THPT (10–12)
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
