const dao = require('../db/profile/profile-dao');
module.exports = (app) => {
    const findProfile = (req, res) =>
        dao.findProfile().then(profile => res.json(profile));

    const updateProfile = (req, res) =>
        dao.findProfile().then(profile => {
            profile.firstName = req.body.firstName;
            profile.lastName = req.body.lastName;
            profile.bio = req.body.bio;
            profile.location = req.body.location;
            profile.website = req.body.website;
            profile.dateOfBirth = req.body.dateOfBirth;
            dao.updateProfile(profile.id, profile).
                then(profile => res.json(profile));
        });

    app.put('/api/edit', updateProfile);
    app.get('/api/profile', findProfile);
};