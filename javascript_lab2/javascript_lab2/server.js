var http = require('http');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    var queryData = url.parse(request.url, true).query;
    response.writeHead(200, { "Content-Type": "text/plain" });

        console.log(queryData);

    function calculate(method, x, y) {
        
        console.log(method);
        console.log(x);
        console.log(y);
        var result = 0;
        if (method == "add") {
            result = Number(x) + Number(y);
            response.write("addition works " + x + " + " + y + "  = " + result);
            //response.write(result);
            response.end();
        } else if (method == "subtract") {
            result = Number(x) - Number(y);
            response.write("Subtraction works "+x+" - "+y+"  = " + result);
            //response.write(result);
            response.end();
        } else if (method == "multiply") {
            result = Number(x) * Number(y);
            response.write("Multiplicaation works " + x + " * " + y + "  = " + result);
            //response.write(result);
            response.end();
        } else if (method == "div") {
            result = Number(x) / Number(y);
            response.write("Division works " + x + " / " + y + "  = " + result);
            //response.write(result);
            reponse.end();
        } else {
            response.writeHead(404);
            response.write("Method not found");
            response.end();
        }
    }
    calculate(queryData.method, queryData.x, queryData.y)
});

// Listen on port 80, IP defaults to 127.0.0.1
server.listen(3000);