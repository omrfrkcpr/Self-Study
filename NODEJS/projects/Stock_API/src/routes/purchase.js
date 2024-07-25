"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/purchase:

const purchase = require('../controllers/purchase')
const permissions = require('../middlewares/permissions')

// URL: /purchases

router.route('/(:id)?')
    .post(permissions.isAdmin, purchase.create)
    .get(permissions.isStaff, purchase.read)
    .put(permissions.isAdmin, purchase.update)
    .patch(permissions.isAdmin, purchase.update)
    .delete(permissions.isAdmin, purchase.delete)

/* ------------------------------------------------------- */
module.exports = router