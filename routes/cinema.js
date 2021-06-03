const express = require('express')
const router = express.Router()
const passport = require('passport')
const controller = require('../controllers/cinema.js')


router.get('/cinema', controller.getAll)
router.get('/cinema/:id', controller.getId)
router.post('/cinema',passport.authenticate('jwt', {session: false}), controller.create)
router.put('/cinema/:id', passport.authenticate('jwt', {session: false}), controller.update)

module.exports = router