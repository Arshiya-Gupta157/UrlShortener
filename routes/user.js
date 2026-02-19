const express = require('express');
const router = express.Router();
const {userSignUp, login} = require("../controller/user")

router.post('/', userSignUp)
router.post('/login', login)
module.exports = router