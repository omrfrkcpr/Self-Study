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

const arrys = [32, "1", [1, 2, 3, true], {}, false];

console.log(arrys); // [ 32, '1', [ 1, 2, 3, true ], {}, false ]
console.log(arrys[2]); // [ 1, 2, 3, true ]
console.log(arrys[2][3]); // true

/* ----------------------------------- */
//*            Array.length            */
/* ----------------------------------- */

console.log(car.length); // 11
console.log(car[car.length - 1]); // Mercedes

/* ----------------------------------- */
//*            Array check             */
/* ----------------------------------- */

//? Array is an object type

const arry = [1, 2, 3];
console.log(typeof arry); // object

console.log(Array.isArray(arr)); // true
console.log(arr instanceof Array); // true

const fruit = ["Apple", "Kiwi", "Orange"]; // [ 'Apple', 'Kiwi', 'Orange' ]
const fruit2 = ["Apple", "Kiwi", "Orange"]; // [ 'Apple', 'Kiwi', 'Orange' ]

console.log(fruit == fruit2);
console.log(fruit === fruit2);
console.log([] == []);

const fruit3 = fruit;

console.log(fruit == fruit3);
console.log(fruit3);
console.log(fruit);

fruit[3] = "Banana"; // Fruit de yapilan degisiklikler fruit3 u de etkiler. (Heap/Stack)
console.log(fruit); // [ 'Apple', 'Kiwi', 'Orange', 'Banana' ]
console.log(fruit3); // [ 'Apple', 'Kiwi', 'Orange', 'Banana' ]

/* ----------------------------------------------- */
//*            array.slice(start,stop)             */
/* ----------------------------------------------- */
//? The original array will not be modified. (new array)

const colors = ["red", "blue", "purple", "white", "orange"];
const red = colors.slice(0, 1);
const colors2 = colors.slice(0);
colors[5] = "White";
console.log(red); // red
console.log(colors2); // [ 'red', 'blue', 'purple', 'white', 'orange' ]
console.log(colors); // [ 'red', 'blue', 'purple', 'white', 'orange', 'White' ]
console.log(colors2 == colors.slice()); // false

const colors3 = colors.slice(-2);
console.log(colors3); // [ 'orange', 'White' ]
const colors4 = colors.slice(-4, -1);
console.log(colors4); // [ 'purple', 'white', 'orange' ]
const colors5 = colors.slice(2, -2);
console.log(colors5); // [ 'purple', 'white' ]

/* ----------------------------------- */
//*            array.push()            */
/* ----------------------------------- */
//? to add an element to the end  of array (new array)

const value = ["green", "blue", "grey"];

value.push("blue");
console.log(value); // [ 'green', 'blue', 'grey', 'blue' ]

console.log(value.push("Yellow")); // 5 - we get the length of the array
console.log(value.push() == value.length); // true
console.log(value.push() === value.length); // true

const newColors = ["Blue", "Yellow"];
console.log(newColors.push(value)); // 3
newColors.push(value);
console.log(newColors); // [ 'Blue', 'Yellow', [ 'green', 'blue', 'grey', 'blue', 'Yellow' ] ]
newColors.push(...value);
console.log(newColors); // ['Blue','Yellow',[ 'green', 'blue', 'grey', 'blue', 'Yellow' ],[ 'green', 'blue', 'grey', 'blue', 'Yellow' ],'green','blue','grey','blue','Yellow'] == array olarak degil, tek tek ekler icindekileri (spread parameter: ...)

/* ----------------------------------- */
//*            array.pop()             */
/* ----------------------------------- */
//? to remove an element to the end  of array (new length)

const elements = ["Red", "Green", "Blue", "Yellow"];

const removedItem = elements.pop();

console.log(elements); // [ 'Red', 'Green', 'Blue' ]
console.log(removedItem); // Yellow
console.log(elements.pop()); // Blue

/* ----------------------------------- */
//*           array.unshift()          */
/* ----------------------------------- */
//? to add an element to the beginnning of an array (new length)

const elements2 = ["Blue", "Yellow"];

const newLen = elements2.unshift("Red", "Green");

console.log(elements2); // [ 'Red', 'Green', 'Blue', 'Yellow' ]
console.log(newLen); // 4
console.log(elements.unshift()); // length of elements2 = 2

elements2.unshift(elements);
console.log(elements2); // [ [ 'Red', 'Green' ], 'Red', 'Green', 'Blue', 'Yellow' ]

