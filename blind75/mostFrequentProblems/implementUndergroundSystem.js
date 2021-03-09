/*
https://leetcode.com/problems/design-underground-system/

Implement the UndergroundSystem class:

void checkIn(int id, string stationName, int t)
A customer with a card id equal to id, gets in the station stationName at time t.
A customer can only be checked into one place at a time.
void checkOut(int id, string stationName, int t)
A customer with a card id equal to id, gets out from the station stationName at time t.
double getAverageTime(string startStation, string endStation)
Returns the average time to travel between the startStation and the endStation.
The average time is computed from all the previous traveling from startStation to endStation that happened directly.
Call to getAverageTime is always valid.
You can assume all calls to checkIn and checkOut methods are consistent. If a customer gets in at time t1 at some station, they get out at time t2 with t2 > t1. All events happen in chronological order.

Example 1:
Input
["UndergroundSystem","checkIn","checkIn","checkIn","checkOut","checkOut","checkOut","getAverageTime","getAverageTime","checkIn","getAverageTime","checkOut","getAverageTime"]
[[],[45,"Leyton",3],[32,"Paradise",8],[27,"Leyton",10],[45,"Waterloo",15],[27,"Waterloo",20],[32,"Cambridge",22],["Paradise","Cambridge"],["Leyton","Waterloo"],[10,"Leyton",24],["Leyton","Waterloo"],[10,"Waterloo",38],["Leyton","Waterloo"]]

Output
[null,null,null,null,null,null,null,14.00000,11.00000,null,11.00000,null,12.00000]

Explanation
UndergroundSystem undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, "Leyton", 3);
undergroundSystem.checkIn(32, "Paradise", 8);
undergroundSystem.checkIn(27, "Leyton", 10);
undergroundSystem.checkOut(45, "Waterloo", 15);
undergroundSystem.checkOut(27, "Waterloo", 20);
undergroundSystem.checkOut(32, "Cambridge", 22);
undergroundSystem.getAverageTime("Paradise", "Cambridge");       // return 14.00000. There was only one travel from "Paradise" (at time 8) to "Cambridge" (at time 22)
undergroundSystem.getAverageTime("Leyton", "Waterloo");          // return 11.00000. There were two travels from "Leyton" to "Waterloo", a customer with id=45 from time=3 to time=15 and a customer with id=27 from time=10 to time=20. So the average time is ( (15-3) + (20-10) ) / 2 = 11.00000
undergroundSystem.checkIn(10, "Leyton", 24);
undergroundSystem.getAverageTime("Leyton", "Waterloo");          // return 11.00000
undergroundSystem.checkOut(10, "Waterloo", 38);
undergroundSystem.getAverageTime("Leyton", "Waterloo");          // return 12.00000

Example 2:
Input
["UndergroundSystem","checkIn","checkOut","getAverageTime","checkIn","checkOut","getAverageTime","checkIn","checkOut","getAverageTime"]
[[],[10,"Leyton",3],[10,"Paradise",8],["Leyton","Paradise"],[5,"Leyton",10],[5,"Paradise",16],["Leyton","Paradise"],[2,"Leyton",21],[2,"Paradise",30],["Leyton","Paradise"]]

Output
[null,null,null,5.00000,null,null,5.50000,null,null,6.66667]

Explanation
UndergroundSystem undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(10, "Leyton", 3);
undergroundSystem.checkOut(10, "Paradise", 8);
undergroundSystem.getAverageTime("Leyton", "Paradise"); // return 5.00000
undergroundSystem.checkIn(5, "Leyton", 10);
undergroundSystem.checkOut(5, "Paradise", 16);
undergroundSystem.getAverageTime("Leyton", "Paradise"); // return 5.50000
undergroundSystem.checkIn(2, "Leyton", 21);
undergroundSystem.checkOut(2, "Paradise", 30);
undergroundSystem.getAverageTime("Leyton", "Paradise"); // return 6.66667
*/

