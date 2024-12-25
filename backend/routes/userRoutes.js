const express = require ('express')
const router = express.Router()
const userController = require('../controllers/userController')

const dotenv = require('dotenv');
dotenv.config()


router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)

module.exports = router;