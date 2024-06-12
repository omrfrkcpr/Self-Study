const Contact = require("../models/contactModel");

module.exports = async (req, res, next) => {
  const contact = await Contact.findByPk(req.params.id);
  if (contact) {
    next();
  } else {
    res.errorStatusCode = 404;
    throw new Error("Contact info not found", {
      cause: `Sent contact id info: ${req.params.id}`,
    });
  }
};
