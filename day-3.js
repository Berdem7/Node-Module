//  sides of triangle : 5, 6, 7

function SqOfTriangle(a, b, c) {
  let s = (a + b + c) / 2;
  
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }
    
    console.log(`The area of the triangle is ${SqOfTriangle(5, 6, 7)}`);
    