let showList = []; // to catch the data comes from fetch

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((resp) => resp.json())
  .then((data) => {
    showList = data;
    console.log(showList);
    showScreen(showList.meals);
  })
  .catch((err) => console.log(err));

const showScreen = (data) => {
  const foodDiv = document.querySelector(".food");
  foodDiv.innerHTML = "";
  data.forEach((meal) => {
    foodDiv.innerHTML += `
        <div class="col-md-3 m-1 text-center m-auto mt-5 d-flex flex-column align-items-center justify-content-center">
            <p class="fw-bold border-bottom w-75 text-center">${meal.strMeal}</p>
            <img src=${meal.strMealThumb} style="width:250px; border-radius:10px"/>
        </div>
        `;
  });
};

// when click on country flag, get that country's meals
document.querySelectorAll("img").forEach(
  (country) =>
    (country.onclick = () => {
      fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country.id}`
      )
        .then((res) => res.json())
        .then((data) => showScreen(data.meals));
    })
);

// oninput
document.querySelector("#search").oninput = (e) => {
  let newData = showList.meals.filter((a) => {
    a.strMeal.toLowerCase().includes(e.target.value.toLowerCase());
  });
  console.log(newData);
  showScreen(newData);
};

// //!arama inputuna yazdığım harfleri içeren yemekleri ekrana bastır (oninput=kullanıcı input elemanına her veri girişinde çalışmaktadır)

// //? e.target.value=> inputa her veri girişindeki değerleri alabilmek için kullanılır, mesela onclick te sadece e.value kullanılır, çünkü inputla işimiz bitince onclick ile inputtaki veriyi topla git

// document.querySelector("#ara").oninput=(e)=>{
// //   document.querySelector("#ara").value;
// // console.log(e.target.value);
// let veri=  showList.meals.filter((a)=>a.strMeal.toLowerCase().includes(e.target.value.toLowerCase()))

// showScreen(veri)
// }
