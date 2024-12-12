const express = require('express');
const router = express.Router();
const {signup,login,forgotPassword,fetchUsers, updatePassword}= require('../controllers/auth.controller')

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/change-password', updatePassword);
router.post('/fetch-users', fetchUsers);

module.exports = router;
