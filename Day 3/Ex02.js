function FtoC(f) {
  return ((f - 32) / 9) * 5;
}

function CtoF(c) {
  return (c / 5) * 9 + 32;
}

console.log(FtoC(35));
console.log(CtoF(35));
