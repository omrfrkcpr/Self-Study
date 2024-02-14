let showList = []; //!boş bir array aç. alttaki arama olayında datayı görebilmek için global e boş bir array açıp, fetch ile gelen data yı bu boş array e attık

//!ilk ekrandaki resimleri api den çekiyoruz (search meal by name)

//www.themealdb.com/
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((resp) => resp.json())
  .then((data) => {
    showList = data;

    showScreen(showList.meals);
  })
  .catch((err) => console.log(err));

//!EKRANA BASTIRMA
function showScreen(data) {
  const mealsDiv = document.querySelector(".food");
  //!ekranı temizle, hangi dizi geldiyse o basılabilsin
  mealsDiv.innerHTML = "";

  data.forEach((a) => {
    mealsDiv.innerHTML += `
 <div class="col-md-3 m-1 text-center m-auto mt-5 d-flex flex-column align-items-center justify-content-center">
 <p class="fw-bold border-bottom w-75 text-center">${a.strMeal}</p>
 <img src=${a.strMealThumb} style="width:250px; border-radius:10px"/>
</div>

`;
  });
}

//! bayraklara tıklanınca o bayrağın yemekleri gelsin
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

//!arama inputuna yazdığım harfleri içeren yemekleri ekrana bastır (oninput=kullanıcı input elemanına her veri girişinde çalışmaktadır)

//? e.target.value=> inputa her veri girişindeki değerleri alabilmek için kullanılır, mesela onclick te sadece e.value kullanılır, çünkü inputla işimiz bitince onclick ile inputtaki veriyi topla git

document.querySelector("#ara").oninput = (e) => {
  //   document.querySelector("#ara").value;
  // console.log(e.target.value);
  let veri = showList.meals.filter((a) =>
    a.strMeal.toLowerCase().includes(e.target.value.toLowerCase())
  );

  showScreen(veri);
};
