/*
https://leetcode.com/discuss/interview-question/1200301/Amazon-OA

You're given an array, and you can update elements in that array by performing integer division with divisor d. What is the minimum number of divisions needed so that there are T numbers that are the same in the array.

E.g. [1,2,3,4,5], threshold T = 3, d = 2. We want the min number of divisions needed so that 3 numbers are the same in the array. The answer is 2. We can divide 2 // 2 = 1 and 3 // 2 = 1 to get 3 1's with 2 operations, or 4 // 2 = 2 and 5 // 2 = 2 to get 3 2's.

Another example is [16, 32, 64], T = 3, d = 2, answer is 3. 32 // 2 = 16, and 64 // 2 = 32, then 32 // 2 = 16, 3 divisions needed.

I tried taking the largest number and dividing that each time but when I realized it fails for cases like [1, 2, 10000000], T = 2, d = 2, I ran out of time.
*/

/*
1. sort? take the first k nums and get to lowest val?
2. that might be bad if the larger nums are closer together
i.e. [1,24,48,96,100,200,400]
bfs?
divide and find neighbors? count layers until the count increases, use set at marker?

recursion (time out?)
bfs, iterative find leafs that are equal

3. hashmap, store how many quotients to get to 0 or 1, sort, then iterate over lowest counts and add to total

[1,2,3,4,5] T = 3, d = 2

map = {
  1: 1,
  2: 2,
  3: 2,
  4: 2,
  5: 2,
}
min = 1;
total = 1;

*/
