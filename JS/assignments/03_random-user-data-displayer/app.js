const getUser = async () => {
  const fetchAPI = await fetch(`https://randomuser.me/api/`);
  const data = await fetchAPI.json();

  console.log(data.results); // test data array
  renderUser(data.results);
};

getUser();

const renderUser = (users) => {
  users.forEach((user) => {
    const { name, email, phone, picture } = user; //~ destructure user
    const { title, first, last } = name;
    document.querySelector(".users").innerHTML += `
    <img src="${picture.large}" class="border border-black w-100" />
    <h3 class="mt-2">${title}. ${first} ${last}</h3>
    <p class="mb-0">${email}</p>
    <p class="mb-0">${phone}</p>
    `;
  });
};

document.querySelector(".btn").onclick = () => {
  document.querySelector(".users").innerHTML = ``;
  getUser();
};
