var app = require('express')(); // importing and intializing express to app
var http = require('http').createServer(app);
//The http. createServer() method creates an HTTP Server object.
//The HTTP Server object can listen to ports on your computer and execute a function,
// a requestListener, each time a request is made

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});

// app.listen(3000, function() {
//     console.log("server has started")
// })