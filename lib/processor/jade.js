module.exports = makeJade;

function makeJade(root) {
    return function (req, res, next) {
        // body...
        var path = require('path'), fs = require('fs'), jade = require('jade');

        if(path.extname(req.url) == 'html'){
        fs.readFile(root+req.url,{encoding:"utf8"},function(){
            jade(jadeFile);
        })}}
    }
    
