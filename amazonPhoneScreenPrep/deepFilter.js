/*
https://leetcode.com/discuss/interview-question/328553/Amazon-or-Phone-Screen-or-Deep-Filter

Amazon FEE Seattle - Nov 2019

Position: Front End Engineer at Amazon Web Services
Locaton: Seattle

Given an object and a filter function, write a function that will go through and filter the object, then return a filtered object

Example 1
Input Object

{
  a: 1,
  b: {
   c: 2,
    d: -3,
    e: {
      f: {
        g: -4,
      },
    },
    h: {
      i: 5,
      j: 6,
    },
  }
Input Function
const filter = (n) => n >= 0

Output

{ a: 1, b: { c: 2, h: { i: 5, j: 6 } } }
Example 2

Input Object

{
  a: 1,
  b: {
    c: 'Hello World',
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: 'Good Night Moon',
  },
}
Input Function
const filter = (s) => typeof s === 'string'

Output

{ b: { c: 'Hello World', h: 'Good Night Moon' } }
*/