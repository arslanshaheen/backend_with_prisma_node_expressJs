// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUsers, getUserById } = require('../controllers/authController');

router.post('/register', registerUser);
router.get('/fetchuser/:id',getUserById)
router.post('/login', loginUser);
router.get('/fetchuser', getAllUsers);
module.exports = router;

