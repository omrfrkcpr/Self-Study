"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const TokenSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        index:true,
        unique:true
    },
    token:{
        type:String,
        trim:true,
        required:true,
        index:true,
        unique:true
    }
},{
    collection:"tokens",
    timestamps:false
})

module.exports = mongoose.model("Token",TokenSchema)