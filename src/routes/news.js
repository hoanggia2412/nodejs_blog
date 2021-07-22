const express = require('express');

const router = express.Router();
const newController = require('../apps/controllers/NewsController');

router.get('/:slug', newController.show);
// newController.index
router.get('/', newController.index);

module.exports = router;
