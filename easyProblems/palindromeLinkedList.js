/*
Given a singly linked list, determine if it is a palindrome.

Example 1:
Input: 1->2
Output: false

Example 2:
Input: 1->2->2->1
Output: true
*/

/*
//repeats node values (LL one directional)
//could keep an obj store of seen values
//stack, LIFO
//TC-O(n)
//SC-O(n)
*/

const isPalindrome = head => {
  const stack = [];
   while(head && head.val !== null) {
        stack.push(head.val);
        head = head.next;
    }
    return stack.every((e, i) => e === stack[stack.length - i - 1]);
};