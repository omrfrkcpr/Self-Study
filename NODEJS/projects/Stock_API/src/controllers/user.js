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
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "List Users"
            #swagger.description = `
                You can use <u>filter[] & search[] & sort[] & page & limit</u> queries with endpoint.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=asc&sort[field2]=desc</b></li>
                    <li>URL/?<b>limit=10&page=1</b></li>
                </ul>
            `
        */

        // Sadece kendi kayıtlarını görebilir:
        // Çalışanlarımız ve Admin tük kullanıcıları görebilir
        // Şirket politikası na göre isStaff kaldırılabilir
        const customFilters = (req.user?.isAdmin || req.user?.isStaff) ? {} : { _id: req.user._id }

        const data = await res.getModelList(User, customFilters)

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(User, customFilters),
            data
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
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Get Single User"
        */

        // 

        // Sadece kendi kayıtını görebilir:
        // Çalışanlarımız ve Admin tük kullanıcıları görebilir
        const customFilters = (req.user?.isAdmin || req.user?.isStaff) ? {} : { _id: req.user._id }

        const data = await User.findOne(customFilters)

        res.status(200).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Update User"
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
        console.log('--->>', req.params.id, req.user?.isAdmin);

        // Sadece kendi kaydını güncelleyebilir:
        //const customFilters = req.user?.isAdmin ? { _id: req.params.id } : { _id: req.user._id }
        const customFilters = { _id: req.params.id }

        // Yeni kayıtlarda admin/staff durumunu değiştiremez:
        if (!req.user?.isAdmin) {
            delete req.body.isStaff
            delete req.body.isAdmin
        }

        const data = await User.updateOne(customFilters, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await User.findOne(customFilters),
        })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Delete User"
        */

        // Permission tarafında permissions.isAdmin kontrolü yapıldığı için burda gerek kalmadı.

        if (req.params.id !== req.user._id) {
            const data = await User.deleteOne({ _id: req.params.id })
            const count = data?.deletedCount ?? 0


            console.log('delete >> ', count);
            res.status(count > 0 ? 204 : 404).send({
                error: count !== 0,
                data
            })
        } else {
            // Admin kendini silemez.
            res.errorStatusCode = 403
            throw new Error('You can not remove your account.')
        }
    }
}