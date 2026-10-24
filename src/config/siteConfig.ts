import { SiteConfig } from '../types';

/**
 * CẤU HÌNH TẬP TRUNG VIETTUTORZ (CENTRALIZED PLACEHOLDERS)
 * Dễ dàng cập nhật các thông tin văn bản, liên hệ, video, căn cứ pháp lý.
 * Thiết kế an toàn và thẩm mỹ kể cả khi thông tin đang ở trạng thái mặc định.
 */
export const SITE_CONFIG: SiteConfig = {
  brandName: 'VietTutorz',
  slogan: 'VIETTUTORZ – MỖI NGÀY TIẾN BỘ, MỖI BƯỚC TỰ TIN',
  subSlogan: 'Mỗi học sinh có một hành trình riêng. VietTutorz giúp việc học trở nên gần gũi, có định hướng và phù hợp hơn với từng em.',
  mainCtaText: 'Chọn lớp – Bắt đầu học',
  secondaryCtaText: 'Khám phá VietTutorz',
  
  // [LINK_YOUTUBE]: Để trống "" hoặc điền URL Youtube (VD: "https://www.youtube.com/embed/dQw4w9WgXcQ" hoặc "https://youtu.be/...")
  // Nếu để trống hoặc chưa cấu hình, hệ thống tự động hiển thị khung giới thiệu tinh tế có thông báo dự phòng
  youtubeUrl: '', 

  // Căn cứ chương trình giáo dục phổ thông
  legalNotice: {
    // [SỐ/KÝ HIỆU VĂN BẢN]: Để trống hoặc điền số hiệu cụ thể
    documentNumber: 'Thông tư số 32/2018/TT-BGDĐT',
    // [NGÀY BAN HÀNH]: Ngày ban hành văn bản
    issueDate: '26/12/2018',
    // [TÊN VĂN BẢN]: Tên văn bản quy chuẩn
    documentName: 'Chương trình Giáo dục phổ thông (CT GDPT 2018)',
  },

  // Thông tin liên hệ
  contact: {
    // [EMAIL]: Email hỗ trợ
    email: 'hotro@viettutorz.edu.vn',
    // [SỐ_ĐT]: Hotline tư vấn / hỗ trợ
    phone: '0988.668.xxx',
    // [ĐỊA_CHỈ]: Để trống nếu chưa công bố địa chỉ vật lý
    address: 'Hà Nội & TP. Hồ Chí Minh, Việt Nam',
    // [LINK_ZALO]: Đường dẫn Zalo Official hoặc nhóm hỗ trợ
    zaloUrl: 'https://zalo.me',
  },

  // [NĂM HIỆN TẠI]
  copyrightYear: new Date().getFullYear() || 2026,
  
  // Tác giả & Đơn vị thiết kế
  designerCredit: 'Thiết kế bởi Duy Anh Lab',
};
