//! Write a function that convert the hour and minute to second

const convertToSeconds = (hour, minute, second) =>
  console.log(hour * 3600 + minute * 60 + second);

convertToSeconds(5, 48, 27);

//& Alternative

const minuteToSeconds = (minute) => minute * 60;
const hourToSeconds = (hour) => hour * 60 * 60;

const convertToSeconds2 = (second, minute, hour) => {
  console.log(
    `${hour} hours ${minute} minutes ${second} seconds : ${
      second + minuteToSeconds(minute) + hourToSeconds(hour)
    } seconds`
  );
};

convertToSeconds2(27, 48, 5);
