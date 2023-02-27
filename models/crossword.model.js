const mongoose = require('mongoose');
const CrosswordSchema = mongoose.Schema;

let Crossword = new CrosswordSchema({
    trackId: {
        required: true,
        type: Number
    },
    clues:[{
        required: true,
        type: String
    }],
    answer: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('Crossword', Crossword);