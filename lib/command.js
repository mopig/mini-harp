var miniHarp = require('../index.js'),
    parseArgs = require('minimist'),
    args = parseArgs(process.argv.slice(2));
 
module.exports = function () {
    var root = args._[0] || process.cwd();
    var port = args.port || 4000;
    console.log('Starting mini-harp on http://localhost:'+port);
    miniHarp(root).listen(port);
};
