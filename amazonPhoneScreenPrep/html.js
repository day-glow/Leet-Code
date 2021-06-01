/*
https://leetcode.com/discuss/interview-question/573751/Amazon-FEE-Phone-Screen

40 min call with senior developer, 1 LP Question only.

Question
Given a HTML structure

<form id="parent">
	<input type="text" name="foo.bat" />
	<input type="text" name="foo.bar.baz" />
	<input type="text" name="fizz" />
</form>
Write a function (in JS) that returns an object with values of text inputs in the form id passed to it.
For eg:

getValues("parent") should return object like

{
	"foo": {
		"bat" : _____, //Actual value of 1st text box
		"bar" : {
			"baz" : _____ // Value of 2nd text box
		}
	},
	"fizz" : _____ // Value of 3rd text box
}
*/
