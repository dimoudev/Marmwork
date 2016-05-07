"use strict";

var folders = __dirname.split("/");

module.exports = {
    startPath: folders[folders.length - 2] + "/index.html",
    proxy: "localhost:8080",
    port: 8081,
    files: "assets/**/*.*",
    logLevel: "info",
    notify: false
};
