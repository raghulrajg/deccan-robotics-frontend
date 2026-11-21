/**
 * Regenerates the favicon set and the Open Graph share image in /public.
 *
 * Optional — the generated files are committed, so you only need this after
 * changing the logo, colours or headline.
 *
 *   npm run build                     # the OG image reuses the hero arm from dist/
 *   npm i -D playwright && npx playwright install chromium
 *   node scripts/generate-assets.cjs
 */
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..');
const pub = path.join(root, 'public');
// Fonts are inlined as data: URLs (pages opened with setContent can't read file:// URLs).
const font = (pkg, file) =>
  `data:font/woff2;base64,${fs
    .readFileSync(path.join(root, 'node_modules/@fontsource-variable', pkg, 'files', file))
    .toString('base64')}`;

const MARK = `
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 2 28.12 9v14L16 30 3.88 23V9Z" fill="#ff5f1f" stroke="#ff5f1f" stroke-width="2" stroke-linejoin="round"/>
  <path d="M11.1 9h2.8a7 7 0 0 1 0 14h-2.8Zm2.8 2.8v8.4a4.2 4.2 0 0 0 0-8.4Z" fill="#08090b" fill-rule="evenodd"/>
  <circle cx="15.7" cy="16" r="1.15" fill="#08090b"/>
</svg>`;

const fontFaces = `
@font-face { font-family: 'Archivo'; src: url(${font('archivo', 'archivo-latin-wdth-normal.woff2')}) format('woff2'); font-weight: 100 900; font-stretch: 62% 125%; }
@font-face { font-family: 'Inter'; src: url(${font('inter', 'inter-latin-wght-normal.woff2')}) format('woff2'); font-weight: 100 900; }
@font-face { font-family: 'JetBrains Mono'; src: url(${font('jetbrains-mono', 'jetbrains-mono-latin-wght-normal.woff2')}) format('woff2'); font-weight: 100 800; }
`;

function iconPage(size, { background = 'transparent', scale = 1 } = {}) {
  return `<!doctype html><html><head><style>
    html, body { margin: 0; width: ${size}px; height: ${size}px; background: ${background}; }
    body { display: grid; place-items: center; }
    svg { width: ${Math.round(size * scale)}px; height: ${Math.round(size * scale)}px; }
  </style></head><body>${MARK}</body></html>`;
}

function ogPage(armSvg) {
  return `<!doctype html><html><head><style>
    ${fontFaces}
    :root { --laterite-400: #ff7a3d; --laterite-500: #ff5f1f; --basalt-900: #0d0f12; --fg-muted: #9aa3b0; --fg-subtle: #7f8998; --font-mono: 'JetBrains Mono'; --font-sans: 'Inter'; }
    * { box-sizing: border-box; margin: 0; }
    body { width: 1200px; height: 630px; overflow: hidden; background: #0d0f12; color: #f3f1ec; font-family: Inter, sans-serif; position: relative; }
    .grid { position: absolute; inset: 0; background-image: linear-gradient(rgb(255 255 255 / .045) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / .045) 1px, transparent 1px); background-size: 48px 48px; mask-image: radial-gradient(90% 90% at 75% 40%, #000 30%, transparent 80%); }
    .glow { position: absolute; width: 900px; height: 900px; right: -300px; top: -360px; background: radial-gradient(closest-side, rgb(255 95 31 / .2), transparent); }
    .wrap { position: absolute; inset: 0; display: grid; grid-template-columns: 600px 1fr; padding: 56px 56px 52px 64px; gap: 24px; }
    .left { display: flex; flex-direction: column; }
    .logo { display: flex; align-items: center; gap: 14px; }
    .logo svg { width: 46px; height: 46px; }
    .name { font-family: Archivo; font-weight: 800; font-stretch: 125%; font-size: 26px; letter-spacing: .035em; line-height: 1; }
    .sub { margin-top: 6px; font-family: 'JetBrains Mono'; font-size: 12px; letter-spacing: .43em; color: #9aa3b0; }
    h1 { margin-top: 70px; font-family: Archivo; font-weight: 790; font-stretch: 112%; font-size: 76px; line-height: .98; letter-spacing: -.03em; }
    h1 span { color: #ff5f1f; }
    p.tag { margin-top: 26px; font-size: 24px; color: #c5cbd3; line-height: 1.35; }
    .flow { margin-top: auto; display: flex; gap: 14px; align-items: center; font-family: 'JetBrains Mono'; font-size: 16px; letter-spacing: .08em; text-transform: uppercase; color: #9aa3b0; }
    .flow b { color: #ff7a3d; font-weight: 500; }
    .panel { align-self: center; border: 1px solid rgb(255 255 255 / .16); border-radius: 16px; background: rgb(17 20 24 / .85); overflow: hidden; box-shadow: 0 40px 80px -30px #000; }
    .bar { display: flex; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid rgb(255 255 255 / .09); font-family: 'JetBrains Mono'; font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: #9aa3b0; }
    .bar i { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #3ddc84; margin-right: 8px; box-shadow: 0 0 10px #3ddc84; }
    .panel svg { display: block; width: 100%; height: auto; }
    .arm__label { font-family: 'JetBrains Mono'; font-size: 10px; letter-spacing: .08em; fill: #9aa3b0; }
    .arm__label--dim { fill: #7f8998; font-size: 9px; }
    .arm__label--tiny { font-size: 8px; fill: rgb(255 255 255 / .4); }
    .arm__gizmo, .arm__dim { color: rgb(255 255 255 / .4); }
    .arm__theta { fill: #ff7a3d; font-family: Inter; font-style: italic; font-size: 12px; }
    .arm__trail { display: none; }
    .arm__reach { stroke: rgb(255 255 255 / .28); stroke-dasharray: 4 4; }
    .arm__arc { fill: none; stroke: #ff7a3d; stroke-width: 1.25; }
    .arm__target { color: rgb(255 255 255 / .45); }
  </style></head><body>
    <div class="grid"></div><div class="glow"></div>
    <div class="wrap">
      <div class="left">
        <div class="logo">${MARK}<div><div class="name">DECCAN</div><div class="sub">ROBOTICS</div></div></div>
        <h1>From idea to <span>working machine.</span></h1>
        <p class="tag">Robotics, embedded, automation &amp; software engineering</p>
        <div class="flow"><span><b>01</b> Consult</span>→<span><b>02</b> Prove</span>→<span><b>03</b> Prototype</span></div>
      </div>
      <div class="panel"><div class="bar"><span>SIM-01 · 3-axis palletiser</span><span><i></i>Live</span></div>${armSvg}</div>
    </div>
  </body></html>`;
}

