"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
// Sale Model:

const SaleSchema = new mongoose.Schema({
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    amount: {
        type: Number,
        set: function () { return this.price * this.quantity },
        default: function () { return this.price * this.quantity },
        transform: function () { return this.price * this.quantity },
    }
}, {
    collection: 'sales',
    timestamps: true
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Sale', SaleSchema)