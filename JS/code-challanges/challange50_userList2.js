//! Below is the JSON structure that contains information about a company's customers. Accordingly, answer the following questions.

const customerList = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

//! 1- The customer wants to display his information regularly. For this purpose, we have to list their names, addresses and telephone numbers in a new list and display them regularly.

//! Expected Result:

//! [
//!     {name: 'LEANNE GRAHAM', adress: 'Gwenborough city, Kulas Light street Apt. 556 suite', phone: '1-770-736-8031 x56442'}
//!     {name: 'ERVIN HOWELL', adress: 'Wisokyburgh city, Victor Plains street Suite 879 suite', phone: '010-692-6593 x09125'}
//!     {name: 'CLEMENTINE BAUCH', adress: 'McKenziehaven city, Douglas Extension street Suite 847 suite', phone: '1-463-123-4447'}
//! ]

const sortedCustomerList = (arr) => {
  return arr.map((list) => ({
    name: list.name,
    address: list.address,
  }));
};

console.log(sortedCustomerList(customerList));

/* -------------------------------------------------------------------------- */
//! 2- He will call some of his customers and conduct a satisfaction survey.
//! If the initial letter starts with e, the call will be made on Monday,
//! If the initial letter starts with C, the call will be made on Wednesday.

//! Expected Result:

//! Monday Calls
//! {name: 'ERVIN HOWELL', phone: '010-692-6593 x09125'}

//! Wednesday Calls
//! {name: 'CLEMENTINE BAUCH', phone: '1-463-123-4447'}
//! {name: 'CHELSEY DIETRICH', phone: '(254)954-1289'}
//! {name: 'CLEMENTINA DUBUQUE', phone: '024-648-3804'}

const callOrder = (list) => {
  const monday = list
    .filter(({ name }) => name.toLowerCase().startsWith("e"))
    .map(({ name, phone }) => ({ name: name.toUpperCase(), phone }));

  const wednesday = list
    .filter(({ name }) => name.toLowerCase().startsWith("c"))
    .map(({ name, phone }) => ({ name: name.toUpperCase(), phone }));

  let result = `Monday Calls\n${JSON.stringify(
    monday
  )}\nWednesday Calls\n${JSON.stringify(wednesday)}`;

  return result;
};

console.log(callOrder(customerList));

/* -------------------------------------------------------------------------- */
//! 3- Put the id, name and email addresses in a separate list and write a function that will add a message about new electronic devices to those whose id numbers are odd numbers, and add a message about new small home appliances to those whose id numbers are even numbers.

//! Expected Result:

//! {name: 'Leanne Graham', phone: 'Sincere@april.biz', mesaj: 'You should definitely try our newly released XXX electronic device'}
//! {name: 'Ervin Howell', phone: 'Shanna@melissa.tv', mesaj: ' Yeni Çıkan kahve yapma makinamızı deneyin.Memnun kalacaksınız'}

const newCustomerList = customerList.map((list) => ({
  id: list.id,
  name: list.name,
  email: list.email,
  message:
    list.id % 2 === 0
      ? "Try our newly released coffee making machine. You will be satisfied."
      : "You should definitely try our newly released XXX electronic device",
}));

console.log(newCustomerList);
