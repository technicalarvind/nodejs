// Import HTTP Module

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Node HTTP Server");
  }
  if (req.url === "/about") {
    res.end("Here is the about page");
  }
  res.end(`
<h1>Oops!</h1>
<p> We can seems to find the page you are looking for! </p>
<a href="/">Back to Home</a>
`);
})

server.listen(5000);
