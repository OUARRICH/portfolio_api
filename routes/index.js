const {Router} = require('express');
const {getExperiences} = require('../controllers');

const router = new Router();

router.get('/experiences', getExperiences);

module.exports = router;
