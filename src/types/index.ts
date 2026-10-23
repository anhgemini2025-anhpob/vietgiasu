export type EducationLevelId = 'tieu-hoc' | 'thcs' | 'thpt';

export interface GradeItem {
  id: number;
  gradeNumber: number;
  name: string;
  levelId: EducationLevelId;
  levelName: string;
  badge: string;
  appUrl: string;
  description: string;
  targetAudience: string;
  accentColor: string;
  lightBgColor: string;
  borderColor: string;
  features: string[];
  customFeature: string; // [TÍNH NĂNG RIÊNG LỚP X]
  highlights: {
    focusSkill: string;
    learningStyle: string;
    subjects: string[];
  };
}

export interface EducationLevel {
  id: EducationLevelId;
  name: string;
  shortName: string;
  range: string;
  grades: number[];
  color: string;
  bgLight: string;
  borderColor: string;
  heroHeadline: string;
  heroDescription: string;
  summary: string;
  route: string;
}

export interface SiteConfig {
  brandName: string;
  slogan: string;
  subSlogan: string;
  mainCtaText: string;
  secondaryCtaText: string;
  youtubeUrl: string; // [LINK_YOUTUBE]
  legalNotice: {
    documentNumber: string; // [SỐ/KÝ HIỆU VĂN BẢN]
    issueDate: string;       // [NGÀY BAN HÀNH]
    documentName: string;    // [TÊN VĂN BẢN]
  };
  contact: {
    email: string;           // [EMAIL]
    phone: string;           // [SỐ_ĐT]
    address: string;         // [ĐỊA_CHỈ]
    zaloUrl: string;         // [LINK_ZALO]
  };
  copyrightYear: number;     // [NĂM HIỆN TẠI]
  designerCredit: string;
}
