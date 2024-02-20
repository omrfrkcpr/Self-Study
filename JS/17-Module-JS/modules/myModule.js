console.log("hello from myModule.js");

//* export inline item
export const working_hour = 40;

export function sum(n1, n2) {
  return n1 + n2;
}

let counter = 5;

const inc = (piece) => (counter += piece);

const dec = (piece) => {
  counter -= piece;
  console.log(counter);
};

const myName = "Omer";

//* export seperately
export { inc, dec, myName };

//* export all file: Each file can have only 1 export default
export default function goodBye() {
  console.log("good bye JS");
}
