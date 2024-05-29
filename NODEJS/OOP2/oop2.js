"use strict";
/* ---------------------------------------------

    OOP - Object Oriented Programing

--------------------------------------------- */

/* ---------------------------------------------
    CLASSES
--------------------------------------------- */
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.

// Class Declaration: Class Tanımlama
// class PascalNamedClass { ... }

// Class Expression:
// const PascalNamedClass = class { ... }

/*
const Car = class {
    propertyName = 'value' // attribute, field

    constructor (parametre1, parametre2 = 'default-value'){
        this.parametre1 = parametre1
        this.parametre2 = parametre2
    }

    methodName1() {
        return this
    }
}
*/
//? INSTANCE: Class'tan üretilen nesnelere denir.
/*
const InstanceName = new Car('test')
console.log(InstanceName);
console.log(InstanceName.methodName1());
*/

//? constructor() method

/*
class Car {
    isRunning = false

    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('runEngine >> ','Start Engine')
        //return this.isRunning
    }
}
*/

//const Ford = new Car('Ford', 'Mustang', 1990)

//console.log(Ford);
// Car { isRunning: false, brand: 'Ford', model: 'Mustang', year: 1990 }
//console.log('Ford >> ',Ford.isRunning); // false
//const isRunning = Ford.runEngine()
//console.log('isRunning >>', isRunning);
//console.log('Ford >> ',Ford.isRunning); // true

/*
const Mazda = new Car('Mazda', '323', 2000)

console.log('Mazda >> ',Mazda.isRunning); // false
Mazda.runEngine()
console.log('is running >> ', Mazda.isRunning); // true
*/

/* --------------------------------------------- */
//? INHERITANCE: MirasAlma. Başka bir class'ın tüm özelliklerini devralma (parent-child ilişkisi kurma)
//* THIS = Child (current) Class
//* SUPER = Parent Class

/*
class Vehicle {
    vehicleActive = false

    constructor(vehicleType = true) {
        this.vehicleActive = vehicleType
    }

    sayHello() {
        console.log('Hello')
    }
}

class Car extends Vehicle {
    isRunning = false

    constructor(brand, model, year, vehicleType = true) {
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
    }
}
*/
/*
const Mercedes = new Car('Mercedes', 'M300', 1995)
console.log('all >> ',Mercedes);
console.log(Mercedes.vehicleActive);
Mercedes.sayHello()
*/
/*
class Accessory extends Car {
    constructor(accessoryName, brand, model, year, vehicleType = true) {
        super(brand, model, year, vehicleType)
        this.accessoryName = accessoryName
    }
}

const fordClimate = new Accessory('Bosh Climate', 'Ford', 'Mustang', 1993, false)
//console.log('all >>', fordClimate);
*/

/* --------------------------------------------- */
//? Polymorphism: Miras aldığımız sınıfın özellik/methodlarını yeniden yazabilme.
//? Override: Üst metodla aynı isim ve yapıda yeni bir metod yazma. (ezme / iptal etme / önceliğini alma)
//? Overload: Üst metodla aynı isimde ama farklı yapıda (farklı adet/tip) yeni method oluşturma. (aynı anda ikisi de aktif) (JS desteklemez)

/*
class Vehicle {
    vehicleActive = false

    constructor(vehicleType) {
        this.vehicleActive = vehicleType
    }

    getDetails() {
        console.log('Vehicle/getDetails started.')
        return this
    }

    getType(vehicleType) {
        //console.log('Vehicle type: ' + this.vehicleType)
        console.log(`Vehicle type: ${this.vehicleType}`)
    }
}

class Car extends Vehicle {
    isRunning = false
    
    constructor(brand, model, year, vehicleType = true) {
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Engine Started')
        return this.isRunning
    }

    getDetails() {
        console.log('Car/getDetails started');
    }

    getType(vehicleType, brand){
        console.log(`Vehicle/Brand type ${vehicleType} ${brand}`);
    }
}

const Mercedes = new Car('Mercedes', 'M300', 2010, 'Truck')

//console.log(Mercedes);

console.log(Mercedes.vehicleActive);

Mercedes.getDetails()

Mercedes.getType('Car')
Mercedes.getType('Car', 'Ford')
*/

