const { getAllExperiences, insertAllExperiences } = require('../db/experiences');

const getAll = async () => {
    return await getAllExperiences();
};

const insertAll = async () => {
    return await insertAllExperiences();
};

module.exports = {
    getAll,
    insertAll
};
