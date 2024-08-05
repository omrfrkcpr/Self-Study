"use strict"

const { CustomError } = require("../errors/customError")

/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

module.exports = {

    isLogin: (req, res, next) => {
        if (req.user && req.user.isActive) {
            next()
        } else {
            throw new CustomError("NoPermission: You must login.", 403);
        }
    },
    isAdmin: (req,res,next) => {
        if (req.user && req.user.isActive && req.user.isAdmin) {
          next();
        } else {
          throw new CustomError("NoPermission: You must login and to be Admin.", 403);
        }
    }
}
