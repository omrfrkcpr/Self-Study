//* ======================================================================
//*                          2- Promises
//* =======================================================================

//? Promise is an object structure that indicates whether an asynchronous operation has finished with success or failure, and also represents the result data when it finishes successfully.

//? SYNTAX
//?----------
//* 1- First, a new promise object is created with the new Promise() constructor,
//* 2- The constructor is given an executor function that allows the actual work to be done.
//* 3- 2 arguments are passed to the Executor function: resolve and reject functions.
//* 4- The resolve function is executed when the promise ends successfully, and reject is executed when the promise ends unsuccessfully.

new Promise(
  /* executor */
  function (resolve, reject) {
    //    Code here
  }
);

//? A Promise may contain the following state(s):
//* pending: initial state, not fulfilled or rejected, pending (wait)
//* fulfilled: state indicating that the operation was completed successfully.
//* rejected: state indicating that the operation was completed unsuccessfully

//! With a promise, values can be completed or canceled for some reason (error).These situations can be caught with then() and catch() methods. then() and catch() methods freeze promises. They can be used as a chain.

const person = { name: "nida", surname: "celik" };

new Promise((resolve, reject) => {
  if (true) resolve(person);
  else reject(new Error("promise unsuccesfully"));
})
  .then((rest) => console.log(rest))
  .catch((err) => console.log(err)); // { name: 'nida', surname: 'celik' }

new Promise((resolve, reject) => {
  if (false) resolve(person);
  else reject(new Error("promise unsuccesfully"));
})
  .then((rest) => console.log(rest))
  .catch((err) => console.log(err)); // Error: promise unsuccesfully

//?----------------------------------------------------
//* 1- XMLHttpRequest (Old method, Example: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise preferred
//! 3- Fetch API (simple way of promise),
//! 4- ASYNC-AWAIT (An off-chain makeover of the Fetch API)
