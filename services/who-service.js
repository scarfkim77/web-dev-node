const dao = require('../db/who/who-dao');
module.exports = (app) => {
    const findWhos = (req, res) =>
        dao.findWhos().then(whos => res.json(whos));

    app.get('/api/who', findWhos);
};