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
