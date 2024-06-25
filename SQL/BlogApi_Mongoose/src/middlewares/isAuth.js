module.exports = (req, res, next) => {
  if (req.session?.id) {
    return next();
  } else {
    res.errorStatusCode = 401;
    throw new Error("Not authorized!", {
      cause: "No session found",
    });
  }
};
