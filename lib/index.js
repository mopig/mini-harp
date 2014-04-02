var serveStatic = require('serve-static'),
    connect = require('connect'),
    app = connect();

module.exports = function(dirname) {
    app.use(serveStatic(dirname))
    .use(function (req,res) {
        if (req.url== '/current-time'){
            res.end((new Date()).toISOString());
        }
    });

    return app;
};
