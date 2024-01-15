const getRandomColor = () => {
  function values() {
    return Math.floor(Math.random() * 255);
  }
  let v1 = values();
  let v2 = values();
  let v3 = values();

  console.log(`rgb(${v1}, ${v2}, ${v3})`);
};

getRandomColor();
