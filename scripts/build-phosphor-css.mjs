// ============================================================
// build-phosphor-css.mjs — 使用しているアイコンだけのCSSを生成
//
//   全量CSS（約1500アイコン）と4形式のフォントを配信しないため、
//   実際に使っているアイコンだけのCSSと woff2 を生成する。
//
//   実行: npm run icons
// ============================================================
import {
  readFileSync,
  writeFileSync,
  readdirSync,
  statSync,
  mkdirSync,
  copyFileSync,
} from 'node:fs';
import { join } from 'node:path';

const PKG_CSS = 'node_modules/@phosphor-icons/web/src/regular/style.css';
const PKG_FONT = 'node_modules/@phosphor-icons/web/src/regular/Phosphor.woff2';
const OUT_CSS = 'src/styles/phosphor.css';
const OUT_FONT = 'public/fonts/phosphor.woff2';

const used = new Set();
function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      walk(path);
    } else if (/\.(astro|ts|js|css|md)$/.test(entry)) {
      const text = readFileSync(path, 'utf8');
      for (const match of text.matchAll(/ph\s+ph-([a-z0-9-]+)/g)) {
        used.add(match[1]);
      }
    }
  }
}
walk('src');

const pkg = readFileSync(PKG_CSS, 'utf8');
const base = pkg.match(/\.ph\s*\{[^}]*\}/)?.[0];
if (!base) throw new Error('.ph の基本ルールが見つかりません');

const missing = [];
const rules = [...used].sort().map((name) => {
  const rule = pkg.match(new RegExp(`\\.ph\\.ph-${name}:before\\s*\\{[^}]*\\}`));
  if (!rule) {
    missing.push(name);
    return `/* 未定義: ${name} */`;
  }
  return rule[0];
});
if (missing.length) console.warn('未定義のアイコン:', missing.join(', '));

const css = `/* ============================================================
   自動生成ファイル — scripts/build-phosphor-css.mjs
   使用アイコンのみ（${used.size}個）。手で編集しない。
   Phosphor Icons — MIT License (https://phosphoricons.com)
   ============================================================ */
@font-face {
  font-family: "Phosphor";
  src: url("/fonts/phosphor.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

${base}

${rules.join('\n')}
`;

mkdirSync('public/fonts', { recursive: true });
writeFileSync(OUT_CSS, css);
copyFileSync(PKG_FONT, OUT_FONT);

console.log(`✓ ${OUT_CSS}（アイコン ${used.size} 個）`);
console.log(`✓ ${OUT_FONT}`);
