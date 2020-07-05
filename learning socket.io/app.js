var app = require('express')(); // importing and intializing express to app
var http = require('http').createServer(app);
// http helps listening to ur ports 
//The http. createServer() method creates an HTTP Server object. 
//The HTTP Server object can listen to ports on your computer and execute a function,
// a requestListener, each time a request is made
// console.log("http created object -->")
// console.log(http);
app.set("view engine", "ejs") //process for setting default engine // ejs=embedded javascript
app.get('/', (req, res) => {
    res.render("home");
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});

// app.listen(3000, function() {
//     console.log("server has started")
// })