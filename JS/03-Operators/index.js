console.log("Hello World");

/*
String
Number
Boolean 
Null
Undefined
BigInt
Symbol
*/

//! String

const message = "World";

let str1 = "Hello World";
let str2 = "Hello World";
let str3 = "Hello " + message;
let str4 = new String("Hello World");

console.log(str1);
console.log(str2);
console.log(str3);
console.log(typeof str3, str3);
console.log(typeof str4, str4);

//! Number

let num1 = 1;
let num2 = 1.2;
let num3 = 0.123456789;

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);

//2^53 9007199254740992

//! BigInt

// 2^53 -1 den buyuk sayilar

const buyukSayi = 123455635654699658093456034758052750290209387450928n;

console.log(typeof buyukSayi);
console.log(10n + 20n);

//! Boolean

// true false

console.log(3 > 2);
console.log(3 < 2);
console.log(typeof true);
console.log(typeof false);

// Falsy degerler
/*
0, '', "", null, undefined
*/
const arr = [];

console.log(Boolean(arr)); // true bir object
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean("")); // false

/*
let asd;
asd = prompt("Enter a number");

let asd = prompt("Enter a number");
*/

let abc;
console.log(typeof abc);
abc = 3;
console.log(typeof abc);

var xyz;
console.log(typeof xyz);
var xyz = "dog";
console.log(typeof xyz);

/*
const klm; //Uncaught SyntaxError: Missing initializer in const declaration 
klm = 1 // Uncaught TypeError: Assignment to constant variable
console.log(typeof klm);
*/

//! NULL

console.log(typeof null); //object
