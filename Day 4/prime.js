function isPrime(number) {
  let prime = "Prime Number";
  for (i = 2; i < number; i++) {
    if (number % i == 0) {
      prime = "Not Prime Number";
      break;
    }
  }
  return prime;
}

console.log(isPrime(29));
