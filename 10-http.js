const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
  } else if (req.url === "/about") {
    res.end("Welcome to about page");
  } else {
    res.end(`<h1>Oops we are not able to find what you are looking for</h1>
            <a href="/">Click here to navigate to home page</q>
        `);
  }
});

server.listen(5000);
