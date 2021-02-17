/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
*/

//second pass
//TWO POINTERS APPROACH:
//TC-O(n) --> O(n + k)
//SC-O(1)
const hasCycle = head => {
  let slow = head;
  let fast = head;
  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return true;
  };
  return false;
};


//TWO POINTERS APPROACH:
//TC-O(n) --> O(n + k)
//SC-O(1)
const hasCycle = head => {
  let p1 = head;
  let p2 = head;

  while (p2 && p2.next && p2.next.next) {
      p1 = p1.next;
      p2 = p2.next.next;

      if (p1 === p2) {
          return true;
      }
  }
  return false;
}

//HASH SET:
//TC-O(n)
//SC-O(n)
const hasCycle = head => {
  if (head === null || head.next === null) return false;
  let set = new Set();
  let current = head;

  while (current) {
    if (set.has(current)) return true;
    set.add(current);
    current = current.next;
  }
  return false;
}

