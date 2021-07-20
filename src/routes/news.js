const express = require('express')

const router = express.Router()
const newController = require('../apps/controllers/NewsController')


router.use('/:slug',newController.show)
// newController.index
router.use('/',newController.index)


module.exports = router