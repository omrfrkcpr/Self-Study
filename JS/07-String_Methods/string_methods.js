// ?=========================================================
// ?                 STRING METHODS
// ?=========================================================
console.log("****STRING METHODS******");

//& 1-Basic string definination (primitive data type)
const str1 = "clarusway";
const str2 = "hello";
const str3 = "all the world";

console.log(str1 + str2, typeof (str1 + str2));

//& 2-String constructor (non primitive data type)

const str4 = new String("new String");
console.log(str4, typeof str4);

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods
