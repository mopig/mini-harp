module.exports = makeJade;

function makeJade(root) {
    return function (req, res, next) {
        // body...
        var path = require('path'), fs = require('fs'), jade = require('jade');

        if(path.extname(req.url) != '.html'){
            
            next();
            return;
        }

        fs.readFile(root+req.url,{encoding:"utf8"},function(err, data){
            if (err){
                jade.renderFile(root+'/'+path.basename(req.url,'.html')+'.jade', {}, function (err, html) {
                // body...
                if (err) {
                    throw err;
                    return;
                }

                res.end(html);

            });
                return;
            };

            res.end(data);
            
        })
        

    }
}
    
