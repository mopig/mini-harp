module.exports = makeLess;

function makeLess(root) {
    return function (req, res, next){
        var path = require('path'), fs = require('fs'),less = require('less');
        if(path.extname(req.url) != '.css'){
            next();
            return;
        }
        fs.readFile(root+req.url,{encoding:"utf8"},function(err, data){
            if (err) {
                fs.readFile(root+'/'+path.basename(req.url,'.css')+'.less',{encoding:"utf8"},function(err, data){
                    if (err){
                        res.writeHead(404, {});
                        res.end();
                        return;
                    }
                    less.render(data, function (err, css){
                        if (err){
                            throw err;
                            return;
                        }
                        
                        // res.setHeader("Content-Length", css.length);
                        // res.setHeader("Content-type", 'text/css; charset=UTF-8');
                        // res.statusCode = 200;
                        // res.writeHead(200,{
                        //     "Content-Length": css.toString.length,
                        //     "Content-type": "text/css; charset=UTF-8"
                        // });
                        res.end(css);
                        return;
                    }); 
                });
              
            }
            res.writeHead(200, {
                
                "Content-type": "text/css; charset=UTF-8"
                });
            res.end(data);
        });
    }
}
