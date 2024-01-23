//! --------------------------------------------------------- */
//!                         OBJECTS                           */
//! --------------------------------------------------------- */

// Diziler : index numaraları ile erişim sağlanıyor. 0'dan başlayarak artan bir sıralama.

//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ama daha karmaşık veriler için Object(nesne) kullanılır
const dizi = [1, 2, 3, 4, 5, 6];

//! Object contains key-value (Property-value) values. This specifies the properties of that object.

//! Herhangi bir veriye erişim için property (key) adı kullanılır.

/* ---------------------------------------------------------- */
//*                 Object Creating Methods                   */
/* ---------------------------------------------------------- */

//^ 1. Object() => from its class

const car = new Object(); // empthy object

car.brand = "BMW";
car.model = 1990;
car.price = 10000;
console.log(car); // { brand: 'BMW', model: 1990, price: 10000 }
console.log(car.model); // 1990

//^ 2. with using Constructor method
//? Methods that create a separate copy for each object may increase memory usage

function PersonalList(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
}

const personel1 = new PersonalList(1001, "Ali", 10000);
const personel2 = new PersonalList(1002, "Osman", 20000);

console.log(personel1); // PersonalList { id: 1001, name: 'Ali', salary: 10000 }
console.log(personel2); // PersonalList { id: 1002, name: 'Osman', salary: 20000 }

//^ 3. OBJECT LITERAL (most preferred)

let personalStructure = {}; // empthy object

let personal = {
  name: "Fatma",
  lastName: "KARA",
  birthyear: 1995,
  isMarried: true,
  experiences: ["tester", "devops", "data analyst"],
  address: { city: "izmir", street: "bornova", no: 5 },
  age: function () {
    return new Date().getFullYear() - this.birthyear;
  },
  hello: () => {
    console.log(`Hi. My name is ${personal.name} ${personal.lastName}`); // arrow function doesnt support "this" keyword (undefined)
  },
};

personal.hello(); // Hi. My name is Fatma KARA
console.log(personal.name); // Fatma
console.log(personal.lastName); // KARA
console.log(personal.age()); // 29
console.log(personal.experiences[0]); // tester
console.log(personal.address.city); // izmir

personal.phone = "555-34-34";
console.log(personal); /* {
    name: 'Fatma',
    lastName: 'KARA',
    birthyear: 1995,
    isMarried: true,
    experiences: [ 'tester', 'devops', 'data analyst' ],
    address: { city: 'izmir', street: 'bornova', no: 5 },
    age: [Function: age],
    hello: [Function: hello],
    phone: '555-34-34'
  }
*/

/* ---------------------------------------------------------- */
//*                      Object Methods                       */
/* ---------------------------------------------------------- */

//^ Nested Objects

let employeesList = {
  person1: {
    name: "Abdulkadir",
    lastName: "BAKI",
    datOfBirth: 1980,
    salary: 20000,
    job: "developer",
  },
  person2: {
    name: "Elif",
    lastName: "AKALIN",
    datOfBirth: 1990,
    salary: 18000,
    job: "tester",
  },
  person3: {
    name: "Esra",
    lastName: "BILGIN",
    datOfBirth: 1985,
    salary: 15000,
    job: "devops",
  },
};

console.log(employeesList.person3.salary); // 15000
console.log(employeesList.person2.name); // Elif
console.log(employeesList["person1"].job); // developer

//==============================================================//

//^ for of = is used in sequential arrays, but for-of is not used in objects because they have a more complex structure. thats why we use object built-in methods

let numbersAndLetters = ["a", 4, 6, 7, "C"];
for (const i of numbersAndLetters) {
  console.log(i); /* a
  4
  6
  7
  C */
}
/*
for (const i of employeesList) {
    console.log(i); //* Uncaught TypeError: employeeList is not iterable!
}
*/

for (const key of Object.keys(employeesList)) {
  console.log(key); /* person1
  person2
  person3 */
}

for (const value of Object.values(employeesList)) {
  console.log(Object.values(value)[0]); /* Abdulkadir
  Elif
  Esra */
}

//^ for in = it can be used in objects.

let numbersAndLetters2 = ["a", 4, 6, 7, "C"];
for (const i in numbersAndLetters2) {
  console.log(i); /* 0
  1
  2
  3
  4 */
}

for (const i in employeesList) {
  console.log("with using for-in method :", i, employeesList[i].job);
  /*
  with using for in method : person1 developer
  with using for in method : person2 tester
  with using for in method : person3 devops
  */
}

//=============================================================//

//^ Built-In Methods in Object
//^ Object.keys() / Object.values() / Object.entries()
//? converts object to array (now we can loop over in our object)

console.log(Object.keys(employeesList)); // [ 'person1', 'person2', 'person3' ]
console.log(Object.values(employeesList)); /* [
    {
      name: 'Abdulkadir',
      lastName: 'BAKI',
      datOfBirth: 1980,
      salary: 20000,
      job: 'developer'
    },
    {
      name: 'Elif',
      lastName: 'AKALIN',
      datOfBirth: 1990,
      salary: 18000,
      job: 'tester'
    },
    {
      name: 'Esra',
      lastName: 'BILGIN',
      datOfBirth: 1985,
      salary: 15000,
      job: 'devops'
    }
  ] */
