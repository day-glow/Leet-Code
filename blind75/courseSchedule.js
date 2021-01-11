/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?



Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.


Constraints:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
1 <= numCourses <= 10^5
*/

//build graph data structure (adjList)
//check each node for cycles in dependencies
//perform backtracking (breadcrumb path, aka flag visited & if node appears again, there is a cycle)

/*
numCourses = 5, prereqs = [[1,0],[2,1],[3,2],[4,3],[4,2],[4,1],[4,0]]
adjList = [
  [],
  [0],
  [1],
  [2],
  [3,2,1,0],
]

hashMap = {
  0: [],
  1: [0],
  2: [1],
  3: [2],
  4: [3,2,1,0],
}
*/
