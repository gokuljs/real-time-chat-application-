// alert("getting started");

$(function() {
    var socket = io();
    //That’s all it takes to load the socket.io-client, which exposes an io global (and the endpoint GET /socket.io/socket.io.js), and then connect
    // Notice that I’m not specifying any URL when I call io(), since it defaults to trying to connect to the host that serves the page.
    $('form').submit(function(e) {
        e.preventDefault(); // prevents page reloading
        socket.emit('chat message', $('#m').val()); // it takes the value from the input and passing it to the chat message 
        // socket.emit('chat message', $('#m').val());

        $('#m').val('');
        return false;
    });
    socket.on('chat message', function(msg) {
        $('#messages').append($('<li>').text(msg));
    });
});