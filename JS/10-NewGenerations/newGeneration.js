// ====================================================== //
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)   //
// ====================================================== //

const car = {
  title: "BMW",
  model: 1990,
  engine: 1.6,
};

//^ 1. Method : Dot Notation or Bracket
console.log(car.engine); // 1.6
console.log(car["engine"]); // 1.6

//^ 2. Method : Destructuring
const { title, model } = car;
console.log(title); // BMW
console.log(model); // 1990
// console.log(engine); // ReferenceError: engine is not defined

const cars = {
  car1: {
    marka: "BMW",
    model: 1990,
    renk: "red",
  },
  car2: {
    marka: "MERCEDES",
    model: 1980,
    renk: "white",
  },
  car3: {
    marka: "AUDI",
    model: 2000,
    renk: "gray",
  },
};

console.log(cars.car2.marka); // MERCEDES
const { car1, car2, car3 } = cars;
console.log(car2.marka); // MERCEDES

const { marka, renk } = car1;
const { marka: marka2, renk: renk2 } = car2;

console.log(marka); // BMW
console.log(renk); // red
console.log(renk2); // white
console.log(marka2); // MERCEDES

//? car1 için marka model ismini kullandık, o yüzden car2 de yeni isimler verdik. ilk object i oluştururken key leri (marka,model..) farklı verebilirdik, bu sayede yeni isim vermekle uğraşmazdık, ama o zamanda for in ile dönerken her bir marka yı yazdır diyemezdik, çünkü car2 nin içinde mesela marka2 yazıyor olacağından, onu tanıyamazdı

//* object- loop over in object ******//

for (let i in cars) {
  console.log(i);
  console.log(cars[i].marka); /*
  car1
  BMW
  car2
  MERCEDES
  car3
  AUDI
  */
}

//* ornek: Array-Object loop over -DEST

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

//^ 1. Method: Dot Notation

people.forEach((person) => {
  console.log(person.name); /*
  Mustafa
  Halo
  Mehmet
  Ozkul
  Baser
  */
});

//^ 2. Method: Array Destructuring

people.forEach((person) => {
  const { name, surname, job } = person;
  console.log(surname); /*
  Gertrud
  Müller
  Rosenberg
  Gutenberg
  Shaffer
  */
});

//^ 3. Method: ForEach Parameter

people.forEach(({ name, surname, job }) => {
  console.log(job); /*
  developer
  tester
  team lead
  developer
  tester
  */
});

//^ 4. Method: Func with Destructuring in Object

const control = (data) => {
  const { name, color, star } = data;
  console.log(name); // GS FB
};

control({ name: "GS", color: "red-yellow", star: 4 });
control({ name: "FB", color: "yellow-blue", star: 3 });

const control2 = ({ name, color, star }) => {
  console.log(name); // BJK
  console.log(star); // 2
};

control2({ name: "BJK", color: "black-white", star: 2 });

// ====================================================== //
//*     NEW GENERATION OPERATORS: SPREAD OR REST (...)    //
// ====================================================== //
//? ------------------------------------------------------
//?  REST =>>[...name]=diziden (ya da object den) alınmayan, geri kalanları yeni bir (diziyse) diziye,(object se)object e atıyor
//? ------------------------------------------------------

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//*REST OBJECT***************************************

const personel = {
  pName: "Johny",
  surname: "DEEP",
  job: "actor",
  age: 55,
  salary: 30000,
};

const { pName, surname, ...rest } = personel;
console.log(pName); // Johny
console.log(surname); // DEEP
console.log(rest); // { job: 'actor', age: 55, salary: 30000 }

//^ Copy Object (rest)

// Define new variable (dependent each other)
const twinPersonel = personel;

// Copy from the original object with rest operator (independent)
const { ...personel2 } = personel;
console.log(personel2);
/*
{
  pName: 'Johny',
  surname: 'DEEP',
  job: 'actor',
  age: 55,
  salary: 30000
}
*/

//***** orjinal diziyle aynı şartlarda bir kopya oluşturduk, bu yüzden kopyada yapılan değişiklik orjinal diziyi de etkiledi */
twinPersonel.job = "father";
console.log(personel.job); // father
console.log(personel2.job); // actor
console.log(twinPersonel.job); // father

//*** orjinal diziden farklı bir kopya oluşturduğumuz için, bu kopyaya yapılan değişiklik orjinal diziyi bozmaz*/
personel2.age = 56;
console.log(personel.age); // 55
console.log(personel2.age); // 56
console.log(twinPersonel.age); // 55

//^ Copy Array (rest)

const autos = ["anadol", "renault", "tofas", "ferrari"];
const twinAutos = autos; // new array define
const [...autos2] = autos; // copy of array

