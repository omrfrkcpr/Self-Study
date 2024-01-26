let radius = document.getElementById("radius");
let area = document.querySelector(".area");
let circumference = document.querySelector(".circumference");

function whichType() {
  let radios = document.querySelectorAll(".type");
  let radio;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radio = radios[i].id;
      break;
    }
  }
  return radio;
}

// by clicking on the calculate button
document.querySelector(".calculate").onclick = () => {
  area.innerHTML = `${(Math.PI * radius.value ** 2).toFixed(
    1
  )} ${whichType()}²`;
  circumference.innerHTML = `${(Math.PI * radius.value * 2).toFixed(
    1
  )} ${whichType()}`;
};
