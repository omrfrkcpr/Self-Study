let image = document.querySelector(".img");
let tone1 = document.querySelector(".tone1");

//? by clicking on Call button
document.querySelector(".call").onclick = () => {
  image.src = "./img/img.gif"; // convert img to gif (telephone)
  tone1.play();
  tone1.volume = 0.1;
};

//? by clicking on Connect button
document.querySelector(".connect").onclick = () => {
  image.src = "./img/telbagla.gif"; // change img
  tone1.pause(); // pause the tone1
};

//? by clicking on Talk button
document.querySelector(".talk").onclick = () => {
  image.src = "./img/telefon.gif";
  tone1.pause();
};

//? onmouseover to img
// image.onmouseover = () => {} // 1.method

image.addEventListener("mouseover", () => {
  image.src = "./img/aslan2.jpeg";
  document.querySelector(".tone2").play();
  tone1.pause();
});

//? onmouseout to img
image.addEventListener("mouseout", () => {
  image.src = "./img/aslan1.jpeg";
  document.querySelector(".tone2").pause();
});
