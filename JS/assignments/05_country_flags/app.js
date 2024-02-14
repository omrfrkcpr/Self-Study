// Tüm ülkelerin bulunduğu orijinal veri kümesi
let allCountries = [];

// Tüm ülkeleri alıp ekrana basan fonksiyon
const getCountry = async () => {
  const fetchAPI = await fetch("https://restcountries.com/v3.1/all");
  allCountries = await fetchAPI.json();
  printScreen(allCountries);
};

// input kutusundaki değer her değiştiğinde çalışacak fonksiyon
document.getElementById("search").addEventListener("input", (event) => {
  const inputValue = event.target.value.toLowerCase();
  const filteredCountries = filterCountries(inputValue);
  printScreen(filteredCountries);
});

// Tüm ülkeleri filtreleyen fonksiyon
const filterCountries = (inputValue) => {
  return allCountries.filter((country) => {
    const countryName = country.name.common.toLowerCase();
    return countryName.includes(inputValue);
  });
};

// input kutusuna girilen değeri al ve ülkeleri filtreleyerek ekrana yazdır
const printScreen = (countries) => {
  const article = document.querySelector("article");
  article.innerHTML = ""; // Makale içeriğini temizle
  countries.forEach((country) => {
    article.innerHTML += `
      <div class="col-sm-12 col-md-6 col-lg-4  d-flex justify-content-center align-items-center">
          <div class="card text-start shadow-lg bg-light my-4" style="width: 18rem;">
              <img src="${
                country.flags.svg
              }" class="card-img-top" style="width:100%; height:150px; object-fit:cover" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${country.name.common}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="${
                    country.maps?.googleMaps || "#"
                  }" class="btn btn-primary">Location</a>
              </div>
              <ul class="list-group list-group-flush d-flex justify-content-center align-items-between">
                  <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i><span class="ms-1">${
                    country.capital || "N/A"
                  }</span></li>
                  <li class="list-group-item"><i class="fas fa-lg fa-comments"></i><span class="ms-1">${
                    country.languages
                      ? Object.values(country.languages)[0]
                      : "N/A"
                  }</span></li>
                  <li class="list-group-item"><i class="fas fa-solid fa-user"></i><span class="ms-1">${country.population.toLocaleString(
                    "tr-TR"
                  )}</span></li>
                  <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i><span class="ms-1">${
                    country.currencies
                      ? `${Object.values(country.currencies)[0].name} (${
                          Object.values(country.currencies)[0].symbol
                        })`
                      : "N/A"
                  }</span></li>
              </ul>
          </div>
      </div> 
    `;
  });

  // Eğer filtre sonucunda hiç ülke bulunamazsa, bunu kullanıcıya bildir
  if (article.innerHTML === "") {
    article.innerHTML = "<p>No countries found.</p>";
  }
};

// Sayfa yüklendiğinde tüm ülkeleri alıp ekrana bas
getCountry();
