
function connect() {
    var ws = new WebSocket("ws://localhost:8080/service");
    ws.onopen = function () {
        console.log('about to send');
        ws.send("Hello World"); // I WANT TO SEND THIS MESSAGE TO THE SERVER!!!!!!!!
        console.log('sent');
    };

    ws.onmessage = function (evt) {
        var received_msg = evt.data;
        console.log("Message received = "+received_msg);
    };
    ws.onclose = function () {
        // websocket is closed.
        console.log("Connection is closed...");
    };
};