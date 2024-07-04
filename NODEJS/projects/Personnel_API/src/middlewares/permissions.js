"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */

module.exports = {
  isLogin: (req, res, next) => {
    if (req.user && req.user.isActive) {
      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error("No Permission: Please log in!");
    }
  },
  isAdmin: (req, res, next) => {
    if (req.user && req.user.isActive) {
      if (req.user.isAdmin) {
        next();
      } else {
        res.errorStatusCode = 403;
        throw new Error("No Permission: Only admin can perform this action!");
      }
    } else {
      res.errorStatusCode = 403;
      throw new Error("No Permission: Please log in!");
    }
  },
  isAdminOrOwn: (req, res, next) => {
    if (req.user && req.user.isActive) {
      if (req.user.isAdmin || req.params?.id == req.user._id) {
        next();
      } else {
        res.errorStatusCode = 403;
        throw new Error(
          "No Permission: Only admin or owner can perform this action!"
        );
      }
    } else {
      res.errorStatusCode = 403;
      throw new Error("No Permission: Please log in!");
    }
  },
  isAdminorLead: (req, res, next) => {
    if (req.user && req.user.isActive) {
      if (
        req.user.isAdmin ||
        (req.user.isLead && req.user.departmentId === req.params?.id)
      ) {
        next();
      } else {
        res.errorStatusCode = 403;
        throw new Error(
          "No Permission: Only admin or lead can see the list of personnels in this department"
        );
      }
    } else {
      res.errorStatusCode = 403;
      throw new Error("No Permission: Please log in!");
    }
  },
};
