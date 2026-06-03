const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 8080;

const contentTypeByExt = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.json': 'application/json',
};

const server = http.createServer((req, res) => {
  const requestPath = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(__dirname, requestPath);
  const ext = path.extname(filePath).toLowerCase();

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
      return;
    }

    const contentType = contentTypeByExt[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
