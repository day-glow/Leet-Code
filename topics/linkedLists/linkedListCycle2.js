/*
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Notice that you should not modify the linked list.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
*/

/*
TC-O(2n)
SC-O(1)
*/

//start with determining if LL has cycle w/ 2-pointer (fast&slow) approach
const detectCycle = head => {
  let p1 = head;
  let p2 = head;

  while (p2 && p2.next && p2.next.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) {
      //has intersection (has cycle)
      return detectCyclePos(head, p2);
    }
  }
  return null;
};

//retraverse LL with 2-pointers going same speed
const detectCyclePos = (head, intersection) => {
  let p1 = head;
  let p2 = intersection;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
};

