/*
Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:
begin to intersect at node c1. image not copied, to view visit https://leetcode.com/problems/intersection-of-two-linked-lists/

Example 1:
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
*/

//hash map
//TC- O(n+m)
//SC- O(m)
const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null;

  let map = new Set();
  let nodeA = headA;
  let nodeB = headB;

  while (nodeA) {
    map.add(nodeA);
    nodeA = nodeA.next;
  }
  while (nodeB) {
    if (map.has(nodeB)) {
      return nodeB;
    }
    nodeB = nodeB.next;
  }
  return null;
};

//Two Pointers
//TC- O(m+n)
//SC- O(1)
const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null;

  let nodeA = headA;
  let nodeB = headB;

  while (nodeA !== nodeB) {
    nodeA = nodeA ? nodeA.next : headB;
    nodeB = nodeB ? nodeB.next : headA;
    if (!nodeA && !nodeB) return null;
  }

  return nodeA;
};