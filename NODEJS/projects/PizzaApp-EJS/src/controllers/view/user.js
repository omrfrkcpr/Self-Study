"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// User Controller:

const User = require('../../models/user')

module.exports = {

    list: async (req, res) => {

        const data = await res.getModelList(User)

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(User),
            data
        })

        // Add '?' parameters to url if there is not:
        if (!req.originalUrl.includes('?')) req.originalUrl += '?'

        res.render('userList', {
            details: await res.getModelListDetails(User),
            users: data,
            pageUrl: req.originalUrl.replace(/[?|&]page=([^&]+)/gi, '')
        })
    },

    create: async (req, res) => {

        if (req.method == 'POST') {

            const data = await User.create(req.body)

            // Set Session:
            req.session = {
                user: {
                    id: data.id,
                    username: data.username,
                    password: data.password,
                    isAdmin: data.isAdmin
                }
            }
            // Go to home:
            res.redirect('/')

        } else {

            res.render('userCreateForm',{
                user:req.session?.user
            })
        }
    },

    read: async (req, res) => {

        const data = await User.findOne({ _id: req.params.id })

        // res.status(200).send({
        //     error: false,
        //     data
        // })

        res.render('userRead', {
            user: data,
        })

    },

    update: async (req, res) => {

        if (req.method == 'POST') {

            const data = await User.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

            // res.status(202).send({
            //     error: false,
            //     data,
            //     new: await User.findOne({ _id: req.params.id })
            // })

            res.redirect('/users/' + req.params.id)

        } else {

            res.render('userForm', {
                user: await User.findOne({ _id: req.params.id }).populate('toppings')
            })
        }

    },

    delete: async (req, res) => {

        const data = await User.deleteOne({ _id: req.params.id })
        
        // Go to home:
        res.redirect('/users')

    },
}