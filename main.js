var http = require('http');
var fs = require('fs');
var usl = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url,true).query;
    console.log(queryData);
    if(request._url == '/'){
      _url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    console.log(__dirname + _url);
    response.end(fs.readFileSync(__dirname + _url));
    
});
app.listen(507);