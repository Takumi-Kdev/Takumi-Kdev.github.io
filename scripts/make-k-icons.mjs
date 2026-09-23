// ============================================================
// make-k-icons.mjs — 正方形のKアイコン画像を生成してDesktopへ出力
//   実行: node scripts/make-k-icons.mjs
// ============================================================
import { Resvg } from '@resvg/resvg-js';
import { writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const OUT_DIR = join(homedir(), 'Desktop');

const render = (svg, outPath, size = 1024) => {
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: size } });
  const png = resvg.render().asPng();
  writeFileSync(outPath, png);
  console.log(`✓ ${outPath} (${size}×${size}, ${(png.length / 1024).toFixed(1)}KB)`);
};

// ------------------------------------------------------------
// 1. 巧黄土（Koodo）— Kマーク
// ------------------------------------------------------------
const koodoK = (bg) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  ${bg}
  <circle cx="42.5" cy="16.5" r="3.2" fill="#B8976E" />
  <g stroke="#2C2416" stroke-width="4.6" stroke-linecap="round" fill="none">
    <path d="M22 15 L22 49" />
    <path d="M22 32 L40 15" />
    <path d="M22 32 L42 49" />
  </g>
  <path d="M14 55.5 H50" stroke="#B8976E" stroke-width="2.6" stroke-linecap="round" />
</svg>`;

// ------------------------------------------------------------
// 2. Takumi-Kdev — 幾何モノグラム
// ------------------------------------------------------------
const gradient = `<defs>
    <linearGradient id="g" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="96" y2="96">
      <stop offset="0" stop-color="#2563EB" />
      <stop offset="0.5" stop-color="#4F46E5" />
      <stop offset="1" stop-color="#0EA5A5" />
    </linearGradient>
  </defs>`;

// 六角形フレーム + グラデーションのK（透過）
const takumiOutline = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">
  ${gradient}
  <polygon points="48,4 88,26 88,70 48,92 8,70 8,26" fill="none" stroke="url(#g)" stroke-width="3" />
  <g stroke="url(#g)" stroke-width="7" stroke-linecap="square" fill="none">
    <path d="M34 28 V68" />
    <path d="M37 48 L58 28" />
    <path d="M37 48 L60 68" />
  </g>
  <circle cx="62" cy="25" r="4" fill="url(#g)" />
</svg>`;

// グラデーション背景 + 白いK（SNSアイコン向き）
const takumiAppIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">
  ${gradient}
  <rect x="0" y="0" width="96" height="96" fill="url(#g)" />
  <g stroke="#FFFFFF" stroke-width="7" stroke-linecap="square" fill="none">
    <path d="M35 28 V68" />
    <path d="M38 48 L58 28" />
    <path d="M38 48 L60 68" />
  </g>
  <circle cx="63" cy="25" r="4" fill="#FFFFFF" opacity="0.9" />
</svg>`;

// ------------------------------------------------------------
// 出力
// ------------------------------------------------------------
render(koodoK('<rect width="64" height="64" fill="#F9F6F0" />'), join(OUT_DIR, 'koodo-K-icon-1024.png'));
render(koodoK(''), join(OUT_DIR, 'koodo-K-icon-1024-transparent.png'));
render(takumiAppIcon, join(OUT_DIR, 'takumi-kdev-K-icon-1024.png'));
render(takumiOutline, join(OUT_DIR, 'takumi-kdev-K-icon-1024-transparent.png'));
