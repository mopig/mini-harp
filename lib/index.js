

module.exports = function(port) {
    var connect = require('connect');
    var app = connect();
    app.use(function (req,res) {
        if (req.url== '/current-time'){
            res.end((new Date()).toISOString());
        }
    }).listen(port);
};
