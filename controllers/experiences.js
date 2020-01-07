const { getAll, insertAll } = require('../services');

const getExperiences = async (req, res) => {
    res.status(200).json(await getAll());
};

const insertExperiences = async (req, res) => {
    res.status(201).json(await insertAll());
};

module.exports = {
    getExperiences, 
    insertExperiences
};
