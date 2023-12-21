/* ---------------------------------- */
/*             DATA TYPES             */
/* ---------------------------------- */

let sayi = 45;
console.log(typeof sayi); //result number

//! ---------------------------------- */
//!         PRIMITIVE DATA TYPES      */
//!---------------------------------- */

//sie haben einen einzigen Wert.

//!bigInt

const x = Number.MAX_SAFE_INTEGER;
console.log(typeof x, x);
// number 9007199254740991
const y = BigInt(x + 1);
console.log(typeof y, y);
// bigint 9007199254740992n

//!Number
const pi = Math.PI;
console.log(pi);

//? MATH METHODE

let r1 = 6;
let result1 = 2 * pi * r1;
console.log(result1);

let r2 = 6;
let result2 = pi * r2 * r2;
console.log(result2);

// round
let sayi3 = 113.704;
console.log(Math.round(sayi3));
// ceil
let sayi4 = 45.001;
console.log(Math.ceil(sayi4));
// floor
let sayi5 = 37.6;
console.log(Math.floor(sayi5));
// trunc
let sayi6 = 53.6;
console.log(Math.floor(sayi6));
//toFixed
let sayi7 = 62.34256748;
console.log(sayi7.toFixed(2) + " TL");
//max
console.log(Math.max(37, 103, 84, 1004, 879, 1, 65));
//min
console.log(Math.min(37, 103, 84, 1004, 879, 1, 65));
//random
console.log(Math.random());
//chaining method
console.log(Math.random().toFixed(3));
//random ile istenilen sayi
let rNumber = Math.round(Math.random() * 100);
console.log(rNumber);
//power ile sayinin kuvvetini alma
console.log(Math.pow(5, 3));
console.log(5 ** 3);
//sqrt ile sayinin karekokunu alma
console.log(Math.sqrt(64));
let sayi8 = 144 ** (1 / 2);
console.log("Karekok: ", sayi8);
console.log(Math.sqrt(56).toFixed());
//cbrt ile sayinin kupkokunu alma
console.log("Kupkok: ", Math.cbrt(64));

//!string

// 1.Methode: (bevorzugt)
let name = "JavaScript";
console.log(name);
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
name[7] = "u"; // error -immutable
name = "Node.js";
console.log(name);

//2.Methode:
let a = new String("HTML");
console.log(a);
console.log(a[0]);

//Escape Characters:
let deger = "Hello Omer's World";
console.log(deger);

let siir = "Hello another day\n why is it so cold here?";
console.log(siir);

let developer = "Frontend\tDeveloper";
console.log(developer);

//1. concat Methode:
let name1 = "Ali";
let surname1 = "Guclu";
console.log(name1.concat(surname1));

//2. concat Methode:
console.log(name1 + surname1);
console.log("Name:" + name1 + surname1);
console.log("Name:", name1 + surname1);

//Template literal methode >> ES ile gelen ozellik
// ``
// stringler yazilirken degiskenleri kullanabilmemize yarar

name2 = "Ali";
surname2 = "Seven";
let job = "Fullstack Developer";

//2.method
console.log(
  "Personelimiz " +
    name2 +
    " " +
    surname2 +
    " kurumumuzda " +
    job +
    " olarak calismaktadir"
);

//template literal yontemi ile
console.log(
  `Personelimiz ${name2} ${surname2} kurumumuzda ${job} olarak calismaktadir`
);

//!boolean

let isSmall = 4 > 15;
console.log(isSmall); // output: false

let sifre = "3de4";
let control = sifre == "3de4";
console.log(control, "You are succesfully logged in!"); //output: true 'You are succesfully logged in!'

//!undefined

//value define edilmemis variable undefined olur
//geri value dondurmeyen function undefined olur

let val;
console.log(val);

val = 345;
console.log(val);

//function

function example() {
  let sum = 45 + 13;
  return sum;
}

console.log(example());

//!null

let empty = null;
console.log(empty);

//js bug
console.log(typeof empty);

//! ---------------------------------- */
//!      NON PRIMITIVE DATA TYPES    */
//!---------------------------------- */

//array
let list = ["pencil", "book", "tish"];
console.log(list);
console.log(list[1]);

//object
let object = { name: "Ali", surname: "Guven", age: 34 };
console.log(object);
console.log(object.name);
console.log(object.age);
