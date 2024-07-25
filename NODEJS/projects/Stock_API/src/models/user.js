"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
const passwordEncrypt = require('../helpers/passwordEncrypt')
/* ------------------------------------------------------- *
{
    "username": "admin",
    "password": "aA?123456",
    "email": "admin@site.com",
    "firstName": "admin",
    "lastName": "admin",
    "isActive": true,
    "isStaff": true,
    "isAdmin": true
}
{
    "username": "staff",
    "password": "aA?123456",
    "email": "staff@site.com",
    "firstName": "staff",
    "lastName": "staff",
    "isActive": true,
    "isStaff": true,
    "isAdmin": false
}
{
    "username": "test",
    "password": "aA?123456",
    "email": "test@site.com",
    "firstName": "test",
    "lastName": "test",
    "isActive": true,
    "isStaff": false,
    "isAdmin": false
}
/* ------------------------------------------------------- */
// User Model:

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true
    },

    password: {
        type: String,
        trim: true,
        required: true,
        // validate ... // validasyon işlemini pre(save) yapıyor
        // Encrypt işlemini pre(save) yapıyoruz
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true,
        // validate ... // validasyon işlemini pre(save) yapıyor
    },

    firstName: {
        type: String,
        trim: true,
        required: true
    },

    lastName: {
        type: String,
        trim: true,
        required: true
    },

    isActive: {
        type: Boolean,
        default: true
    },
    isStaff: {
        type: Boolean,
        default: false
    },

    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    collection: 'users',
    timestamps: true
})

/* ------------------------------------------------------- */
// https://mongoosejs.com/docs/middleware.html

UserSchema.pre(['save', 'updateOne'], function (next) {
    const data = this?._update || this
    console.log('this >> ', data)
    console.log('pre(save) run.')

    // email@domain.com
    const isEmailValidated = data.email ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email) : true
    console.log('email kontrol', isEmailValidated)

    if(isEmailValidated) {
        if(data?.password) {
            // kalitenizi gösterir
            const isPasswordValidated = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(data.password)

            if(isPasswordValidated){
                data.password = passwordEncrypt(data.password)

                console.log('password Encrypt >> ', data.password);

                if(this?._update) {
                    this._update = data
                } else {
                    this.password = data.password
                }

            } else {
                next(new Error('Password is not validated.'))
            }
        }
        next()
    } else {
        next(new Error('Email is not validated.'))
    }
})


/* ------------------------------------------------------- */
// Exports:
module.exports = mongoose.model('User', UserSchema)