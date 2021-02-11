/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.



Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
*/

//divide & conquer, in pairs merge and repeat
//merge 2 lists helper function
//create queue of lists, merging 2 at a time, only one remains
//TC-O(nlogk)
//SC-O(1)

const mergeTwoLists = (l1, l2) => {
  //merge in place or new list; let head = l1.val <= l2.val ? l1 : l2;
  let head = new ListNode();
  let node = head;
  while (l1 !== null && l2 !== null) {
    //node.next set to min of two lists, continue until null
    if (l1.val <= l2.val) {
      node.next = l1;
      l1 = l1.next;
    } else {
      node.next = l2;
      l2 = l2.next;
    }
    node = node.next;
  }
  if (l1 === null) node.next = l2;
  if (l2 === null) node.next = l1;
  return head.next;
};

var mergeKLists = function(lists) {
  if (!lists.length) return null;

  while (lists.length > 1) {
    let list1 = lists.shift();
    let list2 = lists.shift();

    let mergedPair = mergeTwoLists(list1, list2);
    lists.push(mergedPair);
  };

  return lists.shift();
};