elements2.unshift(...elements2);
console.log(elements2); /* [
    [ 'Red', 'Green' ],
    'Red',
    'Green',
    'Blue',
    'Yellow',
    [ 'Red', 'Green' ],
    'Red',
    'Green',
    'Blue',
    'Yellow'
  ]
*/

/* ----------------------------------- */
//*            array.shift()           */
/* ----------------------------------- */
//? to remove the first element of an array and return removed Element

const newColors2 = ["White", "Brown", "Red", "Green", "Blue", "Yellow"];

const removedColor = newColors2.shift();

console.log(newColors2); // [ 'Brown', 'Red', 'Green', 'Blue', 'Yellow' ]
console.log(removedColor); // White

delete newColors2[2]; //! not preferred

console.log(newColors2); // [ 'Brown', 'Red', <empty item>, 'Blue', 'Yellow' ]

const array1 = ["red", "blue", "purple", "white", "orange"];

let first = array1.shift();
let last = array1.pop();
array1.push(first);
array1.unshift(last);

console.log(array1); // [ 'orange', 'blue', 'purple', 'white', 'red' ]

/* ----------------------------------- */
//*            array.splice()          */
/* ----------------------------------- */
//? to change/remove/add an element or elements of an array

const arrys1 = ["red", "blue", "yellow", "brown"];

// arrys1.splice(0); // []
arrys1.splice(3, 1, "white");
console.log(arrys1); // [ 'red', 'blue', 'yellow', 'white' ]
console.log(arrys1.splice(1, 3, "white", "pink")); // [ 'blue', 'yellow', 'white' ]

/* ----------------------------------- */
//*            array.concat()          */
/* ----------------------------------- */
//? to combine two or more arrays

const a1 = ["red", "green"];
const a2 = ["blue", "yellow"];
const a3 = [10, true];

console.log(a1.concat(a2, a3)); // [ 'red', 'green', 'blue', 'yellow', 10, true ]

const newArr = a1.concat("yellow", a3, a2, a1);
console.log(newArr); /* [
    'red',    'green',
    'yellow', 10,
    true,     'blue',
    'yellow', 'red',
    'green'
  ]
*/

/* ----------------------------------- */
//*           array.indexOf()          */
/* ----------------------------------- */
//? returns the position of a specific element in an array from the beginning. IF the element is not found, then returns -1

const index = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];

console.log(index.indexOf("Green")); // 2
console.log(index.indexOf("Green", 3)); // 5
console.log(index.indexOf("green")); // -1

if (index.indexOf("green") == -1) {
  index.push("green");
  console.log(index); /* [
    'Red',   'Yellow',
    'Green', 'Blue',
    'Pink',  'Green',
    'green'
  ] */
} else console.log('There is already "green" element');

/* ----------------------------------- */
//*        array.lastIndexOf()         */
/* ----------------------------------- */
//? returns the position of a specific element in an array from the end. IF the element is not found, then returns -1

const lastIndex = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];

console.log(lastIndex.lastIndexOf("Green")); // 5
console.log(lastIndex.lastIndexOf("Green", 3)); // 2
console.log(lastIndex.lastIndexOf("green")); // -1

/* ----------------------------------- */
//*           array.reverse()          */
/* ----------------------------------- */
//? to reverse an array and mutates the array in-place
//! (new Array)

const reverse = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];
reverse.reverse();
console.log(reverse); // ["Green", "Pink", "Blue", "Green", "Yellow", "Red"];
reverse.reverse();
console.log(reverse); // ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];
console.log(reverse.reverse()); // [ 'Green', 'Pink', 'Blue', 'Green', 'Yellow', 'Red' ]

/* ----------------------------------- */
//*       array.join([separator])      */
/* ----------------------------------- */
//? to combine all elements in an array to create a string.
//! doesnt mutates the original array

const join = ["C", "l", "a", "r", "u", "s", "w", "a", "y"];
console.log(join.join()); // "C,l,a,r,u,s,w,a,y"
console.log(join.join("")); // "Clarusway"
console.log(join.join("-")); // "C-l-a-r-u-s-w-a-y"

const join2 = ["C", "l", "a", "r", "u", "s", ["w", "a"], "y"];
console.log(join2.join(",")); // C,l,a,r,u,s,w,a,y

/* ----------------------------------- */
//*       array.sort([function])       */
/* ----------------------------------- */
//? to display an array in order. As default it uses string
//! mutates the original array

const sort = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];

