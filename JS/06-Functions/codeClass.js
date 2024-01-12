//! *******************************************************//
//!                     Typeof Function
//! *******************************************************//

function aa() {
  //console.log("Hello")
  // return "Hello";
  return "2";
}

console.log(typeof aa());

console.log(aa() + 3);

//! *******************************************************//
//!                  Default Parameter
//! *******************************************************//

let user = "Mark";

bb(user); // Hello Mark

function bb(name = "User") {
  console.log("Hello", name);
}

bb(); // Hello User

//! *******************************************************//
//!                         Scope
//! *******************************************************//

let myNum = 3;

square(myNum); // 9
function square(num) {
  // myNum = num ** 2; // globali de etkiler
  console.log(num ** 2);
  let myNum = num ** 2; // sadece locali etkiler
  console.log("In Function: ", myNum);
}

console.log(myNum); // 3

//! *******************************************************//
//!                  Function Expression
//! *******************************************************//

const aTopla = function (num1, num2) {
  //return num1 + num2;
  if (num1 == 3) return num1 + num2; // first true is executed
  if (num2 == 2) return 1; // ignored
  return 5; // ignored
};

console.log(aTopla(3, 5)); // 3+5 = 8

//! *******************************************************//
//!                  Function Arrow
//! *******************************************************//
//? Arrow, daha kisa ve kolay function tanimlatir. Return yazmamiza gerek yok, tek satir bir kod blogu icin { } koymamiza gerek yok

let carp = (num1, num2) => {
  console.log(num1 * num2);
};

carp(aTopla(3, 5), 8); // 8*8 = 64
carp(aTopla(3, 5), aTopla(3, 7)); // 8*10 = 80

//--------------------------------------------------//

let num3 = 8;

let divide = (num3) => {
  console.log(num3 / 2);
};

divide(num3); // 4

//------------------------------------------------------//

const ucgenTipi = (a, b, c) => {
  if (a == b && b == c) {
    console.log("Eskenar Ucgen");
  } else if (a == b || b == c || a == c) {
    console.log("Ikizkenar Ucgen");
  } else console.log("Cesitkenar Ucgen");
};

ucgenTipi(3, 4, 5); // Cesitkenar Ucgen
ucgenTipi(4, 4, 4); // Eskenar Ucgen
ucgenTipi(4, 4, 5); // Ikizkenar Ucgen
ucgenTipi(5, 4, 4); // Ikizkenar Ucgen

//-----------------------------------------------------//

const minuteToSeconds = (minute) => minute * 60;
const hourToSeconds = (hour) => hour * 60 * 60;

const convertToSeconds = (second, minute, hour) => {
  console.log(
    `${hour} hours ${minute} minutes ${second} seconds : ${
      second + minuteToSeconds(minute) + hourToSeconds(hour)
    } seconds`
  );
};

convertToSeconds(27, 48, 5);

//& Alternative

const convertToSeconds2 = (hour, minute, second) =>
  console.log(hour * 3600 + minute * 60 + second);

convertToSeconds2(5, 48, 27);
