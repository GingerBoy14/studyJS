var express = require('express');
var router = express.Router();
var fs = require('fs')
const show = require('../../src/lib/src/helpers/display/browser/showTestsInBrowser')

console.log(fs.readFileSync('showTestsInBrowser.js'))

router.get('/', function (req, res, next) {
    //    show();
    res.send('API is working properly');
});

module.exports = router;