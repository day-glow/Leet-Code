/*
https://leetcode.com/discuss/interview-question/846585/Amazon-Online-Assessment-Question-1

Input
The input to the function/method consists of five arguments - numCompetitors, an integer representing the number of competitors for the Echo device;
topNCompetitors, is an integer representing the maximum number of competitors that Amazon wants to identify;
competitors, a list of strings representing the competitors;
numReviews, an integer representing the number of reviews from different websites that are identified by the automated webcrawler;
reviews, a list of string where each element is a string that consists of space-separated words representing user reviews.

Output
Return a list of strings representing Amazon's top N competitors in order of most frequently mentioned to least frequent.

Note
The comparison of strings is case-insensitive. If the value of topNCompetitors is more than the number of competitors discussed in the reviews then output the names of only the competitors mention.
If competitors have the same count (e.g. newshop=2, shopnow=2, mymarket=4), sort alphabetically. topNCompetitors=2, Output=[mymarket, newshop]

Example
Input:
numCompetitors=6
topNCompetitors = 2
competitors = [newshop, shopnow, afashion, fashionbeats, mymarket, tcellular]
numReviews = 6
reviews = [
"newshop is providing good services in the city; everyone should use newshop",
"best services by newshop",
"fashionbeats has great services in the city",
"I am proud to have fashionbeats",
"mymarket has awesome services",
"Thanks Newshop for the quick delivery"]

Output
["newshop", "fashionbeats"]

Explanation
"newshop" is occurring in 3 different reviews. "fashionbeats" is occuring in 2 different user reviews and "mymarket" is occurring in only 1 review.
*/

var TopNumCompetitors = function(numCompetitors, topNCompetitors, competitors, numReviews, reviews) {
  const comp = new Map();
  competitors.forEach(name => comp.set(name, 0));
  for (let i = 0; i < numReviews; i++) {
    const curr = reviews[i].split(' ');
    for (let word of curr) {
      if (comp.has(word)) {
        comp.set(word, comp.get(word) + 1);
        break;
      }
    }
  }

  let array = Array.from(comp.keys());
  console.log(array);
  array.sort((a, b) => comp.get(b) === comp.get(a) ? b.localeCompare(a) : comp.get(b) - comp.get(a));
  console.log(array);
  return array.slice(0, topNCompetitors);
}

const numCompetitors = 6;
const topNCompetitors = 2;
const competitors = ['newshop', 'shopnow', 'afashion', 'fashionbeats', 'mymarket', 'tcellular'];
const numReviews = 6;
const reviews = [
"newshop is providing good services in the city; everyone should use newshop",
"best services by newshop",
"fashionbeats has great services in the city",
"I am proud to have fashionbeats",
"mymarket has awesome services",
"Thanks Newshop for the quick delivery"];

const expectedResult = ["newshop", "fashionbeats"];
const actualResult = TopNumCompetitors(numCompetitors, topNCompetitors, competitors, numReviews, reviews);
console.log('expected: ', expectedResult, 'actual: ', actualResult);
/*
iterate over reviews
count number of reviews that mention comp
sort counts descending, and alphabetically
return top
*/