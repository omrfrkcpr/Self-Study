//! Password Encryption:
//* alternatif 3rd party library bcrypt => https://www.npmjs.com/package/bcrypt
//? https://nodejs.org/api/crypto.html#cryptopbkdf2syncpassword-salt-iterations-keylen-digest
const crypto = require('node:crypto') //* built-in module. nodejs 16.5 sürümünden sonra yükleme yapmadan doğrudan bu şekilden çağırılabiliyor. 'node:' builtin module olduğunun ifadesidir.

const keyCode = process.env.SECRET_KEY;
// 'SECRET_KEY' çevresel değişkenini alır, hashleme güvenliği için önemlidir. bu nedenle .env ortamında saklanması uygundur.
// Bu değer, şifreleme işlemi için tuz (salt) olarak kullanılır.
// keyCode, şifreleme algoritmasına ek bir giriş olarak kullanılır. Şifreleme algoritması, salt kullanarak aynı şifrenin farklı kullanıcılar için farklı sonuçlar üretmesini sağlar. Bu, şifrenin kırılmasını zorlaştırır.
const loopCount = 10000;
// Şifreleme algoritmasının kaç kez çalıştırılacağını belirtir. Bu örnekte 10.000 defa.
const charCount = 32; // write 32 for 64
// Şifrelenmiş anahtarın byte uzunluğunu belirtir. Bu örnekte 32 byte (64 karakter) kullanılır.
const encType = "sha512";
// Şifreleme algoritmasının tipini belirtir. Bu örnekte 'sha512' kullanılır.

const passwordEncrpyt = (password) => {
  // const newPass = crypto.pbkdf2Sync(password,keyCode,loopCount,charCount,encType).toString("hex");
  // console.log(newPass)
  return crypto
    .pbkdf2Sync(password, keyCode, loopCount, charCount, encType)
    .toString("hex");
  //! pbkdf2Sync fonksiyonu, şifreyi belirtilen tuz (keyCode), iterasyon sayısı (loopCount), // anahtar uzunluğu (charCount) ve şifreleme algoritması (encType) ile şifreler. // Şifrelenmiş anahtar hex formatına dönüştürülür ve döndürülür.
};

module.exports = passwordEncrpyt;
