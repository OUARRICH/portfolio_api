const {Router} = require('express');
const {getExperiences, insertExperiences} = require('../controllers');

const router = new Router();

router.get('/experiences', getExperiences);

router.post('/experiences', insertExperiences);

module.exports = router;
