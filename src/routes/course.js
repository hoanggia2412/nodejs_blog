const express = require('express');

const router = express.Router();
const courseController = require('../apps/controllers/CourseController');

router.post('/insert', courseController.insert);
router.get('/create', courseController.create);
router.delete('/:id', courseController.delete);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id/force', courseController.forceDelete);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.get('/:id', courseController.show);


module.exports = router;