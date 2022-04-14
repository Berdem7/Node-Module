function FindMax(a, b, c) {
  let max = a;
  let arr = [a, b, c];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(FindMax(4, 5, 3));
console.log(FindMax(4, 5, 4));
console.log(FindMax(4, 4, 4));
console.log(FindMax(-1, -2, -3));
