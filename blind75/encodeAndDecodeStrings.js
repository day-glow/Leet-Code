/*
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:

string encode(vector<string> strs) {
  // ... your code
  return encoded_string;
}
Machine 2 (receiver) has the function:
vector<string> decode(string s) {
  //... your code
  return strs;
}
So Machine 1 does:

string encoded_string = encode(strs);
and Machine 2 does:

vector<string> strs2 = decode(encoded_string);
strs2 in Machine 2 should be the same as strs in Machine 1.

Implement the encode and decode methods.

Note:
The string may contain any possible characters out of 256 valid ascii characters. Your algorithm should be generalized enough to work on any possible characters.
Do not use class member/global/static variables to store states. Your encode and decode algorithms should be stateless.
Do not rely on any library method such as eval or serialize methods. You should implement your own encode/decode algorithm.
*/

//native javascript approach
//TC- O(n)
//SC- O(1)
var encode = function(strs) {
  if (!strs.length || !strs || !strs[0].length) return strs;
  return strs.join('**-1');
};
//TC- O(n)
//SC- O(n)
var decode = function(s) {
  if (!s || !s.length || !s[0].length) return s;
  return s.split('**-1');
};

//second pass:
const encode = strs => (!strs || !strs.length || !strs[0].length) ? strs : strs.join('9*12th^4562a');
const decode = s => (!s || !s.length || !s[0].length) ? s : s.split('9*12th^4562a');

//second pass (chunk transfer encoding approach):
const encode = strs => {
  if (!strs || !strs.length || !strs[0].length) return strs;
  let stringBuilder = '';
  for (let i = 0; i < strs.length; i++) {
    let curr = strs[i];
    let currLen = String(curr.length);
    if (currLen.length < 4) {
      let numZeros = 4 - currLen.length;
      while (numZeros) {
        currLen = '0' + currLen;
        numZeros--;
      }
    }
    stringBuilder += `*983&${currLen}${strs[i]}`;
  }

  return stringBuilder;
};

const decode = s => {
  if (!s || !s.length || !s[0].length) return s;

  let p = 0;
  let decodedStrs = [];
  let curr = '';
  let count = 0;

  while (p < s.length) {
    curr += s[p++];
    if (curr === '*983&') {
      curr = '';
      count = Number(s.substring(p, p + 4));
      p += 4;
      decodedStrs.push(s.substring(p, p + count));
      p += count;
    }
  }
  return decodedStrs;
};