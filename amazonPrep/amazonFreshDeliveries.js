/*
https://leetcode.com/discuss/interview-question/1200709/Amazon-OAorFresh-Deliveries

similar to k-closest points to the origin
https://leetcode.com/problems/k-closest-points-to-origin/

Amazon Fresh is a grocery delivery service that offers customers the option of purchasing their groceries online and schedule future deliveries of purchased deliveries. Amazon's backend system dynamically tracks each Amazon Fresh delivery truck and automatically assigns the next deliveries in a truck's plan. To accomplish this, the system generates an optimized delivery plan with X destinations. The most optimizated plan would deliver to the closest X destinations from the start among all of the possible destinations in the plan.

Given a list of N possible delivery destinations, implement an algorithm to create the delivery plan for the closest X destinations.

Inputs:  2 args
1) allLocations, a list array where each element consists of a pair of ints (x, y) coords
2) numDeliveries, int

Output: 2D integer array
*/

var deliveryPlan = function(allLocations, numDeliveries) {
  if (!allLocations.length || !numDeliveries) return [];
  let sortedByDist = allLocations.sort((a, b) => Math.sqrt((a[0] * a[0]) + (a[1] * a[1])) - Math.sqrt((b[0] * b[0]) + (b[1] * b[1])));
  return sortedByDist.slice(0, numDeliveries);
}


/*
allLoc = [[x,y], [x,y], [x,y] ...]
numDeliveries = 2 (find closest 2) "top K" algo

start location seems to be in relation to the given options (assume 0,0)

//top k closest to current point? Or closest to next new point
assuming closest to current point

1. sort by x, and y coords, difference between 2 points (find long leg)

time O(nlogn) space O(1)

//.sort makes most sense, another time intensive approach is to implement quickSelect sort

*/


