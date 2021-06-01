/*

https://leetcode.com/discuss/interview-question/776553/Amazon(AWS)-oror-FEE-oror-Phone-Interview-August-how-to-solve-it

FEE - phone screen - Aug 2020

// Implement a function that takes two parameters: an Object and a Path.
// It returns the value of the object following path
// Please Implement in JavaScript

get({ developer: "Software Engineer" }, "developer"); // => 'Software Engineer'
get({ developer: { firstName: "Tom", lastName: "Cruz" } }, "developer.lastName"); //=>'Cruz
get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]"); //=>0
get([{ developer: "Tom" }, [0, null]], "[1][1]"); //=>null
*/
