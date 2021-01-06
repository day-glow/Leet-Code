/*
Implement pow(x, n), which calculates x raised to the power n (i.e. xn).

Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:
Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
*/

//brute force for loop (only useful for small n ints, otherwise way to slow)
//recursion
//binary search? based on the number of recursive calls and multiplers


//brute force for loop (only useful for small n ints, otherwise way to slow)
const myPow = (x, n) => {

  let N = n;
  if (N < 0) {
    x = 1 / x;
    N = -N;
  }
  let curr = 1;
  for (let i = 0; i < N; i++) {
    curr = curr * x;
  }
  return curr;
};

//fast power algo iterative, optimized from brute force
//like binary
//O(logn)
//O(1)
const myPow = (x, n) => {
  let N = n;
  if (N < 0) {
    x = (1 / x);
    N = -N;
  }

  let ans = 1;
  let currProd = x;
  for (let i = N; i > 0; i = Math.floor(i / 2)) {
    if ((i % 2) === 1) {
      ans = ans * currProd;
    }
    currProd = currProd * currProd;
  }

  return ans;
};

//recursive
const myPow = (x, n) => {
  if (n === 1) return x;
  if (n === 0) return 1;

  if (n < 0) {
    x = (1 / x);
    n = -n;
  }

  if (n > 1) {
    if (n % 2 === 0) {
      return myPow(x * x, n / 2);
    } else {
      return x * myPow(x * x, (n - 1) / 2);
    }
  }
  return x;
};