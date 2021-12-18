const dao = require('../db/tweets/tweet-dao');
module.exports = (app) => {
    const findAllTweets = (req, res) =>
        dao.findAllTweets().then(tweets => res.json(tweets));
    const createTweet = (req, res) => {
        const newTweet = {
            'liked': false,
            'topic': 'Web Development',
            'userName': 'ReactJS',
            'verified': false,
            'handle': 'ReactJS',
            'time': '2h',
            ...req.body,
            'avatar-image': '../../images/react1.png',
            'logo-image': '../../images/react1.png',
            'stats': {
                'comments': 123,
                'retweets': 234,
                'likes': 345,
            },
            ...req.body.tweet,
        };
        dao.createTweet(newTweet).
            then((insertedMovie) => res.json(insertedMovie));
    };

    const deleteTweet = (req, res) =>
        dao.deleteTweet(req.params.id).then((status) => res.send(status));

    const likeTweet = (req, res) =>
        dao.findTweetById(req.params.id).then(tweet => {
            if (tweet.liked === true) {
                tweet.liked = false;
                tweet.stats.likes--;
            } else {
                tweet.liked = true;
                tweet.stats.likes++;
            }
            dao.updateTweet(tweet.id, tweet).then((status) => res.send(status));
        });

    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.post('/api/tweets', createTweet);
    app.get('/api/tweets', findAllTweets);
};
