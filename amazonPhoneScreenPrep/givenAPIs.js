/*

https://leetcode.com/discuss/interview-experience/336727/amazon-front-end-engineer-seattle-reject

FEE Seattle - Aug 2019

Interview One:
Assume you are given two APIs List<Person> getFriends(Person); and List<Order> getOrders(Person);. Design a feature like Amazon's recommendation system, except fill it with orders of a person's friends.
Now what if multiple people ordered the same thing, and we want to return the orders from most purchased to least purchased?
Now what if someone purchased multiple of the same item and we only want one copy of that counted?
Now what if we want to extend this to friends of friends?

Interview Two:
100% Technical
The interviewer showed me some simple design that was created in a webpage, and stated 'Assume you are given an API that uses an AJAX call to return a list of labels. Using HTML/CSS/JS format them as seen on the screen.'

Now I want to add a button within each cell to remove a label from the screen
Now I want to be able sort the labels, how would I do that? How is this effected by the removing of the labels?
You now notice that what is being returned from the AJAX call is not the same as before, what steps do you take to solve the problem?
I asked if I could use React, and she seemed okay with it, as long as I could explain what I would have to do if I wasn't using React. I ended up using a somewhat blend between normal JS and React, as it seemed she did not entirely understand the React code. Similarly, it seemed as if the interviewer was typing everything I had written on the whiteboard word-for-word.

Interview Three:
100% Technical
The interviewer provided a sheet of paper that had some JSON data on it, and a small diagram of what the data should look like. I was asked to recreate the diagram and fill it with the JSON data as applicable. The diagram showed a table, and the interviewer said that it should be recreated as such.

Similar to the last one, I asked if I could use React. This interviewer seemed more open, and so I continued as such and he asked any questions about something he was uncertain about. Because I used a framework, it took a lot more writing probably than if I had used plain JS, and the interviewer said this was common for people who use frameworks when answering the question. I was unable to completely finish, but he had asked me if I had to go back and do it again would I have used a framework again and what things I might have done differently.

Recommendations:
Review HTML table elements
Library like jQuery ok, but not frameworks like React.
HTML/CSS from memory on a whiteboard was challenging

Assume you are given two APIs List getFriends(Person); and List getOrders(Person);. Design a feature like Amazon's recommendation system, except fill it with orders of a person's friends.
Now what if multiple people ordered the same thing, and we want to return the orders from most purchased to least purchased?
Now what if someone purchased multiple of the same item and we only want one copy of that counted?
Now what if we want to extend this to friends of friends?

With respect to the three questions, here is how I would go about it:

You could tackle all three birds in one stone with the following, not sure if it's the most impactful way though since the following complexities take suit:

RT: O(NumberOfPeople * Max(MaxNumberOfFriends, MaxNumberOfOrders)
SC: O(MaxOfFringe + MaxOfUniqueOrders)

var createMap = person => {
    let freq = new Map(), visited = new Set(), fringe = new Array();
    fringe.push(person);
    while(fringe.length  >0) {
        let tmp = fringe.shift();
        visited.add(tmp);
        for(const friend of getFriends(Person)) {
            if(!visited.has(friend) visited.add(friend)
        }
       let uniqueOrders = new Set();
       for(let order of getOrders(tmp) {
          if(!uniqueOrders.has(order)){
           freq.set(order, map.has(order) ? map.get(order) + 1 : 1);
           uniqueOrder.add(order);
        }
       }
      }
      return freq;
}

I imagine you would start with a person and then iterate through all their friends and get their orders. You could start by throwing all the orders in a list and then use that list to populate the recommendation list. You could count the number of occurrences with a HashMap <Order, Integer>. To only count one copy we could just store it in a HashMap<Order, List> and just not add duplicates to Person List. Extending to Friend of Friends would be as simple as adding another loop into the mix. I imagine they were looking for you to start with something like this:

List orders;
for(Person friend : getFriends(Person))
for(Order friendOrder : getOrders(friend))
orders.add(friendOrder);

And refining from there with the HashMaps and adding the Person friendofFriend : getFriends(friend) logic into the mix as you go
*/