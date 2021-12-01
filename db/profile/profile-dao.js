const model = require('./profile-model');

const findProfile = () => model.findOne();

const updateProfile = (id, tweet) =>
    model.updateOne({_id: id},
        {$set: tweet});

module.exports = {
    findProfile, updateProfile,
};