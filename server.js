var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log("User:", req.ip, "| Requested", req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', function (err, data) {
        if (err) {
            res.writeHead(404);
            res.write("Can't find");
        } else {
            res.write(data);
        }
        res.end();
    });
});

app.listen(80, ()=>{
    console.log("Listening on Port 80");
});