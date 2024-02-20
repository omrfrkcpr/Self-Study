console.log("hello from index.js");

import { working_hour, sum, inc, dec, myName } from "./myModule.js";
import goodBye from "./myModule.js";

goodBye(); // good bye JS

console.log(working_hour); // 40
console.log(sum(3, 5)); // 8
console.log(inc(5)); // 10
console.log(dec(5)); // 5
console.log(myName); // Omer

// ----------2.Methode----------
// import goodBye, { working_hour, sum, inc, dec, myName } from "./myModule.js";
