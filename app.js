var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/index.html', function handleHomePage(request, response){
    response.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function handleProcessGet(request, response){
    let number = request.query.number;
    var primeStatus = false;
    for(var i = 2; i <number/2; i++){
        if (number % i === 0 ){
            primeStatus = true;
        }
    }
    let retval = "";

    if (primeStatus) {
        retval = "Number: " + number + "This number is prime"
    }
    else {
        retval = "Number: " + number + "This number is not prime"
    }

    response.send(retval)

});

var server = app.listen(3000, function ServerListner() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Using Forms and Express, listening at http://%s:$%s", host, port);
});