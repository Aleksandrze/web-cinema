const express = require('express')
const router = express.Router()
const passport = require('passport')
const controller = require('../controllers/film')

router.get('/film', controller.getAll)
router.get('/film/:id', controller.getId)
router.post('/film',passport.authenticate('jwt', {session: false}), controller.create)
router.put('/film/:id', passport.authenticate('jwt', {session: false}), controller.update)
router.delete('/film/:id', passport.authenticate('jwt', {session: false}), controller.removeId)


module.exports = router 