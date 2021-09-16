var http = require('http');
var port = process.env.PORT || 8000;
module.exports = {
    init: () => {
        http.createServer(function (req, res) {
            console.log('Incoming Req!');
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(`OK`);
            res.end();
        }).listen(port);
        console.log(`http server at localhost:${port}`)
    }
}