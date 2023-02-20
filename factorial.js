//Albert Ashaba - Namala Pamela

export function factorial(n) {
  let res = 1;
  if (n < 0 || n % 1 !== 0) {
    return 'Please enter an integer';
  } else if (n >= 0) {
    for (let i = 1; i < n + 1; i += 1) {
      res *= i;
    }
    return res;
  } else {
    return 'Please enter an integer';
  }
}

// Using recursion

// export default function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else if (n > 1) {
//       return n * factorial(n - 1);
//     } else {
//       return 'N must be a positive integer';
//     }
//   }