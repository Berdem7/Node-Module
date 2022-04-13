// console.log(Date.now());

let date = new Date();
// console.log(date);

let day = date.getDay();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
hour = hour > 12 ? hour - 12 + " PM" : hour + " AM";

// console.log(time);

let weekArr = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

console.log(`Today is: ${weekArr[day - 1]}`);
console.log(`Current time is: ${hour} : ${minute} : ${second}`);
