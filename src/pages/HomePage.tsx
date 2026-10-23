import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../components/home/HeroSection';
import { LevelSelector } from '../components/home/LevelSelector';
import { CoreValues } from '../components/home/CoreValues';
import { HowItWorks } from '../components/home/HowItWorks';
import { VideoSection } from '../components/common/VideoSection';
import { TrustBanner } from '../components/home/TrustBanner';
import { BottomCta } from '../components/home/BottomCta';

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#chon-lop') {
      const el = document.getElementById('chon-lop');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const scrollToSelect = () => {
    const el = document.getElementById('chon-lop');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExplore = () => {
    const el = document.getElementById('gia-tri');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0">
      <HeroSection
        onSelectGradeClick={scrollToSelect}
        onExploreClick={scrollToExplore}
      />

      <LevelSelector />

      <div id="gia-tri">
        <CoreValues />
      </div>

      <HowItWorks />

      <VideoSection />

      <TrustBanner />

      <BottomCta onSelectGradeClick={scrollToSelect} />
    </div>
  );
};
