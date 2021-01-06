/*
In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

Example 1:
Input: N = 2, trust = [[1,2]]
Output: 2

Example 2:
Input: N = 3, trust = [[1,3],[2,3]]
Output: 3

Example 3:
Input: N = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1

Example 4:
Input: N = 3, trust = [[1,2],[2,3]]
Output: -1

Example 5:
Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3
*/

//N = num of players
//fails if each player is listed as A in trust
//fails if each player does not trust town judge, listed at least once as B

//are elems in sorted order?

const findJudge = (N, trust) => {
  if (N === 1 && trust.length < 1) return N;
  //hash map? potential everybody and potential judge
  let everybody = [];
  let judge = {
  };

  let townJudge;
  //check length

  //check A's
  trust.forEach(peoplesTrust => {
    if (!everybody.includes(peoplesTrust[0])) everybody.push(peoplesTrust[0]);
    if (!judge[peoplesTrust[1]]) {
      judge[peoplesTrust[1]] = 1;
    } else {
      judge[peoplesTrust[1]] += 1;
    }
  })

  if (everybody.length >= N) return -1;

  //check B's
  for (let potentialJudge in judge) {
    if (judge[potentialJudge] === N - 1 && !everybody.includes(potentialJudge)) {
      if (!townJudge) {
        townJudge = potentialJudge;
      } else {
        return -1;
      }
    };
  }

  return townJudge ? townJudge : -1;
};

//OPTIMIZED SINGLE ARRAY
const findJudge = (N, trust) => {
  if (N === 1 && trust.length < 1) return N;
  if (trust.length < N - 1) return -1;

  //everybody will be represented by cooresponding indices
  let trustCount = [];

  trust.forEach(peoplesTrust => {
    if (trustCount[peoplesTrust[0]]) {
      trustCount[peoplesTrust[0]]--;
    } else {
      trustCount[peoplesTrust[0]] = -1;
    }
    if (trustCount[peoplesTrust[1]]) {
      trustCount[peoplesTrust[1]]++;
    } else {
      trustCount[peoplesTrust[1]] = 1;
    }

  })

  for (let i = 1; i <= N; i++) {
    if (trustCount[i] === N - 1) return i;
  }
  return -1;
};
