const mongoose = require('mongoose');
const TrackSchema = mongoose.Schema;

let Track = new TrackSchema({
    trackId: {
        required: true,
        type: Number
    },
    track:[{
        required: true,
        type: String
    }],
    round2:{
        required: true,
        type: String
    }
});

module.exports = mongoose.model('Track', Track);