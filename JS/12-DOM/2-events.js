//* METHOD-1 (Only using JS)
//*------------------------------------------------

//^ Example-1 (onmouseover, onmouseout)

const js = document.querySelector("#js");
const badi = document.querySelector("#badi");

js.onmouseover = () => {
  badi.style.backgroundColor = "pink";
};

js.onmouseover = () => {
  badi.style.backgroundColor = "red";
};

//^ Example-2 (onclick-ondoubleclick (ondblclick))

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

img1.onclick = () => {
  img1.src = "img/logo2.png";
  img2.src = "img/js_logo.png";
}; // change the position of two imgs

img2.onclick = () => {
  img1.src = "img/js_logo.png";
  img2.src = "img/logo2.png";
}; // return original

img2.ondblclick = () => {
  img2.src = "./img/bir.jpeg";
}; // change the img by double click

const btn = document.querySelector("#btn");

btn.onclick = () => {
  badi.style.backgroundImage = "linear-gradient(to right, purple, gray)";
  document.querySelector("#par1").style.fontSize = "3rem";
  btn.textContent = "Clicked!";
};
