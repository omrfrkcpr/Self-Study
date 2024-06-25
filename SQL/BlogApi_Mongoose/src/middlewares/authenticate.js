// authenticate.js
const { User } = require("../models/user.model");

module.exports = async (req, res, next) => {
  if (req.session?.id) {
    const { id, password, email } = req.session;
    const user = await User.findOne({ _id: id });
    if (user && user.password === password) {
      req.user = user;
      req.isLogin = true;
      return next();
    }
    req.session = null;
  }
  res.errorStatusCode = 401;
  next(new Error("Not authorized!", { cause: "No valid session found" }));
};
