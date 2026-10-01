// Minimal static file server for hosts that run the site as a Node app. No dependencies.
const http = require('http');
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, 'dist');
const base = fs.existsSync(dist) ? dist : __dirname;
const port = process.env.PORT || 3000;

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon'
};

http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch (e) {
    res.writeHead(400); return res.end('Bad request');
  }
  if (pathname.endsWith('/')) pathname += 'index.html';

  const file = path.normalize(path.join(base, pathname));
  if (file !== base && !file.startsWith(base + path.sep)) {
    res.writeHead(403); return res.end('Forbidden');
  }

  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Not found');
    }
    res.writeHead(200, { 'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(port, () => console.log('Back Bay Adventures running on port ' + port));
