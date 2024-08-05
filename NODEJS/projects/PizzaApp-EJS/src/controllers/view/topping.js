"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Topping Controller:

const Topping = require('../../models/topping')

module.exports = {

    list: async (req, res) => {

        const data = await res.getModelList(Topping)

        // res.status(200).send({
        //     error: false,
        //     details: await res.getModelListDetails(Topping),
        //     data
        // })

        // Add '?' parameters to url if there is not:
        if (!req.originalUrl.includes('?')) req.originalUrl += '?'

        res.render('toppingList', {
            details: await res.getModelListDetails(Topping),
            toppings: data,
            pageUrl: req.originalUrl.replace(/[?|&]page=([^&]+)/gi, '')
        })
    },

    create: async (req, res) => {

        if (req.method == 'POST') {

            const data = await Topping.create(req.body)

            // res.status(201).send({
            //     error: false,
            //     data
            // })

            res.redirect('/toppings/' + data.id)

        } else {

            res.render('toppingForm', {
                topping: null,
                user:req.session?.user
            })
        }
    },

    read: async (req, res) => {

        const data = await Topping.findOne({ _id: req.params.id })

        // res.status(200).send({
        //     error: false,
        //     data
        // })

        res.render('toppingRead', {
            topping: data,
            user:req.session?.user
        })

    },

    update: async (req, res) => {

        if (req.method == 'POST') {

            const data = await Topping.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

            // res.status(202).send({
            //     error: false,
            //     data,
            //     new: await Topping.findOne({ _id: req.params.id })
            // })

            res.redirect('/toppings/' + req.params.id)

        } else {

            res.render('toppingForm', {
                topping: await Topping.findOne({ _id: req.params.id }).populate('toppings'),
                user:req.session?.user
            })
        }

    },

    delete: async (req, res) => {

        const data = await Topping.deleteOne({ _id: req.params.id })

        // Go to home:
        res.redirect('/toppings')

    },
}