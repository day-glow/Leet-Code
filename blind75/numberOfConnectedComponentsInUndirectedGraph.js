/*
Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph.

Example 1:
Input: n = 5 and edges = [[0, 1], [1, 2], [3, 4]]

     0          3
     |          |
     1 --- 2    4

Output: 2

Example 2:
Input: n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]]

     0           4
     |           |
     1 --- 2 --- 3

Output:  1
*/

/*
UNION FIND:
//keep one "head node" as -1 for that connected component
//assign connected nodes the "head node" it is connected to
//all the -1's remaining are separated components
//if there are two separte head nodes and those components are connect by edge, it will refer
//to head node and change that -1 to the new head node.
sets = {
  0: -1,
  1: 0,
  2: 0,
  3: 0,
  4: 3,
}
left = 0
right = 3

count = 0
*/