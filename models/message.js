const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {timestamps: true});

messageSchema.virtual('time').get(function() {
    return `${this.updatedAt.toLocaleDateString()} ${this.updatedAt.toLocaleTimeString()}`
});

module.exports = mongoose.model('Message', messageSchema);