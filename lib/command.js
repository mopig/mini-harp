var miniHarp = require('./index.js'),
    parseArgs = require('minimist'),
    args = parseArgs(process.argv.slice(2));
 
module.exports = function () {
    var root = args._[0] || process.cwd();
    args.port
    ?(function () {
        console.log('Starting mini-harp on http://localhost:'+args.port+' '+args+args._[0]+process.cwd());
        miniHarp(root).listen(args.port);
    })()
    :(function () {
        console.log('Starting mini-harp on http://localhost:4000'+' '+args+args._[0]+process.cwd());
        miniHarp(root).listen(4000);
    })();
};
