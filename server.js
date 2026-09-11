// Basic HTTP Server using Node.js http module

const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);

    res.setHeader("Content-Type", "text/plain");

    if (req.url === "/") {
        res.statusCode = 200;
        res.end("Welcome to Smart Utility Toolkit!");
    } else if (req.url === "/about") {
        res.statusCode = 200;
        res.end("About: This server is built using Node.js http module.");
    } else if (req.url === "/contact") {
        res.statusCode = 200;
        res.end("Contact: smarttoolkit@example.com");
    } else {
        res.statusCode = 404;
        res.end("404 Error: Route not found.");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