/* --------------------------------------------- */
//? PUBLIC/PRIVATE
//? JS PUBLIC: Genel erişime açık.
//? JS PRIVATE: Sadece tanımlı olduğu class içinde erişim var.
//? JS PROTECTED: Sadece Tanımlı olduğu class ve Inherit edilen child-class erişebilir. (Genel erişime açık ama lütfen dokunmayın.)
/*
class Vehicle {
    vehicleActive = false // PUBLIC
    #privateProperty = 'no-access' // PRIVATE
    _protectedProperty = 'limited-access' // PROTECTED

    constructor(vehicleType) {
        this.vehicleActive = vehicleType
        console.log('Vehicle >> ',this.#privateProperty)
        console.log('Vehicle >>' ,this._protectedProperty);
    }
}

class Car extends Vehicle {
    isRunning = false

    constructor(brand, model, year, vehicleType = 'Car') {
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine () {
        this.isRunning = true
        console.log('Start engine')
        console.log('privateProperty >> ', this.vehicleActive);
    }
}

const Mercedes = new Car('Mercedes', 'M300', 2010, 'Truck')
//Mercedes.runEngine()

const vehicle = new Vehicle('Car')
console.log(vehicle.vehicleActive);
console.log(vehicle.privateProperty);
*/

/* --------------------------------------------- */

//? GETTER & SETTER METHODS: Görevi veri getirme (getter) ve veri güncelleme (setter) olan metodlardır.
//? "STATIC" KEYWORD: Class'dan direkt erişim. (Instance erişemez.)

class Car {
  isRunning = false;
  #price;
  #color;

  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  runEngine() {
    this.isRunning = true;
    console.log("runEngine >> ", "Engine Started");
    return this.isRunning;
  }

  // Variable Setter
  set setPrice(price) {
    this.#price = price;
    console.log("price has been updated");
  }

  get getPrice() {
    return `price is ${this.#price}`;
  }

  // Method Setter
  setColor(color) {
    this.#color = color;
    console.log("color has been updated");
  }

  getColor() {
    return `color is ${this.#color}`;
  }
}

const Mercedes = new Car("Mercedes", "CLA", 2020);

// console.log(Mercedes);

// Mercedes.setPrice = 500; // degisken gibi kullanilir. Direkt set edilir
// Mercedes.setColor("white"); // method gibi kullanilir parametre verilir. Direkt set edilmez

// console.log(Mercedes.getPrice);
// console.log(Mercedes.getColor());

// ======================================

class KdvCalculator {
  static staticProp = "value";
  #kdv;

  constructor(price) {
    this.price = price;
  }

  set setKdv(kdvRate) {
    this.#kdv = kdvRate;
  }

  getKdvAmount() {
    return this.#kdv * this.price;
  }

  getTotalAmount() {
    return this.#kdv * this.price + this.price;
  }
}

const payment = new KdvCalculator(100);

payment.setKdv = 0.18;

// console.log("price:", payment.price);
// console.log("kdvAmount:", payment.getKdvAmount());
// console.log("TotalAmount:", payment.getTotalAmount());

// Bir degere direkt olarak class tan erismek icin kullanilir. Instance tan erisilemez.
// console.log(payment.staticProp); // undefined
// console.log(KdvCalculator.staticProp); // value

/* --------------------------------------------- */
//? ABSTRACTION: Soyutlama/Modelleme (Class ile obje üretebilme. Aynı amaç için kullanılan değişken ve methodların bir class içinde yazıyor olması)
//? ENCAPCULLATION: Kapsülleme/Ayrıştırma (Kodların gizliliği, private değişkenlere erişilemiyor olması ve birbirinden bağımsız çalışmaları.)
/* ------------------------------------------------------- */
