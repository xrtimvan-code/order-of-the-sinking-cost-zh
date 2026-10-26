// Bundle the built viewer into one HTML file that also works when opened directly from disk.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
const assets = resolve(dist, 'assets');
const files = readdirSync(assets);
const script = files.find((name) => name.endsWith('.js'));
const stylesheet = files.find((name) => name.endsWith('.css'));
if (!script || !stylesheet) throw new Error('Run the Vite build first.');

let html = readFileSync(resolve(dist, 'index.html'), 'utf8');
let js = readFileSync(resolve(assets, script), 'utf8');
let css = readFileSync(resolve(assets, stylesheet), 'utf8');

for (const file of files) {
    const mime = file.endsWith('.avif') ? 'image/avif' : file.endsWith('.png') ? 'image/png' : null;
    if (!mime) continue;
    const uri = `data:${mime};base64,${readFileSync(resolve(assets, file)).toString('base64')}`;
    for (const path of [`./assets/${file}`, `/assets/${file}`, `./${file}`, file]) {
        html = html.replaceAll(path, uri);
        js = js.replaceAll(path, uri);
        css = css.replaceAll(path, uri);
    }
}

js = js.replace(/\n?\/\/# sourceMappingURL=[^\n]*/g, '');
html = html.replace(
    /<script\b[^>]*\bsrc="[^"]+"[^>]*><\/script>/,
    () => `<script type="module">${js.replace(/<\/script/gi, '<\\/script')}</script>`,
);
html = html.replace(/<link\b[^>]*\brel="stylesheet"[^>]*>/, () => `<style>${css}</style>`);
const license = readFileSync(resolve(root, 'LICENSE'), 'utf8');
html = html.replace(
    '<!doctype html>',
    `<!doctype html>\n<!--\nUnofficial Simplified Chinese localization of https://github.com/xPaw/order-of-the-sinking-cost\n${license}-->`,
);
writeFileSync(resolve(dist, 'standalone.html'), html);
console.log(`dist/standalone.html (${(Buffer.byteLength(html) / 1024 / 1024).toFixed(1)} MiB)`);
