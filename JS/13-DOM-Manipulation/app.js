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

//? after type something get input from boxes (onkeyup)

const textInput = document.querySelector(".textbox");
const checkInput = document.querySelector(".checkbox");

textInput.onkeyup = () => {
  checkInput.checked
    ? (textInput.value = textInput.value.toUpperCase())
    : (textInput.value = textInput.value.toLowerCase());
};

//^ adding h1 element and to index.html (Programming Languages) - long way

// create h1 tag
const title2 = document.createElement("h1");
{
  /* <h1></h1> */
}

// add class name into h1
title2.className = "title2";
{
  /* <h1 class="title2"></h1> */
}

// add text (Programming Languages)
const text = document.createTextNode("Programming Languages");

// make text appendChild of h1
title2.appendChild(text);
{
  /* <h1 class="title2">Programming Languages</h1> */
}

// make h1(text) lastChild of inputdiv
const inputdiv = document.querySelector(".input-div");
inputdiv.appendChild(title2);

// place our h1 after the div called input-div
inputdiv.after(title2);
//!!  "append" metodu ile seçtiğimiz Html etiketi bitmeden önceki son kısma ekleme yapabiliriz (<div>merhaba -buraya-  </div>).  "prepend" metodu ile seçtiğimiz Html etiketi başladıktan sonraki ilk kısma ekleme yapabiliriz  (<div> -buraya-  merhaba   </div>).  "after" metodu ile ile seçtiğimiz Html etiketi bittikten sonraki ilk kısma ekleme yapabiliriz (<div> merhaba </div>  -buraya-). before ile de etiketin önüne ekleyebiliriz

//^ adding h1 element and to index.html (Programming Languages) - short way(backtick = ``)

// const inputdiv = document.querySelector(".input-div");
// inputdiv.innerHTML = inputdiv.innerHTML+h1

// inputdiv.innerHTML += `<h1 class="shortTitle text-primary">Programming Languages</h1>`; // input div in icinde

//! kisayol ile daha once event yapilmis bir tag in icerisine ekleme yaparsak eventler dogru calismayabilir. Bu yuzden yeri olmayan bir etiketi kisayol ile eklemek istiyorsak, html de onun icin bos bir div acmakta fayda var

// document.querySelector(".must").innerHTML +=  `<h1 class="shortTitle text-primary">Programming Languages</h1>`;

//^ languages inputuna girilen değerleri, ul ye eklemek

const inputLang = document.querySelector("#inputs");
const inputList = document.querySelector(".list");

document.querySelector(".add").onclick = () => {
  //^  long way
  // yeni girilen satiri saklamak icin bir li olusturduk.
  // const newLi = document.createElement("li");

  // yeni li icin textnode olusturduk
  // const newText = document.createTextNode(inputLang.value);

  // olusturdugumuz texnode'u yeni li'ye bagladik.
  // newLi.appendChild(newText);

  // yeni eklenen satiri var olan listeye (ul) baglayalim.
  // inputList.appendChild(newLi);

  //^ short way
  if (inputLang.value != "") {
    inputList.innerHTML += `<li>${inputLang.value}</li>`;
  } else alert("Please enter a programming language!");

  // eklendikten sonra input u resetle
  inputLang.value = "";
};

document.querySelector(".delete").onclick = () => {
  inputList.removeChild(inputList.lastElementChild);
};

inputLang.onkeydown = (e) => {
  if (e.key == "Enter") document.querySelector(".add").onclick();
  if (e.key == "Delete") document.querySelector(".delete").onclick();
};
