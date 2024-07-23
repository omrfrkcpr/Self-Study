"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// User Controller:

const User = require('../models/user')
const Token = require('../models/token')
const passwordEncrypt = require('../helpers/passwordEncrypt')

module.exports = {
    list: async (req, res) => {
        res.status(200).send({
            error: false,
            data: 'list'
        })
    },

    create: async (req, res) => {
          /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Create User"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "firstName": "test",
                    "lastName": "test",
                }
            }
        */

        // Yeni kayıtlarda admin/staff = false
        req.body.isStaff = false
        req.body.isAdmin = false

        console.log('create before');
        const data = await User.create(req.body)
        console.log('create after');

        /* AUTO LOGIN *
        const tokenData = await Token.create({
            userId: data._id,
            token: passwordEncrypt(data._id + Date.now())
        })
        /* AUTO LOGIN */

        res.status(201).send({
            error: false,
            token: tokenData.token,
            data
        })
    },

    read: async (req, res) => {
        res.status(200).send({
            error: false,
            data: 'list'
        })
    },

    update: async (req, res) => {
        res.status(200).send({
            error: false,
            data: 'list'
        })
    },

    delete: async (req, res) => {
        res.status(200).send({
            error: false,
            data: 'list'
        })
    }
}