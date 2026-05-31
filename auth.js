const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) return res.send("Access Denied");

  try {
    const verified = jwt.verify(token, "secretkey");
    req.user = verified;
    next();
  } catch {
    res.send("Invalid Token");
  }
};