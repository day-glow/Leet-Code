/*
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:

If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
One must use all the tickets once and only once.

Example 1:
Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]

Example 2:
Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
             But it is larger in lexical order.
*/

//not working
/*
/**
 * @param {string[][]} tickets
 * @return {string[]}

 //tickets are an adjacency list (edges)
 //return nodes (airports) in order
 //does not have a start->end shortest path, it is a reconstruction, so must visit all nodes
 //DFS (visit all)
 //hash map?

 //ran into issue using lexical choice in sort.
 //need to use DFS to find all possible itineraries and then compare post itineraries (backtracking)

 //create backtracking helper function
//if you can reach destination, return true, otherwise return false and select non-lexi optimal
//use stack or recursion to find other routes if needed

const findItinerary = tickets => {
  let flights = new Map();
  let itinerary = [];
  let visited = [];

  for (let [from, to] of tickets) {
    if (!flights.has(from)) {
      flights.set(from, [to]);
    } else {
      let temp = flights.get(from);
      temp.push(to);
      temp.sort((a, b) => a.localeCompare(b, 'en', {ignorePunctuation: true}));
      flights.set(from, temp);
    }
  }

  itinerary.push("JFK");
  visited.push("JFK");

  //return true if there is a path to the dest
  const DFS = (curr, count, visited) => {
    if (count === tickets.length + 1 || visited === tickets.length + 1) return true;
    if (flights.has(curr)) {
      let next = flights.get(curr);
      let dest = next.shift();
      while (!DFS(dest, itinerary.length + 1, visited) && next.length) {
          dest = next.shift();
        }
      visited.push(dest);
      if (DFS(dest, count + 1, visited)) return true;

    }
    return false;
  };


  while (itinerary.length < tickets.length + 1) {
    let curr = itinerary[itinerary.length - 1];
    if (flights.has(curr)) {
      let next = flights.get(curr);
      if (next.length === 1) {
        itinerary.push(next[0]);
        visited.push(next[0]);
        flights.delete(curr);
      } else if (next.length > 1) {
        let dest = next.shift();
        while (!DFS(dest, itinerary.length + 1, visited)) {
          dest = next.shift();
        }
        itinerary.push(dest);
        visited.push(dest);
        flights.set(curr, next);
      }

    }
  }
  return itinerary;
};
*/

//partially working (can't solve for starting airports that lexically come first but don't complete itinerary)
//[["JFK","NRT"],["JFK","ATL"],["NRT","JFK"]]
//need to find all possible DFS brnachs and return the one that works first
const findItinerary = tickets => {
  let flights = new Map();
  let itinerary = [];

  for (let [from, to] of tickets) {
    if (!flights.has(from)) {
      flights.set(from, [to]);
    } else {
      let temp = flights.get(from);
      temp.push(to);
      temp.sort((a, b) => a.localeCompare(b, 'en', {ignorePunctuation: true}));
      flights.set(from, temp);
    }
  }

  itinerary.push("JFK");
  while (itinerary.length < tickets.length + 1) {
    let curr = itinerary[itinerary.length - 1];
    if (flights.has(curr)) {
      let next = flights.get(curr);
      if (next.length === 1) {
        itinerary.push(next[0]);
        flights.delete(curr);
      } else if (next.length > 1) {

        let dest = next.shift();
        itinerary.push(dest);
        flights.set(curr, next);
      }

    }
  }
  return itinerary;
};