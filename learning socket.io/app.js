var express = require('express'),
    app = express(), // importing and intializing express to app
    http = require('http').createServer(app),
    io = require('socket.io')(http);

// http helps listening to ur ports 
//The http. createServer() method creates an HTTP Server object. 
//The HTTP Server object can listen to ports on your computer and execute a function,
// a requestListener, each time a request is made
// console.log("http created object -->")
console.log(http);

// socket.io
// relies on engine.io
app.use(express.static(__dirname + "/public"));
// app.use(express.static(__dirname + "/public"));
// dirname refers to the directory name to the script was running 
console.log(__dirname);


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
    // emitting events 
    // after emitting events then come the part broad casting 
    // chat message written inside form is written here 
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg); // bradcasting message 

    });

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