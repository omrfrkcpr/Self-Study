//! Write a function that convert the hour and minute to second

const minuteToSeconds = (minute) => minute * 60;
const hourToSeconds = (hour) => hour * 60 * 60;

const convertToSeconds = (second, minute, hour) => {
  console.log(
    `${hour} hours ${minute} minutes ${second} seconds : ${
      second + minuteToSeconds(minute) + hourToSeconds(hour)
    } seconds`
  );
};

convertToSeconds(27, 48, 5);

//& Alternative

const convertToSeconds2 = (hour, minute, second) =>
  console.log(hour * 3600 + minute * 60 + second);

convertToSeconds2(5, 48, 27);