sort.sort();
console.log(sort); // [ 'Blue', 'Green', 'Green', 'Pink', 'Red', 'Yellow' ]

const sort2 = [1, 4, 6, 7, 8, 2, 5];
sort2.sort();
console.log(sort2); // [1, 2, 4, 5,6, 7, 8]

const sort3 = [1, 9, 234, 56, 85, 123, 457, 6];
sort3.sort((a, b) => a - b); // Artan siralama
console.log(sort3); // [1, 6, 9, 56, 85, 123, 234, 457]

const sort4 = [1, 9, 234, 56, 85, 123, 457, 6];
sort4.sort((a, b) => b - a); // Azalan siralama
console.log(sort4); // [457, 234, 123, 85, 56, 9, 6 1]

/* ----------------------------------- */
//*          array.includes()          */
/* ----------------------------------- */
//? to determine whether an array includes a certain value among its entries, returning true or false as appropriate.

const include = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];

let checkElement = (element) => {
  if (!include.includes(element)) {
    include.push(element);
    console.log(`${element} is added. ${include}`);
  } else console.log(`This element is already exist. ${include}`);
};

checkElement("green");

let colorsA = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];

const getRandomColor = (values) => {
  let color = values[Math.floor(Math.random() * values.length)];
  // document.body.style.backgroundColor = color;
};

console.log(getRandomColor(colorsA));

/* ----------------------------------- */
//*            Nested Arrays           */
/* ----------------------------------- */
//? Elements in an Array can be any type. So it can also include Arrays

const nested = ["1", 2, true, [4, 5, 6], [2]];
console.log(nested.length); // 5

/* ----------------------------------- */
//*        Looping Over Arrays         */
/* ----------------------------------- */
//? There ara many ways of looping or iterating over arrays.

//! For Loop

const qwe = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i].toUpperCase()); /* RED
  BLUE
  PURPLE
  WHITE
  ORANGE
  WHITE
  */
}

//! While Loop

let i = 0;

while (i < qwe.length) {
  if (qwe[i] == "Red") {
    i++;
    continue;
  }
  console.log(qwe[i].toLowerCase());
  i++;
}

//! For-in (empty itemlari atlar)

const abc = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];

for (let i in abc) {
  console.log(abc[i]); /* Red
  Yellow
  Green
  Blue
  Pink
  Green
  */
}

//! For-of (ES6) - Empty itemlari atlamaz!

const items = ["Red", "Yellow", , "Green", "Blue", "Pink", "Green"];

for (let item of items) {
  console.log(item); /* Red
  Yellow
  undefined
  Green
  Blue
  Pink
  Green
  */
}

//! Example - negative positive number filter

const nums = [100, 20, -5, 9, -3, -87, 30];

const negative = [];
const positive = [];

for (let num of nums) {
  if (num < 0) negative.push(num);
  else positive.push(num);
}

console.log(negative); // [ -5, -3, -87 ]
console.log(positive); // [ 100, 20, 9, 30 ]

//! Example2 - join an array without using join() method

const cars = ["bmw", "mercedes", "audi", "volvo"];
let result = "";
for (let car of cars) {
  result += car;
}

console.log(result); // bmwmercedesaudivolvo

/* ----------------------------------- */
//*          array.foreach()           */
/* ----------------------------------- */
//? The forEach() method of Array instances executes a provided function once for each array element.
//! break ve continue cant be used here!
//! cant be used in string, just with arrays
//! cant display empty items , jump over!
//! doesnt mutate the original array

const prices = [100, 200, 300, 400, 50, 70];

prices.forEach((a) => console.log(a)); /* 100
200
300
400
50
70
*/

let sum = 0;

prices.forEach((a) => (sum += a));
console.log(sum / prices.length); // 186.66666666666666

prices.forEach((price, i, arr) => {
  arr[i] = price * 2;
});

console.log(prices); // [ 200, 400, 600, 800, 100, 140 ]

prices.forEach((price) => {
  // if(price == 200) break // error
  // if(price == 200) continue // error
  console.log(price);
});

/* ----------------------------------- */
//*            array.map()             */
/* ----------------------------------- */
//? break ve continue cant be used here
//? returns new array / default = doesnt mutates the original array

const cars3 = [];
const newCars3 = cars3.map((car) => car.toUpperCase());
console.log(newCars3); // []

const cars2 = ["bmw", "mercedes", "audi", "volvo"];

const newCars = cars2.map((car) => car.toUpperCase());

