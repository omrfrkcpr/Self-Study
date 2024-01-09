// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

//?  Print 10x Hi

for (let i = 1; i <= 10; i++) {
  console.log(i, "Hello");
}

//? Sum of the numbers from 1 to N

const N = +prompt("Enter a number");
let sum = 0;
for (let x = 1; x <= N; x++) {
  sum += x;
}
console.log(sum);
