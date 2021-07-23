const express = require('express');

const router = express.Router();
const meController = require('../apps/controllers/MeController');

router.get('/stored-course', meController.storedCourse);
router.get('/trash', meController.trash);

module.exports = router;
