//* METHOD-1 (Only using JS)
//*------------------------------------------------

//^ Example-1 (onmouseover, onmouseout)

const js = document.querySelector("#js");
const body = document.querySelector("#body");

js.onmouseover = () => {
  body.style.backgroundColor = "pink";
};

js.onmouseover = () => {
  body.style.backgroundColor = "red";
};
