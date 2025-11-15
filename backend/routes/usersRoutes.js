const express = require('express')
const router = express.Router()
const {login, register, data} = require('../controllers/usersControllers')
const {protect} = require ('../middleware/authmiddleware')

//endpoints publicos
router.post('/login', login)
router.post('/register', register)

//endpoint privado todavia sin proteccion


router.get('/data', protect, data)

module.exports = router
