const http = require('http');

const app = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  
  // Send the response body
  res.end('Hello Holberton School!');
});

// Have the server listen on port 1245
app.listen(1245, () => {
  console.log('Server running on port 1245');
});

// Export the app for potential use in testing
module.exports = app;
