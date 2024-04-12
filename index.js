const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Parse request URL
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Function to serve static files
  const serveStaticFile = (fileName, contentType) => {
    const filePath = path.join(__dirname, 'html', fileName);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      }
    });
  };

  // Routing
  switch (pathname) {
    case '/':
      // Home page
      serveStaticFile('home.html', 'text/html');
      break;
    case '/about.html':
      // About page
      serveStaticFile('about.html', 'text/html');
      break;
    case '/contact.html':
      // Contact page
      serveStaticFile('contact.html', 'text/html');
      break;
      case '/breakfast.html':
      // Breakfast page
      serveStaticFile('breakfast.html', 'text/html');
      break;
      case '/lunch.html':
      // lunch page
      serveStaticFile('lunch.html', 'text/html');
      break;
      case '/dinner.html':
      // Dinner page
      serveStaticFile('dinner.html', 'text/html');
      break;
      case '/dessert.html':
      // Dessert page
      serveStaticFile('desserts.html', 'text/html');
      break;
    case '/data':
      // Data route with query parameter handling
      const queryData = parsedUrl.query;
      const fileName = queryData.file || 'default.txt';
      serveStaticFile(fileName, 'text/plain');
      break;
    default:
      // 404 Not Found
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      break;
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
