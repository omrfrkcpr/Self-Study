fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((resp) => resp.json())
  .then((data) => showScreen(data.meals))
  .catch((err) => console.log(err));

const showScreen = (data) => {
  const foodDiv = document.querySelector(".food");

  data.forEach((meal) => {
    foodDiv.innerHTML += `
        <div class="col-md-3 m-1 text-center m-auto mt-5 d-flex flex-column align-items-center justify-content-center">
            <p class="fw-bold border-bottom w-75 text-center">${meal.strMeal}</p>
            <img src=${meal.strMealThumb} style="width:250px; border-radius:10px"/>
        </div>
        `;
  });
};
