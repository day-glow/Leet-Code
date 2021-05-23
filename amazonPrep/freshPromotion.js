/*
https://leetcode.com/discuss/interview-question/1002811/Amazon-or-OA-2021-or-Fresh-Promotion

Amazon is running a promotion in which customers receive prizes for purchasing a secret combination of fruits. The combination will change each day, and the team running the promotion wants to use a code list to make it easy to change the combination. The code list contains groups of fruits. Both the order of the groups within the code list and the order of the fruits within the groups matter. However, between the groups of fruits, any number, and type of fruit is allowable. The term "anything" is used to allow for any type of fruit to appear in that location within the group.

Consider the following secret code list: [[apple, apple], [banana, anything, banana]]
Based on the above secret code list, a customer who made either of the following purchases would win the prize:
orange, apple, apple, banana, orange, banana
apple, apple, orange, orange, banana, apple, banana, banana

Write an algorithm to output 1 if the customer is a winner else output 0.

Input
The input to the function/method consists of two arguments:
codeList, a list of lists of strings representing the order and grouping of specific fruits that must be purchased in order to win the prize for the day.
shoppingCart, a list of strings representing the order in which a customer purchases fruit.

Output
Return an integer 1 if the customer is a winner else return 0.

Note
'anything' in the codeList represents that any fruit can be ordered in place of 'anything' in the group. 'anything' has to be something, it cannot be "nothing."
'anything' must represent one and only one fruit.
If secret code list is empty then it is assumed that the customer is a winner.

Example 1:
Input: codeList = [[apple, apple], [banana, anything, banana]] shoppingCart = [orange, apple, apple, banana, orange, banana]
Output: 1
Explanation:
codeList contains two groups - [apple, apple] and [banana, anything, banana].
The second group contains 'anything' so any fruit can be ordered in place of 'anything' in the shoppingCart. The customer is a winner as the customer has added fruits in the order of fruits in the groups and the order of groups in the codeList is also maintained in the shoppingCart.

Example 2:
Input: codeList = [[apple, apple], [banana, anything, banana]]
shoppingCart = [banana, orange, banana, apple, apple]
Output: 0
Explanation:
The customer is not a winner as the customer has added the fruits in order of groups but group [banana, orange, banana] is not following the group [apple, apple] in the codeList.

Example 3:
Input: codeList = [[apple, apple], [banana, anything, banana]] shoppingCart = [apple, banana, apple, banana, orange, banana]
Output: 0
Explanation:
The customer is not a winner as the customer has added the fruits in an order which is not following the order of fruit names in the first group.

Example 4:
Input: codeList = [[apple, apple], [apple, apple, banana]] shoppingCart = [apple, apple, apple, banana]
Output: 0
Explanation:
The customer is not a winner as the first 2 fruits form group 1, all three fruits would form group 2, but can't because it would contain all fruits of group 1.
*/
/*
iterate over shoppingCart and fill the groups in order, pointers
move backwards through the list and check prev sliding windows

[[apple, apple], [banana, anything, banana]]

[banana, orange, banana, apple, apple]

sliding window aft finding first match for grouping
*/
var checkItemsInOrder = function(target, current) {
  if (target.join() === current.join()) return true;
  for (let i = 0; i < target.length; i++) {
    if (target[i] !== current[i] && target[i] !== 'anything') {
      return false;
    }
  }
  return true;
};

var findShoppingWinners = function(codeList, shoppingCart) {
  let groupNum = 0;
  //let itemNum = 0;
  //codeList[groupNum][itemNum]
  let currItem = 0;
  while (currItem < shoppingCart.length) {
    const curr = shoppingCart[currItem];
    if (curr === codeList[groupNum][0]) {
      const end = currItem + codeList[groupNum].length;
      if (checkItemsInOrder(codeList[groupNum], shoppingCart.slice(currItem, end))) {
        currItem = end;
        groupNum++;
      } else {
        currItem++;
      }
    } else {
      currItem++;
    }
  }
  return groupNum === codeList.length;
};

const winningItems = [['apple', 'apple'], ['banana', 'anything', 'banana']];
//const cart = ['banana', 'orange', 'banana', 'apple', 'apple'];
const cart = ['orange', 'apple', 'apple', 'banana', 'orange', 'banana'];
const expectedResult = true;
const actualResult = findShoppingWinners(winningItems, cart);
console.log('expected: ', expectedResult, ', actual: ', actualResult, ', results match: ', expectedResult === actualResult);

/*
A few approaches to tackle this scenario:

1. Brute force, one by one compare each shopping cart item to the items in the winning list,

    Time O(n* m) where n = length of shoppingCart & m = length of codeList, space O(1) 

2. .slice/sliding window approach, slice a subsection of the shopping cart when the leading item matches the leading codeList item,

    Time O(n* n) possibly higher.  The worse case, each item will match the codeList and will have to check the items with the helper function for O(n) for the sliced arr, therefore we will have to iterate over the same arr items multiple times.

   Space O(n) possibly higher, slice takes a lot of space, should have used start and end indexes and not taken slices to optimize further space 

3. Is there a third option with faster DP so we don't have to keep checking similar items that have already been reviewed?  There likely is, but due to the time test format, went with the option that was clear to get a working solution and would optimize if time allows to explore this.
*/

var checkGroupItems = function(groupItems, shoppingCart, startIdx) {
  for (let i = 0; i < groupItems.length; i++) {
    if (groupItems[i] !== shoppingCart[startIdx + i] && groupItems[i] !== 'anything') return false;
  }
  return true;
}

function foo(codeList, shoppingCart) {
  //console.log(codeList, shoppingCart)
  if (!shoppingCart.length) return 0;
  if (!codeList.length) return 1;
  let groupIdx = 0;
  let customerIdx = 0;
  while (groupIdx < codeList.length && customerIdx < shoppingCart.length) {
    let group = codeList[groupIdx].split(' ');
    const end = customerIdx + group.length;
    if ((group[0] === 'anything' || group[0] === shoppingCart[customerIdx]) && checkGroupItems(group, shoppingCart, customerIdx)) {
        customerIdx = end;
        groupIdx++;
    } else {
      customerIdx++;
    }
  }
  if (groupIdx === codeList.length) return 1;
  return 0;
}