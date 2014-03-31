

module.exports = function(path) {
    var serverStatic = require('serve-static')
    var connect = require('connect');
    var app = connect();
    app
    .use(serverStatic(path))
    .use(function (req,res) {
        if (req.url== '/current-time'){
            res.end((new Date()).toISOString());
        }
    });

    return app;
};
