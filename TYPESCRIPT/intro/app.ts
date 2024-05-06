// console.log('Hello  TS')

// De-08 ile typescript dersindeyiz

/* let b = 3
let c  = 2
let d= 0

const a = (b,c)=> b*c */

/* let e: string = 'Hello'
let f : boolean = true
let g: number = 1


f= false


let h = 123
h = 12
h = 'Selam' */

//Arrays

/* let num : number[]= [1,2,'Hi']

num.push('Merhaba')
num.push(false)
num.push(3)

console.log(num)


let str: string [] = [] // boş array tanımlama


str.push(1)
str.push(false)
str.push('a')


let num2: Array<number> = [1,2,3,4] //generic tipte array tanımlama

let num3: readonly number[] = [5,6,7,8] // Dizimizi salt okunur yapar

num3.pop()
num3.push(9)

console.log(num3) */

//Tuples

/* let myTuple: [number, boolean, string]

myTuple = [1,false, 'Hello']

console.log(myTuple)

let myTuple2: [number, boolean, string]

myTuple2 = [1, false] //eksik eleman mevcut

//Array of tuples

let myTuple3 : [number,string][]

myTuple3 = [[1,'Mark'],[2,'Harvey'],['Helen','3']]

myTuple3.push([4,'Ashley'])

myTuple3.push(false) */

//! enum

/* const enum Role {
    User,
    Admin,
    DbAdmin = Admin * 3 ,
    Tester 
    

}

let currentUser: Role = Role.Admin

console.log(currentUser)

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

const rsp: StatusCodes = StatusCodes.NotFound

enum Tshirts  {
    Small = 'S',
    Medium = 'M',
    Large = 'L'
}


enum Jackets  {
    Small = 'S',
    Medium = 46,
    Large = Medium + 2, 
    XLarge 
}

//? örnek

enum PrintMedia {
    Newspaper = 1,
    Newsletter = getPrintMediaCode('newsletter'),
    Magazine = Newsletter * 3,
    Book = 10
}

function getPrintMediaCode(mediaName: string): number {
    if (mediaName === 'newsletter') {
        return 5;
    }
}

PrintMedia.Newsletter; // returns 5
PrintMedia.Magazine; // returns 15

// enum elemanlarına erişim yöntemleri
enum PrintMedia2 {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
  }
  
  PrintMedia2.Magazine;   // returns  3
  PrintMedia2["Magazine"];// returns  3
  PrintMedia2[3];         // returns  Magazine */

//! Any Type

/* 
let h : any = 1
h = 'Hello'
h = false

let k:boolean = h */

//! Unknown Type

/* let j:unknown = 5

let l : any = j
let m : number = j
let n : number = j as number
let o : number = j */

//! void Type

/* function warnUser(): void {
    console.log("3");
    return 3
   }
 
let t = warnUser() + 2  */

//! never Type

/* function error(message: string): never{
    throw new Error(message);
}

let output = error('New Error')
console.log('Hello world')  //return nothing - printing nothing  */

//! Union Type
// iki veya daha fazla tipi birleştirmek için kullanılır
let aa: number | string = "a";

aa = 5;

aa = false; //hata

//! Type Aliases

type Mark = number | string;

let bb: Mark = 1;
bb = "Hello";
bb = false;

//! String Literals

type Car = "BMW" | "Audi" | 44;

let car1: Car = "BMW";
let car2: Car = "Audi";
let car3: Car = "Mercedes";
let car4: Car = 44;
