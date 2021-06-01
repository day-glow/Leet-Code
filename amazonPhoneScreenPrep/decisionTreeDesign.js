/*
https://leetcode.com/discuss/interview-question/1123019/Amazon-Phone-Screen

SDEII - March 2021

Decision Tree Design， Implement three methods
//   signal_value                  constant
//                        X1 < 3
//                       ------------
//           |                                 |
//       X2 < 1                        X1 < 6
//    -----------                        ---------
//  |              |                 |                  |
//  N             Y                N             X3 < 2
//                                                  ----------
//                                                  |          |
//                                                 Y          N

Test cases:
// {X1 <- 2, X2 <- 1, X3 <- 11} -> Y
// {X1 <- 8, X2 <- 4, X3 <- 12} -> N

write the class and implement the class with three method below.
use add Split to build the tree.

// class DecisionTree:

//   method add_split(leaf, signal_name, constant):
//     Add a split condition to the given leaf.
//     Return the newly created leaves for future calls.
//     Feel free to pass a sentinel value (like null) as the leaf for the first call to this method.
//     Subsequent calls should pass leaves returned by previous calls.

//   method set_leaf_value(leaf, value):
//     Set the return value for a leaf.

//   method evaluate(signals):
//     Evaluate the tree on a mapping of signal_name -> signal_value.
//     Return the value of the leaf reached by traversing the tree.
Most important point is to handle corner cases
*/