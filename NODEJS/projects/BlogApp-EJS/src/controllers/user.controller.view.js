const User = require("../models/user.model");


const passwordEncrpyt = require("../helpers/passwordEncrpyt");

module.exports = {
  login: async (req, res) => {
    if(req.method == 'POST'){
      const { email, password, remindMe } = req.body;

      if (email && password) {
        // const user = await User.findOne({email:email})
        const user = await User.findOne({ email });
        if (user) {
          // console.log("db: ", user.password)
          // console.log("user: ",passwordEncrpyt(password));
          if (user.password == passwordEncrpyt(password)) {
            /*! Session */
            //* oturum süresince erişim sağlanır
            // req.session = {
            //   email: user.email,
            //   password:user.password
            // }
            req.session.email = user.email;
            req.session.password = user.password;
            req.session.id = user._id;

            if (remindMe) {
              req.session.remindMe = remindMe;
              //* sessionu cookieye çeviriyoruz. Verdiğimiz süre kadar erişim sağlanır
              req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3;
            }
            // res.status(200).send({
            //   error: false,
            //   message: "Login Ok!",
            //   user,
            // });
            res.redirect("/");
          } else {
            throw new Error("Login parameters not true!");
          }
        } else {
          throw new Error("User not found!");
        }
      } else {
        throw new Error("Email and password are required!");
      }
    }else {
      res.render('loginForm',{
        user:req.session,
      })
    }
  },
  logout: (req, res) => {
    req.session = null
    // res.status(200).send({
    //   error: false,
    //   message: "Logout Ok!",
    // });
    res.redirect("/");
  },
};
