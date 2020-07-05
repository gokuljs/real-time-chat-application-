var app = require('express')(); // importing and intializing express to app
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// http helps listening to ur ports 
//The http. createServer() method creates an HTTP Server object. 
//The HTTP Server object can listen to ports on your computer and execute a function,
// a requestListener, each time a request is made
// console.log("http created object -->")
console.log(http);

// socket.io
// relies on engine.io

app.set("view engine", "ejs") //process for setting default engine // ejs=embedded javascript
app.get('/', (req, res) => {
    res.render("home");
});
// integrating to socket.io to ur project 
// io.on('connection', (socket) => {
//     console.log('a user connected');
// });

// below code records ur connection and disconnection of ur page 
io.on('connection', (socket) => {

    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
http.listen(3000, () => {
    console.log('listening on *:3000');
});

// app.listen(3000, function() {
//     console.log("server has started");
// })