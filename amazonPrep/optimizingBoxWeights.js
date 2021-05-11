/*
https://leetcode.com/discuss/interview-question/1183360/Amazon-Online-Assesment-Questions
https://leetcode.com/discuss/interview-question/1184534/Amazon-OA-SDE2-or-OPTIMIZING-BOX-WEIGHT-or-GIFT-GROUPING

Optimizing box weight: link is broken but here is a description
ArrayList of size N : A[5,6,7,8,1,2,6,9]
split array in two groups A & B with below constraints (2 groups i.e sets with unique)
A & B should have unique values
A Sum >= B
A should have max values
A subset elements < B subset
-------------------------------------------------------
https://www.chegg.com/homework-help/questions-and-answers/01-hour-35-mins-47-seconds-left-1-optimizing-box-weights-amazon-fulfillment-associate-set--q75438758

An Amazon Fullfillment Associate has a set of items that need to be packed into two boxes. Given an integer array of the item weights (arr) to be packed, divide the item weights into two subsets, A & B, for packing into the associated boxes, while respecting the conditions:
1) the intersection of A & B is null
2) the union A & B is equal to the original arr
3) the number of elements in subset A is minimal
4) the sum of A's weights is greater than the sum of B's weights

Return the subset A in increasing order where the sum of A's weights is greater than the sum of B's weights. If more than one subset exists, return the one with the maximal total weight.

Example 1:
Inputs: n = 5, arr = [3,7,5,6,2]
The 2 subsets in arr to satisfy conditions for A are [5,7] & [6,7]
1) A is minimal, size 2
2) Sum(A) = (5 + 7) = 12 > Sum(B) = (2 + 3 + 6) = 11
3) Sum(A) = (6 + 7) = 13 > SUm(B) = (2 + 3 + 5) = 10
4) The intersection of A & B is null and their union is equal to arr
5) the subset A where the sum of its weight is maximal is [6,7]
*/

var minimalHeaviestSetA = function(n, arr) {
  //your code here

}