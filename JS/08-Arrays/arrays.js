//! ---------------------------------- */
//!               ARRAYS               */
//! ---------------------------------- */

/* ----------------------------------- */
//*           Array Defining           */
/* ----------------------------------- */

const arr = [1, "iki", 3];

const arr1 = new Array(1, "iki", 3);

console.log(arr); // [ 1, 'iki', 3 ]
console.log(arr1); // [ 1, 'iki', 3 ]

const arr2 = new Array(100);

console.log(arr2); // [ <100 empty items> ]

let emptyArr = [];

console.log(emptyArr); // []

const car = ["Ford", "Fiat", "BMW"];

car[3] = "Audi";
console.log(car); // [ 'Ford', 'Fiat', 'BMW', 'Audi' ]

car[10] = "Mercedes";
car[8] = "Ferrari";

console.log(car); // ['Ford','Fiat','BMW','Audi',<4 empty items>,'Ferrari',<1 empty item>,'Mercedes']

console.log(car[9]); // undefined
console.log(car[2]); // BMW

/* ----------------------------------- */
//*            Array.length            */
/* ----------------------------------- */

console.log(car.length); // 11
console.log(car[car.length - 1]); // Mercedes
