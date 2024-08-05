"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- *
{
  "userId": "652d7681508462fafafa01a2",
  "pizzaId": "652d76c5508462fafafa01b0",
  "size": "Small",
  "quantity": 1,
  "price": 99.99
}
------------------------------------------------------- */
// Order Controller:

const Pizza = require('../../models/pizza')
const Order = require('../../models/order')

const pizzaSizes = ['Small', 'Medium', 'Large', 'XLarge']

module.exports = {

    list: async (req, res) => {

        // only self-records:
        const filter = req.session?.user?.isAdmin ? {} : { userId: req.session.user.id }

        // const data = await res.getModelList(Order, {}, ['userId', 'pizzaId'])
        const data = await res.getModelList(Order, filter, [
            'userId',
            { path: 'pizzaId', populate: 'toppings' }
        ])

        // res.status(200).send({
        //     error: false,
        //     details: await res.getModelListDetails(Order),
        //     data
        // })

        // Add '?' parameters to url if there is not:
        if (!req.originalUrl.includes('?')) req.originalUrl += '?'

        // console.log(data)
        res.render('orderList', {
            details: await res.getModelListDetails(Order, filter),
            orders: data,
            pageUrl: req.originalUrl.replace(/[?|&]page=([^&]+)/gi, ''),
            user:req.session?.user
        })
    },

    create: async (req, res) => {

        if (req.method == 'POST') {

            // Add userId from session:
            req.body.userId = req.session.user.id
            // Add pizzaId from req.query:
            req.body.pizzaId = req.query.pizza

            // Calculatings:
            req.body.quantity = req.body?.quantity || 1 // default: 1
            if (!req.body?.price) {
                const dataPizza = await Pizza.findOne({ _id: req.body.pizzaId }, { _id: 0, price: 1 })
                req.body.price = dataPizza.price
            }
            req.body.totalPrice = req.body.price * req.body.quantity

            const data = await Order.create(req.body)

            // res.status(201).send({
            //     error: false,
            //     data
            // })

            res.redirect('/orders/' + data.id)

        } else {

            res.render('orderForm', {
                order: null,
                pizzas: null,
                pizza: await Pizza.findOne({ _id: req.query.pizza }),
                pizzaSizes,
                user:req.session?.user
            })
        }
    },

    read: async (req, res) => {

        const data = await Order.findOne({ _id: req.params.id }).populate([
            'userId',
            { path: 'pizzaId', populate: 'toppings' }
        ])

        // res.status(200).send({
        //     error: false,
        //     data
        // })
        
        res.render('orderRead', {
            order: data,
            user:req.session?.user
        })

    },

    update: async (req, res) => {

        if (req.method == 'POST') {

            // Calculatings:
            req.body.quantity = req.body?.quantity || 1 // default: 1
            if (!req.body?.price) {
                const dataOrder = await Order.findOne({ _id: req.params.id }, { _id: 0, price: 1 })
                req.body.price = dataOrder.price
            }
            req.body.totalPrice = req.body.price * req.body.quantity

            console.log(req.body)

            const data = await Order.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

            // res.status(202).send({
            //     error: false,
            //     data,
            //     new: await Order.findOne({ _id: req.params.id })
            // })

            res.redirect('/orders/' + req.params.id)

        } else {

            console.log(await Order.findOne({ _id: req.params.id }))
            res.render('orderForm', {
                order: await Order.findOne({ _id: req.params.id }),
                pizzas: await Pizza.find(),
                pizzaSizes,
                user:req.session?.user
            })
        }

    },

    delete: async (req, res) => {

        const data = await Order.deleteOne({ _id: req.params.id })
        
        // Go to home:
        res.redirect('/orders')

    },
}