autos2.push("bmw");
console.log(autos); // [ 'anadol', 'renault', 'tofas', 'ferrari' ]
console.log(autos2); //* [ 'anadol', 'renault', 'tofas', 'ferrari', 'bmw' ]
console.log(twinAutos); // [ 'anadol', 'renault', 'tofas', 'ferrari' ]

twinAutos.unshift("mercedes");
console.log(autos); // [ 'mercedes', 'anadol', 'renault', 'tofas', 'ferrari' ]
console.log(autos2); //* [ 'anadol', 'renault', 'tofas', 'ferrari', 'bmw' ]
console.log(twinAutos); // [ 'mercedes', 'anadol', 'renault', 'tofas', 'ferrari' ]

//^ Function Argument to Array (rest)

//! Example-1

//? Wrong Way
const sum = (x, y) => x + y;
console.log(sum(1, 2, 3, 4, 5, 6)); // 3 (just first 2 index)

//? Right Way
const sum2 = (...x) => console.log(x.reduce((acc, num) => acc + num, 0)); // 21
sum2(1, 2, 3, 4, 5, 6);

//! Example-2

const show = (name, surname, ...info) => {
  console.log(info); // [ 'developer', 'mom', 'teacher', 'computer science' ]
  console.log(`${name} ${surname} is a ${info.join(" and ")}`); // asiye yildiz is a developer and mom and teacher and computer science
};

show("asiye", "yildiz", "developer", "mom", "teacher", "computer science");

//? ------------------------------------------------------
//?  SPREAD==>> parçala (yapısını boz)-> istenilen diziye ekle,içinde gezin vs
//? ------------------------------------------------------

//* Ornek people (object li ) dizisinden yaşları değişmiş olarak yeni bir object li dizi oluşturalım

const menschen = [
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

const neuMenschen = menschen.map((mensch) => ({
  name: mensch.name,
  surname: mensch.surname,
  job: mensch.job,
  age: mensch.age + 5,
}));
console.log(neuMenschen);
/*
[
  { name: 'Mustafa', surname: 'Gertrud', job: 'developer', age: 35 },
  { name: 'Halo', surname: 'Müller', job: 'tester', age: 40 },
  { name: 'Mehmet', surname: 'Rosenberg', job: 'team lead', age: 45 },
  { name: 'Ozkul', surname: 'Gutenberg', job: 'developer', age: 31 },
  { name: 'Baser', surname: 'Shaffer', job: 'tester', age: 29 }
]
*/

//^ Copy Object (spread)

//* SPREAD  obje de değişmesini istemediğimiz elemanlar için ... kullanıyoruz ÖNEMLİ***!!!!!

//! Example-1

const neuMensch = menschen.map((mensch) => ({
  ...mensch,
  age: mensch.age + 6,
}));
console.log(neuMensch);
/*
[
  { name: 'Mustafa', surname: 'Gertrud', job: 'developer', age: 36 },
  { name: 'Halo', surname: 'Müller', job: 'tester', age: 41 },
  { name: 'Mehmet', surname: 'Rosenberg', job: 'team lead', age: 46 },
  { name: 'Ozkul', surname: 'Gutenberg', job: 'developer', age: 32 },
  { name: 'Baser', surname: 'Shaffer', job: 'tester', age: 30 }
]
*/

//! Example-2

const fahrzeuge = ["Aircraft", "Helicopter", "Bicycle"];
const modelle = ["Trucks", "Bus", "Car", "SUV"];

console.log(fahrzeuge, modelle); // [ 'Aircraft', 'Helicopter', 'Bicycle' ] [ 'Trucks', 'Bus', 'Car', 'SUV' ]
console.log(fahrzeuge.concat(modelle)); // [ 'Aircraft', 'Helicopter', 'Bicycle', 'Trucks', 'Bus', 'Car', 'SUV' ]
console.log([...fahrzeuge, "Tram", ...modelle, "Hatchback"]); /* [
    'Aircraft',  'Helicopter',
    'Bicycle',   'Tram',
    'Trucks',    'Bus',
    'Car',       'SUV',
    'Hatchback'
] */

//! Example-3

// ******************* job:father olsun ve location:USA ekleyelim (spread ile yapalım) sonucu yeni bir diziye atalım

const personell = {
  pName: "Johny",
  surname: "DEEP",
  job: "actor",
  age: 55,
  salary: 30000,
};

const personell2 = { ...personell, job: "father", location: "USA" };
console.log(personell2);
/*
{
  pName: 'Johny',
  surname: 'DEEP',
  job: 'father',
  age: 55,
  salary: 30000,
  location: 'USA'
}
*/
