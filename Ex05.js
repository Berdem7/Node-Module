function Ex5(number1, number2) {
  let total = number1 + number2;
  if (50 <= total && total <= 80) {
    return 65;
  } else {
    return 80;
  }
}

console.log(Ex5(30, 20));
console.log(Ex5(90, 80));
