const express = require('express')
const router = express.Router()
const controller = require('../controllers/cinema.js')


router.get('/cinema', controller.getAll)
router.get('/cinema/:id', controller.getId)
router.post('/cinema', controller.create)
router.put('/cinema/:id', controller.update)

module.exports = router