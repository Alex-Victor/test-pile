var http = require("http");
var url = require("url");
var fs = require("fs");
 
function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    
    var mockName = route(pathname);

    if(mockName != 'favicon.ico.json'){
        console.log("aaa " + mockName);
        // 异步读取
        fs.readFile('./mock/' + mockName, function (err, data) {
            if (err) {
                response.writeHead(404, {"Content-Type": "text/plain"});
                response.write(err);
                response.end();
            } else{
                response.writeHead(200, {"Content-Type": "application/json;charset:utf-8;"});
                response.write(data.toString());
                response.end();
            }
        });
    }
  }
 
  http.createServer(onRequest).listen(8082);
  console.log("Server has started.");
}
 
exports.start = start;