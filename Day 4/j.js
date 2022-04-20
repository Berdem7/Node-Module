let arr = [1, 2, 3, 4, 5, 6, 7];
let arr1 = [2, 8, 12, 6];

let arrIndex = [];
for (i = 0; i < arr.length; i++) {
  if (arr1.includes(arr[i])) {
    console.log(arr[i] + " baina");
    arrIndex.push(i);
  } else {
    console.log(arr[i] + " baihgui");
  }
}

console.log(arrIndex);
