const express = require('express')
const router = express.Router()
const controller = require('../controllers/hall')
const passport = require('passport')

router.post('/hall',passport.authenticate('jwt', {session: false}), controller.update)
router.get('/hall/:id', controller.getId)
router.get('/hall', controller.getAll)

//router.post('/hall', controller.postNew)



module.exports = router