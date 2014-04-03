var serveStatic = require('serve-static'),
    connect = require('connect'),
    app = connect(),
    makeJade = require('./lib/processor/jade.js'),
    makeLess = require('./lib/processor/less.js');

module.exports = function(dirname) {
    app.use(function(req, res, next){
        if (req.url == '/'){
            req.url = '/index.html';
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
