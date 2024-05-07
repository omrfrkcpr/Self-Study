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
/* let aa : number | string  = 'a'

aa = 5

aa = false //hata
 */

//! Type Aliases

/* type Mark = number | string


let bb : Mark = 1
bb = 'Hello'
bb = false */


//! String Literals

/* type Car = 'BMW' | 'Audi' | 44

let car1:Car = "BMW"
let car2:Car = "Audi"
let car3:Car = "Mercedes"
let car4:Car = 44
 */

//! Objects

/* const car: {
    make: string,
    model: string,
    readonly year: number,
    age(year:number):void,
    sunroof: boolean
} = {
    make: "Toyota",
    model: "Yaris",
    year: 2009,
    age(year:number):void{
        console.log(`Age is ${year - 2009}`)
    },
    sunroof: true
}

console.log(car.year)

car.color = 'green' // does not exist

car.year = 2010 //readonly

car.age(2024) */

//! Intersection

/* type Book = {
    book_id : number;
    book_name: string;
}

type Author = {
    Author_id:number;
    Author_name: string
}

type Sales = Book & Author;


let sales1: Sales ={
    book_id: 1234,
    book_name: "Lord of the Rings",
    Author_id: 1892,
    Author_name: "J.R.R. Toliken"
} */

//! Type Assertions


/* let someString: unknown = 'Hello World'

console.log(someString.length)
console.log((someString as string).length)
console.log((<string>someString).length)

let str1:string = someString as string 

console.log(str1.length)


let score: unknown = '300'

console.log((score as string).split(''))

let num1:number = <number>score */

//! Functions

/* function selamla (mesaj:string, isim:string):string{
    return `${mesaj} ${isim}!`
}

selamla('Günaydın', 'De08')
selamla('Günaydın', 88)
selamla('Günaydın')
selamla('Günaydın', 'De08','nasılsınız')

function selamla2 (mesaj:string, isim:string):void{
    console.log(`${mesaj} ${isim}!`) 
}


let num2:number = 0


function increase():void{
    num2++
}



increase()
increase()
increase()

console.log(num2)


function selamla2 (mesaj:string, isim?:string):string{

    if(!isim) isim = 'user'
    return `${mesaj} ${isim}!`
}



console.log(selamla2('merhaba', 'Mark'))
console.log(selamla2('merhaba'))
 */

//! Function overloading

/* function add (a:string, b:number):string;
function add (a:string, b:string):string;
function add (a:number, b:number):number;
function add (a:any, b:any):any{
    return a + b
}

console.log(add(2,3))
console.log(add('Hello ', 'World'))
console.log(add('Hello ', 2024))
 */
//! Type narrowing

/* function sum (a: number | string, b: number | string): void{


    if(typeof a === 'number'){
        a.toExponential()
    }else{
        a.length
    }
}
 */

//!Rest parameters

/* function selamla3 (mesaj: string, ...isimler: string[]):string{
    console.log(isimler)
    return `${mesaj+ ' '+isimler.join(",")+ '!'}`
}

console.log(selamla3('Hello'))
console.log(selamla3('Hello', 'Mark'))
console.log(selamla3('Hello', 'Mark', 'Harvey', 'Ashley'))
 */