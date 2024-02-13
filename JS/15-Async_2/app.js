const defaultImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg";

const getNews = async () => {
  const API_KEY = "1a1a999e0d7240a6bd2dead87bcca78e";
  const fetchAPI = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );

  const data = await fetchAPI.json();

  console.log(data.articles); // for testing !!!
  renderNews(data.articles);
};

getNews();

const renderNews = (news) => {
  news.forEach((item) => {
    const { urlToImage } = item; //~ destructuring
    document.querySelector("#news").innerHTML += `
            <img src="${urlToImage ? urlToImage : defaultImage}"/>
        `;
  });
};
