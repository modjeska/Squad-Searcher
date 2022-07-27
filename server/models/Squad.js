const { Schema, model } = require('mongoose');

const GAME_ENUMS = [
    'apex_legends',
    'overwatch',
    'league_of_legends',
    'valorant',
    'fornite',
]

const PLATFORM_ENUMS = [
    'pc',
    'ps4',
    'ps5',
    'xbox',
]

const squadSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    game: {
        type: String,
        required: true,
        enum: GAME_ENUMS,
    },
    platform: {
        type: String,
        required: true,
        enum: PLATFORM_ENUMS,
    },
    isRanked: {
        type: Boolean,
        required: true,
    },
    isCasual: {
        type: Boolean,
        required: true,
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
});

const Squad = model('Squad', squadSchema);

module.epxorts = Squad;