const express = require('express');
const { handleSignIn, handleLogin } = require('../controllers/user');
const router = express.Router();

router.use(express.urlencoded({ extended: false }));

router.route('/register').post(handleSignIn);  
router.route('/login').post(handleLogin);    

module.exports = router;
