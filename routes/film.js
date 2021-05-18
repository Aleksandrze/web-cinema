const express = require('express')
const router = express.Router()
const controller = require('../controllers/film')

router.get('/film', controller.getAll)
router.get('/film/:id', controller.getId)
router.post('/film', controller.create)
router.put('/film/:id', controller.update)
router.delete('/film/:id', controller.removeId)


module.exports = router