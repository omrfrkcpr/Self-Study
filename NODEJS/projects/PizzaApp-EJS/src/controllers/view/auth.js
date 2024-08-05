"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const User = require('../../models/user')

module.exports = {

    login: async (req, res) => {

        if (req.method == 'POST') {

            const { username, password } = req.body

            if (username && password) {

                const user = await User.findOne({ username, password })

                if (user) {

                    if (user.isActive) {

                        // Set Session:
                        req.session = {
                            user: {
                                id: user.id,
                                username: user.username,
                                password: user.password,
                                isAdmin: user.isAdmin
                            }
                        }
                        // Set Cookie:
                        if (req.body?.rememberMe) {
                            // Set Cookie maxAge:
                            req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3 // 3 Days
                        }
                        // Go to home:
                        res.redirect('/')

                    } else {

                        res.errorStatusCode = 401
                        throw new Error('This account is not active.')
                    }
                } else {

                    res.errorStatusCode = 401
                    throw new Error('Wrong username or password.')
                }
            } else {

                res.errorStatusCode = 401
                throw new Error('Please enter username and password.')
            }
        } else {
    
            res.render('userLoginForm',{user:req.session?.user})
        }
    },

    logout: async (req, res) => {
       
        // Set session to null:
        req.session = null
        // Go to home:
        res.redirect('/')

    },
}
