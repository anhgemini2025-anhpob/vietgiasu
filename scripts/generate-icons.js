import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Gorgeous, master-crafted SVG icon for VietTuorz App Icon
const svgIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A8A" />
      <stop offset="50%" stop-color="#172554" />
      <stop offset="100%" stop-color="#0B132B" />
    </linearGradient>

    <!-- Inner Radial Glow -->
    <radialGradient id="innerGlow" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.35" />
      <stop offset="60%" stop-color="#1D4ED8" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#172554" stop-opacity="0" />
    </radialGradient>

    <!-- Gold Accent Gradient -->
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A" />
      <stop offset="30%" stop-color="#F5A623" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>

    <!-- Tech Blue Gradient -->
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#93C5FD" />
      <stop offset="40%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#1D4ED8" />
    </linearGradient>

    <!-- Bright White Spark Gradient -->
    <linearGradient id="sparkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#BAE6FD" />
    </linearGradient>

    <!-- Subtle Drop Shadow Filter -->
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#050B1A" flood-opacity="0.6" />
    </filter>

    <filter id="sparkleGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="#60A5FA" flood-opacity="0.9" />
    </filter>
  </defs>

  <!-- iOS / Android Squircle Base -->
  <rect x="0" y="0" width="512" height="512" rx="115" fill="url(#bgGrad)" />
  <!-- Inner Ambient Glow -->
  <rect x="0" y="0" width="512" height="512" rx="115" fill="url(#innerGlow)" />
  <!-- Elegant border rim -->
  <rect x="4" y="4" width="504" height="504" rx="111" fill="none" stroke="#60A5FA" stroke-width="4" stroke-opacity="0.3" />

  <!-- Center Artwork Group with Shadow -->
  <g filter="url(#softShadow)">
    
    <!-- 1. Open Knowledge Book Base (Wing Structure) -->
    <path d="M120 330 C180 300 240 330 256 345 C272 330 332 300 392 330 L392 365 C332 335 272 365 256 380 C240 365 180 335 120 365 Z"
          fill="url(#goldGrad)" opacity="0.95" />
    
    <!-- 2. Graduation Cap Rhombus (Academic Crown) -->
    <polygon points="256,130 410,205 256,280 102,205" fill="url(#blueGrad)" />
    <!-- Cap Rim Highlight -->
    <polyline points="102,205 256,280 410,205" fill="none" stroke="#93C5FD" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
    
    <!-- Cap Underneath Base -->
    <path d="M165 240 L165 295 C165 335 347 335 347 295 L347 240 C320 258 288 268 256 268 C224 268 192 258 165 240 Z"
          fill="#172554" stroke="#3B82F6" stroke-width="4" />

    <!-- 3. Golden Tassel and Ribbon -->
    <path d="M256 205 C330 205 380 230 380 280 L380 310" 
          fill="none" stroke="url(#goldGrad)" stroke-width="7" stroke-linecap="round" />
    <circle cx="380" cy="315" r="9" fill="url(#goldGrad)" />

    <!-- 4. The Core AI Sparkle Star (Diamond Quad Star) -->
    <g filter="url(#sparkleGlow)">
      <!-- Central Four-Point Star -->
      <path d="M256 165 Q256 205 296 205 Q256 205 256 245 Q256 205 216 205 Q256 205 256 165 Z" fill="url(#sparkGrad)" />
      <!-- Center intense pinpoint -->
      <circle cx="256" cy="205" r="5" fill="#FFFFFF" />
    </g>

    <!-- Mini satellite sparks -->
    <circle cx="320" cy="165" r="4" fill="#93C5FD" opacity="0.9" />
    <circle cx="192" cy="170" r="3" fill="#FDE68A" opacity="0.85" />

    <!-- 5. Stylized 'V' Monogram Inset -->
    <path d="M232 312 L256 348 L280 312" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.95" />
  </g>
</svg>
`;

fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgIcon.trim());
console.log('Saved public/favicon.svg');

async function renderIcons() {
  const svgBuffer = Buffer.from(svgIcon);

  // 1. 512x512 Android & PWA
  await sharp(svgBuffer).resize(512, 512).png().toFile(path.join(publicDir, 'icon-512.png'));
  console.log('Saved public/icon-512.png');

  // 2. 192x192 Android PWA
  await sharp(svgBuffer).resize(192, 192).png().toFile(path.join(publicDir, 'icon-192.png'));
  console.log('Saved public/icon-192.png');

  // 3. 180x180 Apple Touch Icon (iPhone / iPad Home screen)
  await sharp(svgBuffer).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Saved public/apple-touch-icon.png');

  // 4. 32x32 Favicon
  await sharp(svgBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('Saved public/favicon-32x32.png');

  // 5. 16x16 Favicon
  await sharp(svgBuffer).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png'));
  console.log('Saved public/favicon-16x16.png');

  // 6. Manifest for PWA & mobile Add to Home Screen
  const manifest = {
    name: "VietTuorz – Gia sư AI lớp 1–12",
    short_name: "VietTuorz",
    description: "Hệ sinh thái gia sư AI đồng hành cùng học sinh Việt Nam từ lớp 1 đến lớp 12.",
    start_url: "/",
    display: "standalone",
    background_color: "#172554",
    theme_color: "#172554",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ]
  };

  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
  console.log('Saved public/site.webmanifest');
}

renderIcons().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
