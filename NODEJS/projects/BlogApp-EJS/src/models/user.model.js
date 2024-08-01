const mongoose = require("mongoose");

// const crypto = require('node:crypto')

// const keyCode = process.env.SECRET_KEY
// const loopCount = 10000
// const charCount = 32 // write 32 for 64 
// const encType = 'sha512'

// const passwordEncrpyt = (password) => {
//   // const newPass = crypto.pbkdf2Sync(password,keyCode,loopCount,charCount,encType).toString("hex");
//   // console.log(newPass)
//   return crypto
//     .pbkdf2Sync(password, keyCode, loopCount, charCount, encType)
//     .toString("hex");
// }

// passwordEncrpyt("123456")
// passwordEncrpyt("1234576")
//* bu işlemi daha temiz olması açısından ayrı bir dosyaya taşıdık
const passwordEncrpyt = require("../helpers/passwordEncrpyt")

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      //   validate:[(email)=>{
      //     if(email.includes('@') && email.split('@')[1].includes(".")){
      //       return true
      //     }
      //     return false
      //   }, "Email is invalid!"]
      // },
      validate: [
        (email) => email.includes("@") && email.split("@")[1].includes("."),
        "Email is invalid!",
      ], //* regex ifadeleriyle daha kapsamlı bir validasyon yapılabilir. true dönerse validasyonda geçer, false dönerse kalır.
    },
    password: {
      type: String,
      trim: true,
      required: true,
      // set: (password) => "anthony",
      set: (password) => passwordEncrpyt(password),//* set; db ye akydolurken veriyi işlemden geçirerk kaydolmasını sağlar
      //! db ye şifre bilgileri güvenlik amaçlı doğrudan eklenmez. Hashlenmiş bir şekilde veritabanına eklenir.
    },
    firstName: String,
    lastName: String,
  },
  {
    collection: "user",
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
