

module.exports = function(port) {
    var connect = require('connect');
    var app = connect();
    app.listen(port);
};
