const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  // 1. Check if the "Authorization" header exists
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // 2. Get the token (remove the word "Bearer ")
      token = req.headers.authorization.split(' ')[1];

      // 3. Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 4. Find the user and attach to the request
      req.user = await User.findById(decoded.id).select('-password');
      
      next(); // Pass to the next step
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// Admin Only Guard
const adminOnly = (req, res, next) => {
  if (req.user && (req.user.role === 'college_admin' || req.user.role === 'super_admin')) {
    next();
  } else {
    res.status(401).json({ message: 'Not authorized as an admin' });
  }
};

module.exports = { protect, adminOnly };