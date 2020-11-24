/*
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

Example 1:
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/

/*
SIMPLE:

const reverseString = array => {
  return array.reverse();
};
*/

/*
 OPTIMIZED:
 Two Pointers Approach, Iteration
 TC-O(N), technically O(1/2 * n) but iterates over each letter so O(N)
 SC-O(1)
 */

const reverseString = array => {
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer < rightPointer) {
    let tempLetter = array[leftPointer];
    array[leftPointer] = array[rightPointer];
    array[rightPointer] = tempLetter;
    leftPointer++;
    rightPointer--;
  }
};
