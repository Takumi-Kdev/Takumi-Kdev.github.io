// ============================================================
// generate-assets.mjs — SVGからOGP画像・アイコンPNGを生成
//   npm run assets で実行
// ============================================================
import { readFileSync, writeFileSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';

function render(svgPath, outPath, width) {
  const svg = readFileSync(svgPath, 'utf8');
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: width },
    font: { loadSystemFonts: true },
  });
  const png = resvg.render().asPng();
  writeFileSync(outPath, png);
  console.log(`✓ ${outPath} (${width}px, ${(png.length / 1024).toFixed(1)}KB)`);
}

render('public/og.svg', 'public/og.png', 1200);
render('public/favicon.svg', 'public/apple-touch-icon.png', 180);
render('public/favicon.svg', 'public/favicon-32.png', 32);
