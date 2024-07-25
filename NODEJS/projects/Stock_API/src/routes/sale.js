"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/sale:

const sale = require('../controllers/sale')
const permissions = require('../middlewares/permissions')

// URL: /sales

router.route('/(:id)?')
    .post(permissions.isAdmin, sale.create)
    .get(permissions.isStaff, sale.read)
    .put(permissions.isAdmin, sale.update)
    .patch(permissions.isAdmin, sale.update)
    .delete(permissions.isAdmin, sale.delete)

/* ------------------------------------------------------- */
module.exports = router