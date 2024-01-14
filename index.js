import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const port = 3000;
const publicDir = path.join(__dirname, 'public');

const server = http.createServer(async (req, res) => {
  const filePath = path.join(
    publicDir,
    req.url === '/' ? 'index.html' : req.url,
  );
});
