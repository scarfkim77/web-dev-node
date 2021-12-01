const model = require('tweet-model');

const findAllTweets = () => {};
const findTweetById = (id) =>
    model.findById(id);
const createTweet = (tweet) => {};
const deleteTweet = (id) => {};
const updateTweet = (id, tweet) => {};

module.exports = {
    findAllTweets, findTweetById,
    createTweet, deleteTweet, updateTweet,

};
