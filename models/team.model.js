const mongoose = require('mongoose');
const TeamSchema = mongoose.Schema;

let Team = new TeamSchema({
    teamId: {
        required: true,
        type: Number
    },
    teamName: {
        required: true,
        type: String
    },
    member1: {
        required: true,
        type: String
    },
    member2: {
        required: true,
        type: String
    },
    member3: {
        required: true,
        type: String
    },
    trackId: {
        required: true,
        type: Number
    },
    penaltyCount: {
        required: true,
        type: Number
    },
    checkPoint: {
        required: true,
        type: Number
    },
    firstLog: {
        required: true,
        type: Boolean
    },
    time: {
        // required: true,
        type: Date
    },
    finalTime: {
        // required: true,
        type: Date
    }
});

module.exports = mongoose.model('Team', Team);