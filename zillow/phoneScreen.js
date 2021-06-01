/*
 * validate a piece of python code:
 *  1. First line of code has no indent
 *  2. If there is a control statement, the next line must have more indents
 *     - feel free to assume that any line that ends in a colon ":" is a control statement
 *  3. Code in the same block needs to have the same amount of indent
 *
 *
 * invalid code
 * if True:
 *     print "hi"
 *         print "bye"
 *
 * valid code:
 * if True:
 *     print "hi"
 * if True:
 * print "hi"
 */

/*
Jacki's notes:
input - string
output - boolean (is valid)
single line - \n
indents - '  ' (4 spaces)
controls - ( if, while, for ) ends in ':'

 * if True:
 *     print "hi"
 *     print "bye"

iterate through each line,
validating each rule
iterate through,
variable to keep track of indents

time O(n) space O(1)
*/

var countIndentAtBegOfLine = funtion() {

};

var isValid = function(str) {
  if (!str || !str.length) return true;
  let linesArr = str.split('\n');
  let numIndents = 0; //1
  for (let i = 0; i < linesArr.length; i++) {
    const currLine = linesArr[i];
    const currIndentCount = countIndentAtBegOfLine(currLine);
    if (currIndentCount > numIndents * 4 || currIndentCount % 4 !== 0) return false;
    if (currIndentCount < numIndents * 4) numIndents = currIndentCount / 4;
    if (currLine[currLine.length - 1] === ':') {
      numIndents++;
    }
  }
  return true;
};