const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', function (event) {
    socket.send('Ready For Chatting');
});

socket.addEventListener('message', function (event) {
    try {
        let payload = JSON.parse(event.data);
        console.log(payload);

        if (payload.type == 'received_otherUser_message') {
            window.dispatchEvent(new CustomEvent('receiveOtherUserMessage', {
                "detail": payload.content
            }));
        }
    } catch (err) {

    }
});

function ws_sendMessage(message) {
    socket.send(message);
}