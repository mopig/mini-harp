var serveStatic = require('serve-static'),
    connect = require('connect'),
    app = connect();

module.exports = function(__dirname) {
    app.use(serveStatic(__dirname))
    .use(function (req,res) {
        if (req.url== '/current-time'){
            res.end((new Date()).toISOString());
        }
    });

    return app;
};
