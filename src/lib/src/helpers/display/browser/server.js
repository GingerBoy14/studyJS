const express = require("express");
var router = express.Router();
const server = express();
var cors = require("cors");

const fs = require('fs')

server.use(cors());
server.use(express.static(__dirname));

const port = process.env.PORT || 4000;

server.listen(port);
const show = require('./showTestsInBrowser')

router.get('/', function (req, res, next) {
    show();
    res.send(JSON.parse(fs.readFileSync(__dirname + '/tests.json')));
});

server.use("/testAPI", router);
console.log("Server is running on port 4000")