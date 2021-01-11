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

//possible adjList approach...
const canFinish = (numCourses, prerequisites) => {
  //step 1: make adjList
  let adjList = new Array(numCourses - 1).fill([]);
  for (let i = 0; i < prerequisites.length; i++) {
    let edge = prerequisites[i];
    adjList[edge[0]].push(edge[1]);
  };

  //step 2: iterate over adjList
  for (let i = 0; i < adjList.length; i++) {
    if ()
  }
};

//hash map and hash set
const canFinish = (numCourses, prerequisites) => {
  //step 1: make adjList in hash map
  let adjList = new Map();
  let seen = new Set();
  let visiting = new Set();

  for (let [course, prereq] of prerequisites) {
    if (adjList.has(course)) {
      let prev = adjList.get(course);
      prev.push(prereq);
      adjList.set(course, prev);
    } else {
      adjList.set(course, [prereq]);
    }
  }

  //helper
  const hasCycle = course => {
    visiting.add(course);
    let edges = adjList.get(course);
    if (edges) {
      for (let prereq of edges) {
        if (seen.has(prereq)) continue;
        if (visiting.has(prereq)) return true;
        if (hasCycle(prereq)) return true;
      }
    }
    visiting.delete(course);
    seen.add(course);
    return false;
  }

  //check each course for cycles
  for (let [course, prereq] of adjList) {
    if (hasCycle(course)) {
      //cycle found, not all courses can be finished
      return false;
    }
  }

  //no cycles found, all course can be finished...
  //(do we have to check for islands? no, b/c this is prereq, if no prereq, then can take class)
  return true;
};

