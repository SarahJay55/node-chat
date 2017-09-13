var messages = [];
var id = 0;

module.exports = {
        create: ( req, res ) => {
            var {text, time} = req.body;
            messages.push({id, text, time});
            id++;
            res.status(200).send(messages)
        },

        read: ( req, res ) => {
            res.status(200).send(messages)
        },

        update: ( req, res ) => {
            var { text } = req.body;
            var updateId = req.params.id;
            var messageIndex = messages.findIndex( message => message.id == updateId );
            var message = messages[ messageIndex ];            

            messages[ messageIndex ] = {
                id: message.id,
                text: text || message.text,
                time: message.time
            }

            res.status(200).send(messages);
        },
        delete: ( req, res ) => {
            var deleteId = req.params.id;
            messageIndex = messages.findIndex( message => message.id == deleteId );
            messages.splice(messageIndex, 1);

            res.status(200).send(messages);
        }

    }

