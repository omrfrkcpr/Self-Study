// ? ==========================================================
// ?                    FUNCTIONS
// ? ==========================================================

// !-----------------------------------------------------------
// !3.METHOD  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

//! In funct expression and arrow func methods, the function must be defined first and then called. Otherwise you will get an error.
//! In function we should not enter { }. Otherwise we will get an error.

//* Example1: multiple of 3?
//**********************************************************/

const control = (num) =>
  num % 3 == 0 ? `${num} is multiple of 3` : `${num} is not multiple of 3`;

console.log(control(25));

//* Example2: Menu function
// ! ok(arrow) fonksiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmalıyız
//****************************

const menu = () => {
  console.log("===========================");
  console.log("     JAVASCRİPT DERSİ      ");
  console.log("===========================");
};

menu();

//* Example3: volume of cylinder
//**********************************************************/

const volumeCalculate = (r, h) => Math.PI * r * r * h;

console.log(volumeCalculate(3, 5).toFixed(2));

//* Example4: Girilen n. terimdeki  Fibonacci sayisını  yazdiran fonksiyonu dongu ile kodlayiniz. Ayrica bu n. terime kadarki sayilari toplayin.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, 34, ...

const fibonacci = (n) => {
  let fiboL = 1;
  let fiboR = 1;
  let newFibo = 0;
  let sum = 0;
  for (let i = 1; i < n - 1; i++) {
    newFibo = fiboL + fiboR;
    sum += newFibo;
    fiboL = fiboR;
    fiboR = newFibo;
  }
  return `${n}.term of Fibonacci: ${newFibo} / The summary of ${n} terms: ${
    sum + 2
  }`;
};

console.log(fibonacci(8));
