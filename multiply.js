// function multiply(a, b) {
//   return (a * b);
// }

// 2x2 == 2+2
// 2x3 == 2+2+2
// 2x4 == 2+2+2+2

function multiply(a , b) {
  let res=0
  for(let i = 0; i < b; i += 1){
    res += a
    }
    return res
  }
// console.log(multiply(2, 3));
export { multiply };