(async () => {
  const browser = await chromium.launch();

  // Favicons
  fs.writeFileSync(path.join(pub, 'favicon.svg'), MARK.trim() + '\n');
  const icons = [
    { file: 'apple-touch-icon.png', size: 180, background: '#0d0f12', scale: 0.72 },
    { file: 'icon-192.png', size: 192, background: '#0d0f12', scale: 0.74 },
    { file: 'icon-512.png', size: 512, background: '#0d0f12', scale: 0.74 },
    { file: 'icon-maskable-512.png', size: 512, background: '#0d0f12', scale: 0.56 },
  ];
  for (const icon of icons) {
    const page = await browser.newPage({ viewport: { width: icon.size, height: icon.size } });
    await page.setContent(iconPage(icon.size, icon));
    await page.screenshot({ path: path.join(pub, icon.file), omitBackground: !icon.background || icon.background === 'transparent' });
    await page.close();
  }

  // favicon.ico — PNG-compressed entries (16, 32, 48 px), supported by all current browsers.
  const pngs = [];
  for (const size of [16, 32, 48]) {
    const page = await browser.newPage({ viewport: { width: size, height: size } });
    await page.setContent(iconPage(size));
    pngs.push({ size, data: await page.screenshot({ omitBackground: true }) });
    await page.close();
  }
  const header = Buffer.alloc(6 + 16 * pngs.length);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  let offset = header.length;
  pngs.forEach(({ size, data }, i) => {
    const e = 6 + i * 16;
    header.writeUInt8(size, e);
    header.writeUInt8(size, e + 1);
    header.writeUInt16LE(1, e + 4);
    header.writeUInt16LE(32, e + 6);
    header.writeUInt32LE(data.length, e + 8);
    header.writeUInt32LE(offset, e + 12);
    offset += data.length;
  });
  fs.writeFileSync(path.join(pub, 'favicon.ico'), Buffer.concat([header, ...pngs.map((p) => p.data)]));

  // Open Graph image (uses the server-rendered arm pose from the build)
  const distIndex = path.join(root, 'dist', 'index.html');
  if (fs.existsSync(distIndex)) {
    const html = fs.readFileSync(distIndex, 'utf8');
    const match = html.match(/<svg[^>]*data-arm-svg[^>]*>[\s\S]*?<\/svg>(?=\s*<p class="arm__hint)/);
    if (!match) throw new Error('Could not find the arm SVG in dist/index.html');
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
    await page.setContent(ogPage(match[0]), { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(pub, 'og-image.png') });
    await page.close();
  } else {
    console.warn('dist/index.html not found — run `npm run build` first to regenerate og-image.png');
  }

  await browser.close();
  console.log('Assets written to /public');
})();
