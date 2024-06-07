'use strict'
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'

/* ------------------------------------------------------- *
app.get('/', (req, res) => {
    res.send('Hello World!')
})
/* ------------------------------------------------------- *
app.get('/', (req, res) => {
    throw new Error('Error New Message')
})

app.get('/user/:id', (req, res, next) => {
    const id = req.params?.id || 0

    try {
        if (isNaN(id)) {
            throw new Error('ID is not a number')
        }
        res.send({status: true, error: false})
    } catch (error) {
        res.send({status: false, error: true})
    }
})
/* ------------------------------------------------------- *
//? ERROR HANDLER
//? Control with catch(next)
app.get('/', (req, res) => {
    throw new Error('error')
    res.send('true')
})
/* ------------------------------------------------------- *
const asyncFunction = async () => {
    throw new Error('Error is async-function', { cause: 'No reason :)' })
}

app.get('/async', async (req, res, next) => {
    res.errorStatusCode = 501
    
    //await asyncFunction().then().catch((err) => { next(err) })
    await asyncFunction().then().catch(next)
})
/* ------------------------------------------------------- *
const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res?.errorStatusCode || 500
    res.status(errorStatusCode).send({
        error: true,
        status: false,
        message: err.message,
        cause: err.cause,
        stack: err.stack
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
app.use(require('./errorHandler'))
/* ------------------------------------------------------- */

app.listen(PORT, () => {
    console.log(`Example app listening on port http://${HOST}:${PORT}`)
})
