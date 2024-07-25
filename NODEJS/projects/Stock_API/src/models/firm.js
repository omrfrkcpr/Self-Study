"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
// Firm Model:

const FirmSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    phone: String,

    address: String,

    image: String

}, {
    collection: 'firms',
    timestamps: true
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Firm', FirmSchema)