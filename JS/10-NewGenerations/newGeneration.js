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
