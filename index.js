var serveStatic = require('serve-static'),
    connect = require('connect'),
    app = connect(),
    path = require('path'),
    makeJade = require('./lib/processor/jade.js'),
    makeLess = require('./lib/processor/less.js');

module.exports = function(dirname) {
    app.use(function(req, res, next){
        if (req.url == '/'){
            req.url = '/index.html';
            next();
        } else if (path.extname(req.url)=='.jade' || path.extname(req.url)=='.less') {
            res.writeHead(404, {});
            res.end();
        } else {
            next();
        }
    })
    .use(makeLess(dirname))
    .use(makeJade(dirname))
    .use(serveStatic(dirname))
    .use(function (req,res) {
        if (req.url== '/current-time'){
            res.end((new Date()).toISOString());
        }
    });

    return app;
};
