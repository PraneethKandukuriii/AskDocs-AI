import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello");
});

server.listen(5001, () => {
  console.log("Listening on port 5001");
});