/*
https://leetcode.com/discuss/interview-question/1031663/Amazon-OA

A customer wants to buy a pair of jeans, a pair of shoes, a skirt, and a top but has a limited budget in dollars. Given different pricing options for each product, determine how many options our customer has to buy 1 of each product. You cannot spend more money than the budgeted amount.

Example
priceOfJeans = [2, 3]
priceOfShoes = [4]
priceOfSkirts = [2, 3]
priceOfTops = [1, 2]
budgeted = 10

The customer must buy shoes for 4 dollars since there is only one option. This leaves 6 dollars to spend on the other 3 items. Combinations of prices paid for jeans, skirts, and tops respectively that add up to 6 dollars or less are [2, 2, 2], [2, 2, 1], [3, 2, 1], [2, 3, 1]. There are 4 ways the customer can purchase all 4 items.

Function Description

Complete the getNumberOfOptions function in the editor below. The function must return an integer which represents the number of options present to buy the four items.

getNumberOfOptions has 5 parameters:
int[] priceOfJeans: An integer array, which contains the prices of the pairs of jeans available.
int[] priceOfShoes: An integer array, which contains the prices of the pairs of shoes available.
int[] priceOfSkirts: An integer array, which contains the prices of the skirts available.
int[] priceOfTops: An integer array, which contains the prices of the tops available.
int dollars: the total number of dollars available to shop with.

Constraints

1 ≤ a, b, c, d ≤ 103
1 ≤ dollars ≤ 109
1 ≤ price of each item ≤ 109
Note: a, b, c and d are the sizes of the four price arrays
*/

/*
bfs/dfs
push options into queue as long as not over budget?
dp

sort by length, if only 1 then only one option and can skip those by subtracting from budget
bfs
queue holds remainder budget per level
                    10  //budget
                    |
                10 - 4 = 6  //shoes
              /              \
          6 - 2 = 4           6 - 3 = 3  //jeans
        /          \          /          \
  4 - 2 = 2    4 - 3 = 1    3 - 2 = 1      3 - 3 = 0  //skirts
  1     2        3              4                     //num options after tops
output: count leaves, 4 options
*/

var getNumberOfOptions = function(priceOfJeans, priceOfShoes, priceOfSkirts, priceOfTops, dollars) {
  if (dollars < 1) return 0;
  let options = [priceOfJeans, priceOfShoes, priceOfSkirts, priceOfTops];
  let queue = [dollars];
  let len = queue.length;
  let currentItem = 0;
  while (queue.length && currentItem < options.length) {
    for (let i = 0; i < len; i++) {
      const budgetAfterPrevItems = queue.shift();
      for (let itemPrice of options[currentItem]) {
        const newBudget = budgetAfterPrevItems - itemPrice;
        if (newBudget >= 0) {
          queue.push(newBudget);
        }
      }
    }
    currentItem++;
    len = queue.length;
  }
  return queue.length;
};

const priceOfJeans = [2, 3];
const priceOfShoes = [4];
const priceOfSkirts = [2, 3];
const priceOfTops = [1, 2];
const budgeted = 10;

const expectedResult = 4;
const actualResult = getNumberOfOptions(priceOfJeans, priceOfShoes, priceOfSkirts, priceOfTops, budgeted);

console.log('expected: ', expectedResult, 'actual: ', actualResult, expectedResult === actualResult);
