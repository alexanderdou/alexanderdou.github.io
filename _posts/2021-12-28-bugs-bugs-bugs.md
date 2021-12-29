---
layout: post
title: What's so hard about going through Bugs?
date: 2021-12-28
---

Here's a great post about [Embracing the Grind](https://jacobian.org/2021/apr/7/embrace-the-grind/). 

My favorite part is toward the end, where the author describes how they got through 2000 open bug reports. Up until them, nobody could do it—or to be more accurate, nobody *had the appetite* to do it.

> I printed out all the issues - one page of paper for each issue. I read each page. I took over a huge room and started making piles on the floor. I wrote tags on sticky notes and stuck them to piles. I shuffled pages from one stack to another. I wrote ticket numbers on whiteboards in long columns; I imagined I was Ben Affleck in The Accountant. I spent almost three weeks in that room, and emerged with every bug report reviewed, tagged, categorized, and prioritized.


----


This is a great story. It reminds me of Sam, and how one day, there was just... big foam boards all around the office. Sam said, “I had trouble visualizing the flow and logic of what we were talking about \[we were discussing the Product Principle of whether or not Explorations should spin off their own Dataset or not], so I just printed them out.”

I don't know where she got the foam board. I don't know how late she was at the office pinning all of this stuff together. But she did it.


----


At the same company, my manager asked me, "what’s so hard about just sitting in a room and doing it \[it being getting through the backlog of Bugs]?"

Indeed, what is so hard about it? 

- Can’t clear out enough time in your calendar—this is a made up reason. Most of those meetings *probably don’t matter as much as you think they do*. And if you put a 4 hour block on your calendar saying “DO NOT DISTURB—I am getting through the Bug backlog”, my bet is that most people would respect that block

     - And then when you finish, take the rest of the day off. You’ve earned it

- Can’t answer every ticket. Awesome, you don’t have to. When you think about it, there are really three buckets:

  - You understand the bug, and you know who should own the fix. In this case, assign it to that group

    - If you don’t know who should own the fix, take your best guess and ask them to reassign if you’ve gotten it wrong

    - You don’t understand the bug. In this case, enlist a SME, a mentor, or your manager. It is equally all of their jobs. But do them a favor and have a handful of these ready to go in one short 20-25 minute meeting

		- Protip: make sure you dig into their thought process and reasoning so that you can lessen the times that this happens

	- Not enough information to make a determination—when you have this case, ask  clarifying questions to the bug filer, and assign it back to them. Ping them a week later. If they haven’t replied, close the ticket saying “I’m going to assume this has resolved or it’s not as urgent anymore, but please reopen if I’ve gotten that wrong”

		- Things that might fall into this category:

			- Cannot Reproduce the Bug/no repro steps included in the ticket. If this happens, how is an Engineer going to know whether they’ve fixed it or not? Repro steps should be table stakes for reporting a bug

			- It is unclear what the expected resolution is. Is it that an immediate fix for the User experiencing the bug is pushed? Or is it that the Eng team investigate because this is something that might be widespread?


 -----


 Here is a handy dandy Canned Phrase that you can use for dealing with Bug tickets:

 __Closing as `won't do`__

**Decision:**

The product team synced on this and to the best of our understanding, we believe that this should be closed as a "won't do"

**Reasoning:**

- \[Put reasoning here in plain English]
- e.g. We haven't seen enough cases of this warrant a fix. It sounds like there are \[insert X instances per week] of this
- e.g. It doesn't seem like it's THAT painful for \[User Type]. Our understanding is that they have a workaround for this

*As always, we are fallible. We made this decision with our best understanding of the information at hand and are closing this out to give you a firm decision to push back on. If there is information that we don't have or we seem to have ignored that you feel strongly should lead to a different conclusion, please comment on here and let us know*