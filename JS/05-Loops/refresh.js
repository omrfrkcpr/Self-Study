//* ---------------------------------- */
//*        And (&&) Operator           */
//* ---------------------------------- */

console.log(2 && 5); // Sona kadar True yu arar. 5
console.log("0" && 7); // Sona kadar True yu arar. 7
console.log(0 && 7); // 0 falsy deger. 0

//? Object ve Array primitive degil, referans tipli yapilardir.
//? Stack ve Heap
console.log({} && "Hello"); // Hello
console.log([] && "Hello"); // Hello

console.log(Boolean([]));
console.log(Boolean({}));

console.log("" && "World"); // bosluk
console.log("" && "World"); // bosluk
console.log(`` && "World"); // bosluk

console.log(null && "Hello World"); // false degeri = null
console.log(NaN && "Hello World"); // false degeri =  NaN
console.log(NaN && null); // ilk hangisi yazilirsa o. NaN

//* ---------------------------------- */
//*          OR (||) Operator          */
//* ---------------------------------- */

console.log(2 || 5); // gordugu ilk true degeri yazar. 2
console.log(0 || 7); // gordugu ilk true degeri yazar.Ilki false. 7
console.log(0 || NaN); // true arar. Yoksa ikisi de false ise sondakini yazar. NaN
console.log(null || NaN); // true arar. Yoksa ikisi de false ise sondakini yazar NaN
console.log(null || 1); // ilk true deger. 1

console.log({} || "Hello"); // {}
console.log([] || "Hello"); // []
