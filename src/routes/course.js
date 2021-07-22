const express = require('express');

const router = express.Router();
const courseController = require('../apps/controllers/CourseController');

router.get('/:id', courseController.show);


module.exports = router;