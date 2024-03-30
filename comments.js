// Create web server
// Create a server that listens on port 3000 and serves the comments.html file
// Use the fs module to read the comments.html file and send it to the client
// Use the http module to create the server
// Use the fs module to read the file
// Send the file to the client
// Listen on port 3000

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    fs.readFile("comments.html", (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write("File not found");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
        }
        res.end();
    });
});

server.listen(3000, () => {
    console.log("Server started on port 3000");
});