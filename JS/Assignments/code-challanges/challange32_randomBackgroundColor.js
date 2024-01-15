//! Write a function that changes the body background color with random RGB values every time it is called.

const getRandomColor = () => {
  function values() {
    return Math.floor(Math.random() * 256);
  }
  let r = values();
  let g = values();
  let b = values();

  return `rgb(${r}, ${g}, ${b})`;
};

document.body.style.backgroundColor = getRandomColor();
