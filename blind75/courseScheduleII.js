/*
There are a total of n courses you have to take labelled from 0 to n - 1.

Some courses may have prerequisites, for example, if prerequisites[i] = [ai, bi] this means you must take the course bi before the course ai.

Given the total number of courses numCourses and a list of the prerequisite pairs, return the ordering of courses you should take to finish all courses.

If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

Example 2:
Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

Example 3:
Input: numCourses = 1, prerequisites = []
Output: [0]
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
//clarifying q: are the pairs in sorted order by a?
//bfs - queue
//dfs - stack
//keys&locks Q, map
/*
adjList in hash map
map = {
0: [],
1: [0],
2: [0],
3: [1,2],
}
seen in set
visiting in set
look for cycle
*/

//SECOND PASS:
//iterate over prereqs
//create map, adjList & prereqCount Array
//bfs, queue, push courses w/o prereqs
//push in courses that can be completed as each course is taken
//measure length of order to ensure same as numCourses
var findOrder = function(numCourses, prerequisites) {
  let order = [];

  //handle edge cases
  if (!numCourses) return order;
  if (!prerequisites.length) {
    for (let i = 0; i < numCourses; i++) order.push(i);
    return order;
  }

  //create adjList
  let preReq = new Map();
  let hasAccessToCourse = new Array(numCourses).fill(0);

  for (let [c, p] of prerequisites) {
    if (preReq.has(p)) {
      //let prev = preReq.get(c);
      //prev.push(p);
      preReq.get(p).push(c);
    } else {
      preReq.set(p, [c]);
    }
    hasAccessToCourse[c]++; //prerequisite count
  }

  //create queue of courses without prereqs (take those courses first) if queue is empty, not possible, return
  let queue = [];
  hasAccessToCourse.forEach((e, i) => {
    //console.log("e", e, "i", i)
    if (e === 0) queue.push(i);
  })
  //console.log(hasAccessToCourse)
  //console.log(queue)
  //create while loop for queue, adding courses
  while (queue.length) {
    let takeCourse = queue.shift();
    if (preReq.has(takeCourse)) {
      let takeNext = preReq.get(takeCourse);
      takeNext.forEach(next => {
        hasAccessToCourse[next]--;
        if (hasAccessToCourse[next] === 0) queue.push(next);
      })
    }
    //push into order
    order.push(takeCourse);
  }

  return order.length === numCourses ? order : [];
};

//iterate over classes and find order to finish all
//topo sort

//keeping array and map of prereq count approach
//TC-O(n+m)
//SC-O(n+m)
var findOrder = function(numCourses, prerequisites) {
  let courseOrder = [];
  if (!numCourses) return courseOrder;
  if (prerequisites.length < 1) {
    for (let i = 0; i < numCourses; i++) courseOrder.push(i);
    return courseOrder;
  }
  let map = new Map();
  let indegree = new Array(numCourses).fill(0);
  let seen = new Set();
  let visiting = new Set();

  //adjList
  for (let [a, b] of prerequisites) {
    if (map.has(b)) {
      map.get(b).push(a);
    } else {
      map.set(b, [a]);
    }
    indegree[a]++;
  }

  //create queue of coursesp w/o prereqs
  let queue = [];
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  //create order - dfs
  while (queue.length) {
    let c = queue.shift();
    if (map.has(c)) {
      for (let e of map.get(c)) {
        indegree[e]--;
        if (indegree[e] === 0) queue.push(e);
      }
    }
    //check for cycle in adjList
    courseOrder.push(c);
  }

  return courseOrder.length === numCourses ? courseOrder : [];
};