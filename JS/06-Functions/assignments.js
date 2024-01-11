//! Q1 - ucgenAlan

const ucgenAlan = function (taban, yukseklik) {
  return (taban * yukseklik) / 2;
};

console.log(ucgenAlan(4, 6)); // 12

//! Q2 - kareAl / kupAl / usAl

const kareAl = (num) => num * num;
const kupAl = (num) => num * num * num;
const usAl = (num) => num ** num;

const program = function (islem, num1) {
  let result;
  if (islem == "kareAl") result = kareAl(num1);
  else if (islem == "kupAl") result = kupAl(num1);
  else if (islem == "usAl") result = usAl(num1);

  return result;
};

console.log(program("kareAl", 3)); // 9
console.log(program("kupAl", 5)); // 125
console.log(program("usAl", 4)); // 256

//! Q3 - artikYil

const artikYil = function (year) {
  let result;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
    result = "artık yıl";
  else result = "artık yıl degil";

  return `${year}: ${result}`;
};

console.log(artikYil(+prompt("Please enter a year:")));
