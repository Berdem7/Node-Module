function DivisibleBy3or7(number) {
  if (number % 3 == 0 || number % 7 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(DivisibleBy3or7(239));
console.log(DivisibleBy3or7(63));
console.log(DivisibleBy3or7(192984));
console.log(DivisibleBy3or7(545));
