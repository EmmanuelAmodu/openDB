"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var main = function () {
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!');
    }).listen(8900);
};
main();
