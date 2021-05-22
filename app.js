var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/index.html', function handleHomePage(request, response){
    response.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function handleProcessGet(request, response){
    let number = request.query.number;
    var primeStatus = true;
    for(var i = 2; i <number/2; i++){
        if (number % i === 0 ){
            primeStatus = false;
        }
    }
    let return = "";

    if (primeStatus) {
        return = "Number: " + number + " IS PRIME"
    }
    else {
        return = "Number: " + number + " IS NOT PRIME"
    }

    response.send(return)

});

var server = app.listen(3000, function ServerListner() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Using Forms and Express, listening at http://%s:$%s", host, port);
});