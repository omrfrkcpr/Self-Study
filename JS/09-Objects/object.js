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

/* ---------------------------------------------------------- */
//*        JSON - Javascript Script Object Notation           */
/* ---------------------------------------------------------- */
//? employeeList.forEach((m)=> console.log(m.name)) // Map, forEach, filter, reduce are not used on objects. Since JSon is an object in an array, array methods map, filter, reduce, forEach can be used.

//? Different data types can be hosted with JSON
//? Independent of languages.
//? uses key-value pairs to represent objects. This allows data to be better organized and correlated.
//? JSON is fast in terms of data processing. Therefore, it is widely used in web applications and services.

let employeesList2 = [
  {
    name1: "Abdulkadir",
    lastName: "BAKI",
    datOfBirth: 1980,
    salary: 20000,
    job: "developer",
  },
  {
    name2: "Elif",
    lastName: "AKALIN",
    datOfBirth: 1990,
    salary: 18000,
    job: "tester",
  },
  {
    name3: "Esra",
    lastName: "BILGIN",
    datOfBirth: 1985,
    salary: 15000,
    job: "devops",
  },
];

//* add an element to json

employeesList2.push({
  name4: "Nida",
  lastName: "GULER",
  datOfBirth: "1995",
  salary: 1995,
  job: "devops",
});

console.log(employeesList2.length); // 4
employeesList2.forEach((t) => console.log(t.lastName)); /* BAKI
AKALIN
BILGIN
GULER */

employeesList2.map((a) => Object.values(a)).forEach((a) => console.log(a));
/*
[ 'Abdulkadir', 'BAKI', 1980, 20000, 'developer' ]
[ 'Elif', 'AKALIN', 1990, 18000, 'tester' ]
[ 'Esra', 'BILGIN', 1985, 15000, 'devops' ]
[ 'Nida', 'GULER', '1995', 1995, 'devops' ]
*/

employeesList2
  .map((a) => Object.values(a)[0].toUpperCase())
  .forEach((a) => console.log(a));
/*
ABDULKADIR
ELIF
ESRA
NIDA
*/

/* ---------------------------------------------------------- */
//*                     OBJECT ITERATION                      */
/* ---------------------------------------------------------- */
//? Since the keys do not have a specific order (index), the object search will have a more consistent search performance if we put them in an array. Also looping through arrays is faster than looping through keys, so if you plan to operate on all elements it might be wise to put them in an array.

const people = [
  {
    name: "Mustafa",
    surname: "Gertrud",
    job: "developer",
    age: 30,
  },
  {
    name: "Halo",
    surname: "Müller",
    job: "tester",
    age: 35,
  },
  {
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },
  {
    name: "Ozkul",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },

  {
    name: "Baser",
    surname: "Shaffer",
    job: "tester",
    age: 24,
  },
];

//! Example-1 : display persons' jobs in people array

people.forEach((person) => console.log(person.job)); /* developer
tester
team lead
developer
tester */

//! Example-2 : increase every each of persons' ages and assign it to a new array

const newAges = people.map((person) => person.age + 1);
console.log(newAges); // [ 31, 36, 41, 27, 25 ]
console.table(people);
/*
┌─────────┬───────────┬─────────────┬─────────────┬─────┐
│ (index) │   name    │   surname   │     job     │ age │
├─────────┼───────────┼─────────────┼─────────────┼─────┤
│    0    │ 'Mustafa' │  'Gertrud'  │ 'developer' │ 30  │
│    1    │  'Halo'   │  'Müller'   │  'tester'   │ 35  │
│    2    │ 'Mehmet'  │ 'Rosenberg' │ 'team lead' │ 40  │
│    3    │  'Ozkul'  │ 'Gutenberg' │ 'developer' │ 26  │
│    4    │  'Baser'  │  'Shaffer'  │  'tester'   │ 24  │
└─────────┴───────────┴─────────────┴─────────────┴─────┘
*/

//! Example-3 : increase every each of persons' ages in people array permanently!

people.map((person, index, array) => (array[index].age = person.age += 1)); //* change ages permanently
console.log(people[0].age); // 31
console.log(people[1].age); // 36
console.log(people[2].age); // 41
console.log(people[3].age); // 27
console.log(people[4].age); // 25

//! Example-4 : create a new object with new keys array from the people (object) array, with their ages changed by 5 and salary added.

const newPeople = people.map((person) => ({
  name1: person.name,
  surname1: person.surname,
  job1: person.job,
  age1: person.age + 5,
  salary1: 30000,
}));

console.table(newPeople);
/*
┌─────────┬───────────┬─────────────┬─────────────┬──────┬─────────┐
│ (index) │   name1   │  surname1   │    job1     │ age1 │ salary1 │
├─────────┼───────────┼─────────────┼─────────────┼──────┼─────────┤
│    0    │ 'Mustafa' │  'Gertrud'  │ 'developer' │  36  │  30000  │
│    1    │  'Halo'   │  'Müller'   │  'tester'   │  41  │  30000  │
│    2    │ 'Mehmet'  │ 'Rosenberg' │ 'team lead' │  46  │  30000  │
│    3    │  'Ozkul'  │ 'Gutenberg' │ 'developer' │  32  │  30000  │
│    4    │  'Baser'  │  'Shaffer'  │  'tester'   │  30  │  30000  │
└─────────┴───────────┴─────────────┴─────────────┴──────┴─────────┘
*/

//! Example-5 : Change the name of each element in capital letters, double their age, add the word senior in front of their jobs and assign them to a new array.

const updatePeople = people.map((person) => ({
  name: person.name.startsWith("M") ? person.name.toUpperCase() : person.name,
  surname: person.surname,
  job: "Senior " + person.job,
  age: person.age * 2,
}));

console.table(updatePeople);

//! Example-6 : Find the average age of the people in the people (object)

console.log(
  people.reduce((sum, person) => sum + person.age, 0) / people.length
);
console.log(people);

//! Example-7 : Save the names and ages of developers as a new object

const devNameAge = people
  .filter((person) => person.job === "developer")
  .map((person) => ({
    name: person.name,
    age: person.age,
  }));

console.log(devNameAge); // [ { name: 'Mustafa', age: 31 }, { name: 'Ozkul', age: 27 } ]

//! Example-8 : List the names of people over the age of 33

const oldPeople = people
  .filter((person) => person.age > 33)
  .map((person) => ({
    name: person.name,
  }));

console.log(oldPeople); // [ { name: 'Halo' }, { name: 'Mehmet' } ]
