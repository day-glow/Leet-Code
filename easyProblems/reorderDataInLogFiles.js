/*
You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.



Example 1:

Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
*/

const reorderLogFiles = (logs) => {
  const digitLogs = [];
  const letterLogs = [];

  //helper functions
  const body = s => s.slice(s.indexOf(' ') + 1); // get the body after identifier
  // if body same then compare identifier
  const compare = (a, b) => {
    const n = body(a).localeCompare(body(b));
    if (n !== 0) return n;
    return a.localeCompare(b);
  };


  for (let log of logs) {
    if(log.split(" ")[1].charAt(0) >= '0' && log.split(" ")[1].charAt(0) <= '9'){
            digitLogs.push(log);
        } else {
            letterLogs.push(log);
        }
  }
  return letterLogs.sort(compare).concat(digitLogs.sort((a, b) => a - b));
};