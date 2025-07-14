require("dotenv").config();
const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const token = auth.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    console.log(req.user);
    next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

exports.authorize = (roles) => {
  return (req, res, next) => {
    const role = req.user?.role;
    if (!roles.includes(role)) {
      return res.status(403).json({ message: "Forbidden: Access denied" });
    }
    next();
  };
};
