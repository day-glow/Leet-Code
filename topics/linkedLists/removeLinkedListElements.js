/*
Remove all elements from a linked list of integers that have value val.

Example:
Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
*/

//TC- O(N)
//SC- O(1)
const removeElements = (head, val) => {
  if (!head) return head;
  let node = head;
  while (head) {
    if (head.val === val) {
      head = head.next;
    } else {
      break;
    }
  }

  while (node && node.next) {
    if (node.next.val === val) {
      node.next = node.next.next ? node.next.next : null;
    } else {
      node = node.next;
    }

  }
  return head;
};