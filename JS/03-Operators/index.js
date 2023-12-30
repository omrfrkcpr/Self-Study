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
console.log(Boolean(NaN)); // false

/*
let asd;
asd = prompt("Enter a number");
Kullanicidan mutlaka string isteriz. Daha sonra onu number a symbol e vs ceviririz.
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

let n = null;
console.log(Boolean(n)); // false

console.log(null + 5); // 5
console.log(null - 5); // -5

let m = null - 5;
console.log(typeof m); // number

let u;
console.log(Boolean(u));
console.log(u - 5); // NaN

console.log(null == undefined); // true
console.log(null === undefined); // false

let y = u - 5;
console.log(y); // NaN
console.log(typeof y); // number

console.log(Number("asdf")); // NaN
console.log(Number("1234")); // number

//? isNaN() - Boolean type (NaN tespiti yapar)

let z = Number("1203"); // Number
let q = Number("lskd"); // NaN
console.log(isNaN(z)); // false
console.log(isNaN(q)); // true

console.log(null === null); // true
console.log(undefined === undefined); // true
console.log(NaN === NaN); // false

console.log(Boolean(NaN)); // false
console.log(NaN == false); // false
console.log(NaN == true); // false

//! Symbol
// Objelerin property isimleri olarak kullanilabilir. (Unique Variables)

const sym1 = Symbol("Hello");
const sym2 = Symbol("Hello");

console.log(sym1, sym2); // both of them unique
console.log(sym1 == sym2); // false

//! Type Conversion && Coercion
// Do not trust JavaScript, do your own type conversion!
// Number, parseInt, parseFloat or + sign converts Strings into Number type
// To convert strings into number you can use toString() method

let k = 12;
let l = "12";
let t = k + l;

console.log(k + l); // 1212 (exception)
console.log(typeof l); // string
console.log(typeof t); // string
console.log(k + Number(l)); // 24
console.log(k + parseInt(l)); // 24
console.log(k + parseFloat(l)); // 24
console.log(k + +l); // 24
console.log(k / l); // 1 (number)
console.log(k - l); // 0 (number)
console.log(l ** 2); // 144 (number)

let o = Number(l);
console.log(typeof o); // number
let p = l;
console.log(typeof p); // string

let w = "125.45";
console.log(parseInt(w)); // 125
console.log(parseFloat(w)); // 125.45
console.log(Math.trunc(125.45)); // 125
console.log(Math.trunc(w)); // 125

//? toString : sayiyi string e cevirir

let f = 123.456; // number
let g = "123.456"; // string

let h = f.toString();
console.log(typeof h); // string
console.log(f.toString()); // '123.456'
console.log(h); // '123.456'

let i = +g; // + operatoru stringi number a cevirir

/*
const age1 = prompt("Enter your age:");
console.log(typeof age1, age1); // string Omer

const age2 = +prompt("Enter your age:");
console.log(typeof age2, age2); // number NaN
*/

//? toFixed noktadan sonra kac basamak oldugunu gosterir
//^ Sayiyi string e cevirir

let j = 0.1234567;
console.log(j); // 0.1234567
console.log(j.toFixed(4)); // '0.1234' (string)
console.log(+j.toFixed(4)); // 0.1234 (number)
console.log(typeof j, j); // number

//^ 0.1 + 0.2 != 0.3 [Floating Point Math - https://0.30000000000000004.com/ ]
console.log(0.1 + 0.2); // 0.30000000000000000004
