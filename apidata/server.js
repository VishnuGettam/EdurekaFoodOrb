var jsonServer = require("json-server");
var server = jsonServer.create();
var middleware = jsonServer.defaults();
var router = jsonServer.router(require("./db.js")());
server.use(middleware);
server.use(router);
server.listen(3000, function() {
    console.log("Local JSON Server is running");
});