var mongoose = require('mongoose');

var hobbySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Hobby', hobbySchema);