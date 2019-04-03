"use strict";

const express = require("express");
const app = express();

const port = 80;
app.listen(port);

console.log("Server port: " + port);

app.get("/api/BlockLogWindows", function(request, response) {
    response.sendfile("BlockLogWindows.zip");
});

app.get("/api/BlockLogMac", function(request, response) {
    response.sendfile("BlockLogMac.zip");
});

app.get("/", function(request, response) {
    response.sendfile("index.html");
});

