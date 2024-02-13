//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await was added to the Javascript language with ECMAScript 2017.
//? In fact, it is a syntax simplified version of the Promise structure.
//?! In this context, a syntactic sugar analogy can be made.

//* To make a function async, the async keyword is added before the function keyword.

//* Waiting for the response to the request made with the await keyword in an async function is ensured.

//* It actually makes it possible to write Asynchronous code by writing code that resembles synchronous logic in terms of sequence.

//* Await causes any promise-based function to be stopped on the line it is placed in front of. Once the request is fulfilled and the result values are returned, the code continues to run.
//! JavaScript try keyword is used to test the codes in the code block at run time.

//! The JavaScript catch keyword is used to print errors that occur as a result of runtime errors.

//! The JavaScript throw keyword allows for custom error generation.

//! The JavaScript finally keyword is used to print codes that will run whether an error occurs or not (in all cases).

const defaultImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg";

const getData = async () => {
  try {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=girls");

    //^ error handling
    if (!response.ok) {
      throw new Error(`URL Error ${response.status}`);
    }

    const data = await response.json();

    showScreen(data);
  } catch (error) {
    console.log(error);
    console.log("thanks to try-catch the code continue to execute");
  }
};

const showScreen = (data) => {
  data.forEach((item) => {
    document.querySelector(".users").innerHTML += `
          <h1 class="mt-4"><span class="text-danger">${
            item.show.name
          }</span><h1>
          <img src=${item.show.image?.medium || defaultImage} width="50%"></img>
          <h3>${item.show.genres}</h3>
          `;
  });
};

document.querySelector("button").onclick = () => {
  getData();
};
