/*

https://leetcode.com/discuss/interview-question/343683/Google-or-Phone-screen-or-Bingo-Card

Frontend Eng - July 2019

During my phone screen, it was basically the interviewer introduced themselves and we chatted for a bit about what they do for the company. He asked me a few unrelated questions aside from DS and Algo and then we went into the coding portion.

Do you know about CSS/font classes? If so explain how they work and a time where you have used them.
My answer: basically we had a convo about libraries such as font-awesome and how you attach them to html and how they are flexible throughout the DOM.

Is it better to use one font library or multiple ones? Explain your answer?
My answer: I just explained how loading multiple libraries and sifting through them for specific elements would be efficient on load time which is what Google values and that most enterprise applications from my experience sticks to one specific library and components on websites and applicatiions. They only wanted to hear about how it slowed the DOM down.

Given a 5x5 grid, create a bingo card with the folliwing condtions.
-the middle square in the middle column must have a free space
-it must generate random numbers per column as follows below:
-col1 1-15
-col2 16-30
-col3 31-45
-col4 46-60
-col5 61-75

so essentially

2 17 37 49 62
5 22 41 52 70
6 23 U 59 68
9 18 42 60 69
8 29 40 55 63

According to my interviewer this was a 45 min type question and they just wanted to see how I thought and that most people get stuck on the conditions. I was drawing a blank originally but then things started to click. I used a mixture of brute force for the conditions, used recursion for the randon number generator and put this in a map object to return the size in about 17 mins. Started walking through my code and started troublshooting through the bugs but ran out of time. After that It was more chit chat about the perks of working there, hows the food, some questions about my resume and that was it. What do yall rate the difficulty of this problem?? All comments are welcomed.
*/