const express = require('express');
const router = express.Router();
const { registerUser, authUser } = require('../controllers/userController');

// Register Route
router.post('/', registerUser);

// Login Route (New!)
router.post('/login', authUser);

module.exports = router;