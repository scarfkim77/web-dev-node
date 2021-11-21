let profile = require('../data/profile.json');

module.exports = (app) => {
    const getCurrentProfile = (req, res) => {
        res.json(profile);
    };
    app.get('/api/profile', getCurrentProfile);

    const updateCurrentProfile = (req, res) => {
        profile.firstName = req.body.firstName;
        profile.lastName = req.body.lastName;
        profile.bio = req.body.bio;
        profile.location = req.body.location;
        profile.website = req.body.website;
        profile.dateOfBirth = req.body.dateOfBirth;
        res.json(profile);
    };
    app.put('/api/edit', updateCurrentProfile);
};