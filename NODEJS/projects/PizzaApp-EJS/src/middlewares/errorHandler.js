"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// app.use(errorHandler):


module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const data = {
    error: true,
    message: err.message,
    cause: err.cause,
    body: req.body,
  };

  if (req.url.startsWith("/api")) {
    res.status(statusCode).send(data);
  } else {
    res.render("error", {
      data,
      user: req.session?.user,
    });
  }
};