/*
var UndergroundSystem = function() {
  this.riders = new Map();
  this.stations = new Map();
};
  //"Leyton": ...logs
  //"Waterloo": ...logs
  //"Paradise": ...logs

  //this.station.get(Waterloo, ins or outs, time)
  //this.station.set("Leyton", [Waterloo, totalTime])

/**
//A customer with a card id equal to id, gets in the station stationName at time t.
//A customer can only be checked into one place at a time.
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}

UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  if (this.riders.has(id)) {
    let userRides = this.riders.get(id);
    if (userRides[userRides.length - 1][2] === "in") {
      console.log(`ID #${id} already checked in at ${userRides[userRides.length - 1][1]}.`);
      return;
    } else {
      userRides.push([t, stationName, "in"])
      this.riders.set(id, userRides);
      console.log(`${t} check in at ${stationName} added to ID #${id} travel log.`);
    }
  } else {
    this.riders.set(id, [[t, stationName, "in"]]);
    console.log(`ID #${id} successfully checked in at ${t} in ${stationName}.`);
  }
};


/**
//A customer with a card id equal to id, gets out from the station stationName at time t.
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}

UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  if (!this.riders.has(id)) return console.log(`ID #${id} was not checked in and therefore cannot be checkout.`);
  let userRides = this.riders.get(id);
  let userLastCheckIn = userRides[userRides.length - 1];
  userRides.push([t, stationName, "out"]);
  this.riders.set(id, userRides);
  console.log("last check in", userLastCheckIn)

  //log stations
  if (this.stations.has(userLastCheckIn[1])) {
    let dest = this.stations.get(userLastCheckIn[1]);
    if (dest.has(stationName)) {
      let travelTimes = dest.get(stationName);
      travelTimes.push(t - userLastCheckIn[0]);
      dest.set(stationName, travelTimes);
    } else {
      dest.set(stationName, [t - userLastCheckIn[0]]);
      this.stations.set(userLastCheckIn[1], dest);
    }
  } else {
    let dest = new Map();
    dest.set(stationName, [t - userLastCheckIn[0]]);
    this.stations.set(userLastCheckIn[1], dest);
  }
  //console.log("stations log", this.stations)
};

/**
//Returns the average time to travel between the startStation and endStation.
//The average time is computed from all the previous traveling from startStation to endStation that happened directly.
//Call to getAverageTime is always valid.
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}

UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  if (!this.stations.has(startStation)) return 0;
  let dest = this.stations.get(startStation);
  let end = dest.get(endStation);
  let numCompletedRides = end.length;
  let allRidesTotalTime = end.reduce((acc, curr) => acc += curr);
  return allRidesTotalTime / numCompletedRides;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
*/

//refactored:
//TC-O(1)
//SC-O(P + S2)
//P=passengerCount, S=stations, S2 = stations*stations for all possible routes (max)
var UndergroundSystem = function() {
  this.riders = new Map();
  this.stations = new Map();
};

UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  if (this.riders.has(id)) {
    let userRides = this.riders.get(id);
    if (userRides[userRides.length - 1][2] === "in") {
      return;
    } else {
      userRides.push([t, stationName, "in"])
      this.riders.set(id, userRides);
    }
  } else {
    this.riders.set(id, [[t, stationName, "in"]]);
  }
};

UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  if (!this.riders.has(id)) return console.log(`ID #${id} was not checked in and therefore cannot be checkout.`);
  let userRides = this.riders.get(id);
  let userLastCheckIn = userRides[userRides.length - 1];
  userRides.push([t, stationName, "out"]);
  this.riders.set(id, userRides);
  if (this.stations.has(userLastCheckIn[1])) {
    let dest = this.stations.get(userLastCheckIn[1]);
    if (dest.has(stationName)) {
      let travelTimes = dest.get(stationName);
      travelTimes.push(t - userLastCheckIn[0]);
      dest.set(stationName, travelTimes);
    } else {
      dest.set(stationName, [t - userLastCheckIn[0]]);
      this.stations.set(userLastCheckIn[1], dest);
    }
  } else {
    let dest = new Map();
    dest.set(stationName, [t - userLastCheckIn[0]]);
    this.stations.set(userLastCheckIn[1], dest);
  }
};

UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  if (!this.stations.has(startStation)) return 0;
  let dest = this.stations.get(startStation);
  let end = dest.get(endStation);
  let numCompletedRides = end.length;
  let allRidesTotalTime = end.reduce((acc, curr) => acc += curr);
  return allRidesTotalTime / numCompletedRides;
};