/*

https://leetcode.com/discuss/interview-question/1123914/Phone-Screen-Front-End-VMWare-Reject

VMWare - Frontend - Came up 4-5 time for this interviewer

This phone screen was for VMWare for Front End.

Very nice interviewer. Helpful and gave hints. All questions in Javascript

First question was about the use of var in a loop that has setTimeOut. This actually has come up 4 or 5 times in my interview loop so far. Every FE dev/engineer should read up on it. The code to know is like this:

What gets logged?

for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 0);
}
Follow up, how to fix it? Does anyone know a way besides changing var?

2nd question. Write a simple debounce function. (You can find this all over the internet)
2nd question follow up, add an immediate flag. I had seen debounce with that implementation before, but didn't learn it. Really struggled but interviewer gave hints. Gotta learn it!!

Both of these questions are pretty standard. I've gotten debounce before too, but so far no one had asked to add the immediate flag.

As always, front end folks, please share your experiences.

for (var i = 0; i < 10; i++){
	let tempI= i;
  setTimeout(function() {
    console.log(tempI);
  }, 0);
}
*/