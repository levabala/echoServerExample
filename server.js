var http = require("http");
var url = require("url");
const fs = require("fs");
const path = require("path");
const shell = require("shelljs");

const index = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf8");
const mainjs = fs.readFileSync(path.resolve(__dirname, "main.js"), "utf8");

http
  .createServer(function(req, res) {
    var q = url.parse(req.url, true);
    console.log(req.url);

    switch (q.pathname) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(index);
        break;
      case "/main.js":
        res.writeHead(200, { "Content-Type": "application/javascript" });
        res.write(mainjs);
        break;
      case "/runBat":
        shell.exec("./myBat.sh");
        shell.echo(".sh executed successfully");
        res.write("executed!");
        break;
    }

    res.end();
  })
  .listen(8080);

console.log("server initialized");
