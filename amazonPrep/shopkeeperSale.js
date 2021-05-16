/*
https://leetcode.com/discuss/interview-question/985908/Amazon-or-OA-2020-or-Shopkeeper-Sale

A shopkeeper has a sale to complete and has arranged the items being sold in a list.
Starting from the left, the shop keeper rings up each item at its full price less the price of the first lower or equally priced item to its right.
If there is no item to the right that costs less than or equal to the current item's price the current item is sold at full price.

Assumptions
The first and second items would each be discounted by 1 unit, the first equal or lower price to the right.
The item priced 1 unit would sell at a full price.
The next item, at 2 units, would be discounted 2 units as would the 4 unit item.
The sixth and final item must be purchased at full price.

Input
The input consists of one arguments:
items_prices : a list of integers representing the price of items

Output
return total cost of all items on the first line and on the second line print a space separated list of integers representing the indexes of the non- discounted items in ascending index order.

Constraints
1 <= size(prices) <= 100000
1 <= prices <= 1000000

Example 1:
Input:
items_prices = [2, 3, 1, 2, 4, 2]
Output:
8
2 5
Explanation:
The total cost is 1+2+1+0+2+2 = 8 units. And 2 and 5 indexes has no discount.
iterate over the array
[2 - 1, 3 - 1, 1, 2 - 2, 4 - 2, 2]
variable for total cost
array for unchanged values, unshift

dp iterate backwards, time O(n ^ 2) space O(1)

Example 2:
Input:
items_prices = [5, 1, 3, 4, 6, 2]
Output:
14
1 5

Example 3:
Input:
items_prices = [1, 3, 3, 2, 5]
Output:
9
0 3 4
*/
var shopkeeperSale = function( items_prices ){
  const len = items_prices.length;
  let total = items_prices[len - 1];
  const fullPricedItems = [len - 1];

  for (let i = len - 2; i >= 0; i--) {
    console.log('total: ', total)
    for (let itemsToTheRight = i + 1; itemsToTheRight < len; itemsToTheRight++) {
      if (items_prices[itemsToTheRight] <= items_prices[i]) {
        total += items_prices[i] - items_prices[itemsToTheRight];
        break;
      }
      if (itemsToTheRight === len - 1) {
        total += items_prices[i];
        fullPricedItems.unshift(i);
      }
    }
  }
  console.log(`${total}\n${fullPricedItems.join(' ')}`);
};

const arr = [2, 3, 1, 2, 4, 2];
console.log(shopkeeperSale(arr));