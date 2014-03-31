module.exports = function () {
    var mini_harp = require('./index.js')

    , parseArgs = require("minimist")
    , args = parseArgs(process.argv.slice(2))
    , root = args['_'].length>0?args['_'][0]:process.cwd();
    args.port
    ?(function (){console.log('Starting mini-harp on http://localhost:'+args.port); mini_harp(root).listen(args.port);})()
    :(function () {console.log('Starting mini-harp on http://localhost:4000'); mini_harp(root).listen(4000);})();
};