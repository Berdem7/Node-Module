function add2ToArray([a, b, c]) {
  let arr = [a, b, c].map((e) => {
    return e + 2;
  });
  return arr;
}

console.log(add2ToArray([1, 2, 3]));
