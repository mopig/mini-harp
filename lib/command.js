module.exports = function () {
    var mini_harp = require('./index.js')
    , parseArgs = require("minimist")
    , args = parseArgs(process.argv.slice(2));
    args.port
    ?(function (){console.log('Starting mini-harp on http://localhost:'+args.port); mini_harp(args.port);})()
    :(function () {console.log('Starting mini-harp on http://localhost:4000'); mini_harp(4000);})();
};