console.log(newCars); // [ 'BMW', 'MERCEDES', 'AUDI', 'VOLVO' ]
console.log(cars2); // [ 'bmw', 'mercedes', 'audi', 'volvo' ]

//! Example

const prices4 = [100, 200, 300, 400, 50, 70];
// +%20 => >= 300 / +%50 => < 300

prices4.map((price, i, arr) => {
  if (price < 300) arr[i] *= 1.5;
  else arr[i] *= 1.2;
});

console.log(prices4); // [ 150, 300, 360, 480, 75, 105 ]

//! Example2

const prices5 = [100, 200, 300, 400, 50, 70];

const dolar = 30.2;
const euro = 33.6;

prices5.map((price, i, arr) => {
  arr[i] = `${arr[i]} = ${(price / dolar).toFixed(2)} $ | ${(
    price / euro
  ).toFixed(2)} €`;
});

console.log(prices5);
/*
[
  '100 = 3.31 $ | 2.98 €',
  '200 = 6.62 $ | 5.95 €',
  '300 = 9.93 $ | 8.93 €',
  '400 = 13.25 $ | 11.90 €',
  '50 = 1.66 $ | 1.49 €',
  '70 = 2.32 $ | 2.08 €'
]
*/

//& Alternative 2

const prices6 = [100, 200, 300, 400, 50, 70];

const dolarArr = prices6.map((price) => +(price / dolar).toFixed(2));

const euroArr = prices6.map((price) => +(price / euro).toFixed(2));

console.log(dolarArr); // [ 3.31, 6.62, 9.93, 13.25, 1.66, 2.32 ]
console.log(euroArr); // [ 2.98, 5.95, 8.93, 11.9, 1.49, 2.08 ]

/* ----------------------------------- */
//*          array.filter()            */
/* ----------------------------------- */
//? to filter the specific items in an array with new array
//? doesnt mutate the original array

const prices7 = [100, 200, 300, 400, 50, 70];

const newArr7 = prices7.filter((price) => price < 250);

console.log(newArr7); // [ 100, 200, 50, 70 ]

//! Example

const words = ["apple", "banana", "grape", "orange", "kiwi"];

const newWords = words.filter((word) => word.length === 5);

console.log(newWords); // [ 'apple', 'grape' ]

//! Example2

const names = [
  "John",
  "Jane",
  "Robert",
  "Susan",
  "Steven",
  "Katherine",
  "Martin",
  "Melissa",
  "Brian",
  "Karen",
];

const newNames = names.filter((name) => name[name.length - 1] === "n");

console.log(newNames); // [ 'John', 'Susan', 'Steven', 'Martin', 'Brian', 'Karen' ]

//& Alternative

const newNames2 = names.filter((name) => name.endsWith("n"));
console.log(newNames2); // [ 'John', 'Susan', 'Steven', 'Martin', 'Brian', 'Karen' ]

//! Example3

const prices8 = [100, 200, 300, 800, 600, 70];

const newArr8 = prices8.filter((price) => price > 300).map((inc) => inc * 1.2);

console.log(newArr8); // [ 960, 720 ]

//! Example4

const newNamesReverse = names
  .filter((name) => name[name.length - 1] === "n")
  .map((name) => name.split("").reverse().join(""));

console.log(newNamesReverse); // [ 'nhoJ', 'nasuS', 'nevetS', 'nitraM', 'nairB', 'neraK' ]

/* ----------------------------------- */
//*          array.reduce()            */
/* ----------------------------------- */
//? returns one output
//? doesnt mutate the original array
//? doesnt return Array, returns value (string, number, ...)

const salaries = [30000, 17000, 20000, 7500, 10000];

console.log(salaries.reduce((sum, salary) => sum + salary, 0)); // 84500
console.log(salaries.reduce((sum, salary) => sum + salary, 15500)); // 100000 == take 15500 as default salary
console.log(salaries); // [ 30000, 17000, 20000, 7500, 10000 ]

//! Example

const words2 = ["Hello", " ", "World", "!"];

const newWords2 = words2.reduce((newWord, current) => newWord + current, "");
console.log(newWords2); // Hello World!

//! Example2

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = nums2
  .filter((num) => num % 2 == 0) // even numbers are filtered = 2,4,6,8,10
  .map((num) => num * 2) // even numbers are multiplied by 2 = 4,8,12,16,20
  .reduce((sum, num) => sum + num, 0); // sum multiplied even numbers = 60

console.log(newNums); // 60
