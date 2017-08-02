var userId = 1.3;


/* example of use: create new message */
//var m1 = new chatMessage(userId, 'hello', new Date());


/* example of use: send message */
//sendMessage(m1);


/* happens when a new message is there */
function allMessagesSubscribe(snapshot) {
    $('#chat-messages').empty();
    $.each(snapshot, function(k, v) {
        $('#chat-messages').append("<li>"+v.userid+": " + v.message+"</li>");
    });
}

$('#send-message').click(function() {
    var m1 = new chatMessage(userId, $('#message').val(), new Date());
    sendMessage(m1);
});
