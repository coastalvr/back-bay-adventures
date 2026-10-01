// Copies the static site into ./dist so hosts that expect a build step have an output folder.
const fs = require('fs');
const path = require('path');

const root = __dirname;
const out = path.join(root, 'dist');

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

for (const name of fs.readdirSync(root)) {
  if (name.endsWith('.html')) fs.copyFileSync(path.join(root, name), path.join(out, name));
}
for (const dir of ['css', 'js', 'img']) {
  fs.cpSync(path.join(root, dir), path.join(out, dir), { recursive: true });
}

console.log('Built static site into dist/');
