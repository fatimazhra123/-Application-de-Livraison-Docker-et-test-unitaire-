const express = require('express')
const router = express.Router()


//Les Function Authentification
const { Login, register, ForgetPassword, ResetPassword, Verify,LogOut } = require('../Controllers/AuthController')

//url : /api/auth
router.post('/login', Login)
router.post('/register/', register)
router.post('/forgetpassword', ForgetPassword)
router.post('/resetpassword/:token', ResetPassword)
router.get('/user/:id/confirm/:token', Verify)
router.get('/logout',LogOut)


module.exports = router