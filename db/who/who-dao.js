const model = require('./who-model');

const findWhos = () => model.find();

module.exports = {
    findWhos,
};