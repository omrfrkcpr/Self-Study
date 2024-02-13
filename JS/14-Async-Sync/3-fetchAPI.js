//* ===========================================================
//*                3- FETCH API
//*=============================================================

//? It is a simple interface used to fetch data from external sources.
//? It allows us to make network requests and manage responses.
//? It is one of the most used Asynchronous operation examples in the Javascript environment.
//? The fetch() function takes a mandatory parameter showing the path to the source from which you want to fetch data and returns a Promise showing the answer to this request.

//& chain structure then()
// fetch("https://api.github.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//^ HTTP Status Codes
// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)

const getData = () => {
  fetch("https://api.github.com/users")
    .then((res) => {
      if (!res.ok) {
        //! Throw can stop the code, if we throw en error. If we wanna continue to our codes even if we get an error, the we have to use codes on the other pages
        throw new Error("URL Error"); // GET https://api.github.com/user 401 (Unauthorized)
      }

      return res.json();
    })
    .then((data) => showScreen(data));
};

const showScreen = (data) => {
  data.forEach((person) => {
    document.querySelector(".users").innerHTML += `
        <h1 class="mt-4">NAME: <span class="text-danger">${person.login}</span><h1>
        <img src=${person.avatar_url} width="50%"></img>
        <h3>NODE-ID: ${person.node_id}</h3>
        `;
  });
};

document.querySelector("button").onclick = () => {
  getData();
};
