//! When printing from 1 to 10, write the code that gives a gold medal to 1, a silver medal to 2, and a bronze medal to 3. (with using for-loop inkl. if-else and switch statements )

// If-Else

for (var i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log("Gold medal");
  } else if (i == 2) {
    console.log("Silver medal");
  } else if (i == 3) {
    console.log("Bronze medal");
  } else {
    //this block will run if no condition matches
    console.log(i);
  }
}

// Switch Case

for (var i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold medal");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break;
    default:
      //this block will run if no condition matches
      console.log(i);
  }
}
