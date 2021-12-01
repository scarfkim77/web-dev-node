const mongoose = require('mongoose');
const schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    tweetNum: {type: Number, defaultValue: 0},
    handle: String,
    profilePicture: String,
    bannerPicture: String,
    bio: String,
    location: String,
    dateOfBirth: String,
    dateJoined: String,
    followingCount: {type: Number, defaultValue: 0},
    followersCount: {type: Number, defaultValue: 0},
    website: String
}, {collection: "profile"});
module.exports = schema;
