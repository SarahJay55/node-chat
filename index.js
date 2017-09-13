var express = require('express')
var bodyParser = require('body-parser')
var messageController = require("./server/controllers/messages_controller")

var app = express();

app.use(bodyParser.json());
app.use( express.static( './public/build' ) );

var messagesBaseUrl = '/api/messages';

app.post( messagesBaseUrl, messageController.create )
app.get( messagesBaseUrl, messageController.read )
app.put( `${messagesBaseUrl}/:id`, messageController.update )
app.delete( `${messagesBaseUrl}/:id`, messageController.delete )



app.listen(3000, function() {
    console.log("Hey girl, I'm listening on 3000!")
})