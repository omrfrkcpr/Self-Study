/* ---------------------------------- */
/*              Operators             */
/* ---------------------------------- */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

/* ---------------------------------- */
//!        ARITHMETIC OPERATORS       */
/* ---------------------------------- */

let a = 10;
let b = 2;

console.log(a + b); // 12 (addition operator)
console.log(a - b); // 8 (subtraction operator)
console.log(a / b); // 5 (division operator)
console.log(a * b); // 20 (multiplication operator)
console.log(a ** b); // 100 (exponentiation operator)
console.log(a % b); // 0 (remainder operator)

//? Modulus - Remainder Operator

let c = 3;

console.log(a / c); // 3.333333333
console.log(a % c); // 1 (tek sayi)
console.log(a % b); // 0 (cift sayi)

/*
let d = +prompt("Enter a number: ");

if (isNaN(d)) {
  console.log("Sayi girmediniz");
} else if (d % 2 == 0) {
  console.log("Girilen sayi cift");
} else {
  console.log("Girilen sayi tek");
}
*/

let u = 1 + 2 * (5 - 4 / 2) ** 2;
console.log(u); // 19 - islem onceligi: () > ** > * > / > + -

//? Saat

let sure = 225;
let saat = parseInt(sure / 60);
let dakika = sure % 60;
console.log(`${sure} dakika, ${saat}saat ${dakika} dakikadir`);

//? Increment Decrement

//& post increment / decrement

let d = 3;
console.log(d++); // 3 - once yazdir sonra 1 arttir
console.log(d); // 4 - guncel d yi yazdir

let f = 5;
console.log(f--); // 5 - once yazdir sonra 1 azalt
console.log(f); // 4 - guncel f yi yazdir

//& pre increment / decrement

let e = 3;
console.log(++e); // 4 - once 1 arttir sonra yazdir
console.log(e); // 4 - guncel e yi yazdir

let g = 5;
console.log(--g); // 4 - once 1 azalt sonra yazdir
console.log(g); // 4 - guncel g yi yazdir

/* ---------------------------------- */
//!        ASSIGNMENT OPERATORS       */
/* ---------------------------------- */

let h = 10;
let i = 2;

let j = i;
console.log(j); // 2

i = 3; // primitiveler immutable dir. Stack de yeni bir atama yapilirsa degisir. Aksi takdirde yeni kayit acilarak kaydedilir.

console.log(j); // 2 - j nin degeri i degisti diye degismez

// console.log((h += i)); // 13 - j=10 , i=3
// console.log((h -= i)); // 7
// console.log((h *= i)); // 30
//console.log((h /= i)); // 3.333333333
// console.log((h %= i)); // 1
// console.log((h **= i)); // 1000

/* ---------------------------------- */
//!       COMPRASSION OPERATORS       */
/* ---------------------------------- */

let k = 2;
let l = "2";
let m = 2;

console.log(k == l); //& true - tipe bakmaksizin degere bakar
console.log(k === l); //& false - hem tipe hem degere bakar
console.log(k === m); //& true

console.log(k != l); //& false
console.log(k !== l); //& true
console.log(k !== m); //& false

let n = true;
console.log(!n); // false

let o;
if (o) {
  console.log("if calisti"); // calismaz cunku (o) true degil
} else {
  console.log("else calisti"); // calisir cunku (o) false
}

let p = 100;
let q = 100;

console.log(p > q); // false
console.log(p >= q); // true

console.log("A" > "a"); // false - ASCII degerine bakar = A:65, a:97

/* ---------------------------------- */
//!         LOGICAL OPERATORS         */
/* ---------------------------------- */

// && - AND
// tum sartlari saglamali ki dogru ciksin

let a1 = true; // karakter sayisi 8 den buyuk mu
let b1 = true; // kucuk harf var mi
let c1 = false; // buyuk harf var mi
let d1 = true; // karakter sayisi 16 dan buyuk mu

let y = a1 && b1 && c1;
console.log(y); // false

//& || - OR

let z = d1 || (b1 && c1);
console.log(z); // true

//& ! OLUMSUZLUK
