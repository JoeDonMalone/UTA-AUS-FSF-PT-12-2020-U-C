const http = require('http');
const PORT = 8080;



const displayRoot = (res) => {
    const myHTML = `
    <html>
      <body>
        <h1>Home Page</h1>
        <a href='./index.html'>Home</a>
      </body>
    </html>`;
  
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { 'Content-Type': 'text/html' });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  };

const display404 = (url, res) => {
    const myHTML = `
    <html>
      <body>
        <h1>404 Not Found </h1>
        <p>The page you were looking for: ${url} can not be found</p>
      </body>
    </html>`;
  
    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { 'Content-Type': 'text/html' });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  };

const handleRequest = (req, res) => {
    // Capture the url the request is made to
    const path = req.url;
  
    // Depending on the URL, display a different HTML file.
    switch (path) {
      case '/':
        return displayRoot(res);
  
      case '/home':
        return displayFoods(res);
    
      case '/home':
        return displayMovies(res);
    
      case '/home':
        return displayCss(res);
  
      default:
        return display404(path, res);
    }
  };

  const server = http.createServer(handleRequest);

  server.listen(PORT, () => {
    // Callback triggered when server is successfully listening. Hurray!
    console.log(`Server listening on: http://localhost:${PORT}`);
  });