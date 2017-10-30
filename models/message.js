var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    venue: {type: String, required: true},
    address: {type: String, required: true},
    time: {type: String, required: true},
    date: {type: String, required: true},
    price: {type: String, required: true},
    eventType: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.post('remove', function (message) {
    User.findById(message.user, function (err, user) {
        user.messages.pull(message._id);
        user.save();
    });
});

module.exports = mongoose.model('Message', schema);
