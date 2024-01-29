---
layout: post
title: Health Insurance Strategy Memo
date: 2020-08-11
---

*Note: I’ve been doing some reading over the last 2 weeks about the state of American healthcare in preparation for my interview with Oscar Health. This is my current understanding of the space, and the strategy I believe we ought to take* 

*Update: This was originally in preparation for my interview with Oscar Health. I believe this is generalizable to a raft of new startups attacking the Big 5 insurance companies (Anthem, Humana, Aetna, Cigna, and UHC). These include companies like Oscar, Decent, and Sana Benefits*

*There are large gaps in my knowledge, experience, and vocabulary—cut me some slack, I’ve only been at this for 2 weeks. The purpose of this memo is to surface diffs from people who know more about those gaps and help me learn*


## 1. The current state of American Healthcare
In terms of world rankings, the US routinely comes up on the lower end. If not in terms of outcome, at least in terms of efficiency of spend.  

* [The US spends more per capita than any other country on healthcare](https://www.rand.org/content/dam/rand/pubs/corporate_pubs/2005/RAND_CP484.1.pdf)
* [US citizens have the highest chronic disease burden](https://www.commonwealthfund.org/publications/issue-briefs/2020/jan/us-health-care-global-perspective-2019)
* [50% of Americans in a survey reported skipping or postponing some type of medical care or prescription drugs in the past year because of the cost](https://www.kff.org/report-section/kaiser-family-foundation-la-times-survey-of-adults-with-employer-sponsored-insurance-executive-summary/)  
  


It’s slow, it’s bureaucratic, and it is incredibly, remarkably resistant to change. The reason for this is that there are incredible amounts of money to lose. In software engineering terms, American healthcare is in [deadlock](https://en.wikipedia.org/wiki/Deadlock). If you start attempting to cut down the costs of healthcare, here is what will happen:  


* Doctors (which heretofore will be referred to by industry standard lingo as “providers”) will yell because they need high salaries to pay back colossal tuitions, loaned at extortionate rates 
* Hospitals (**industry lingo: “provider groups”**) will yell: they need to charge a lot to 1) pay those high salaries and 2) keep administrator salaries appropriately high
* Insurance companies (**industry lingo: “payers”**) will yell because they make money on margin, and lower prices means lower dollar profit
* The government will yell because the government is largely a speakerphone for payers via lobbying


Payers have created enough regulatory capture that it’s incredibly hard for anyone to break in. If you wanted to, here are some of your available entry points:  

* Provider/Provider Group (e.g. Forward): however, if you start here, you’re subject to the whims and incentives of the payer
* Widget and tool seller (e.g. Stel): start here, and you’re subject to the whims and incentives of the provider
* Payer: this is probably the “best” position, but it requires immense capitalization (you’re going to need to be ready to pay $1B in claims per year, at least to start) and you will face intense resistance from the above parties

Finally, the thing to remember is that there’s a huge disconnect between payers and patients. For giant corporations like Blue Shield, Aetna, and UHC, it’s a game of margins. But for these multi-Billion dollar profit companies, the dollar value of a single basis point is enough to bankrupt the typical American household many times over. 

## 2. Corporate DNA: Payers are billion dollar abacuses
I don’t say this to denigrate, but rather to point out strengths and weaknesses. Insurance (of any kind) comes down to actuarial science, which itself is just one giant statistics problem set.

Therefore, payers are:  

* Statistical geniuses- the amount of modeling you have to do to understand the mixture of risk in a population is a multivariate differential equation type of problem that is beyond my ken
* God-tier market makers- in each township, you can get health insurance, and it will likely be done in person. That is an incredible amount of coordination 
* Bureaucrats in the extreme- they generate a tremendous amount of paperwork, and somehow file it all. They also slot really well into government structures, which, in addition to sheer size, is their biggest competitive advantage

Payers are **NOT**: 

 * Performance marketers- this is why insurance brokers exist: they work essentially as an affiliate/influencer ad network for the BCBS KY's of the world
* Product/design/engineering people- this is why I keep getting logged into my insurance account from 3 jobs ago. Payers will spend millions in lobbying and politics, but won’t pay $50 in gift cards for a UX study
* Empathetic- this is why people spend MONTHS unraveling erroneous bills, getting bounced from payer to provider to payer to provider. And that’s if they’re lucky

This mix of strengths and weaknesses in Payer Corporate DNA sets up a prime opportunity for another Payer who wants to take a different approach.


## 3. Oscar’s Opportunity—the stake through the heart of Payers—is taking and capturing Demand via a better Product experience
People hate health insurance companies, but are tied to them out of necessity. Even without the ACA's individual mandate, you can't **not** have insurance in this country: an emergency can bankrupt you—hell, even a routine procedure can bankrupt you.

It’s unclear whether people hate their insurance companies more or their cable company. People hate their insurance companies so much that simply creating a halfway decent experience should be enough to **1) earn retention and 2) get free referrals**. 

1. High retention increases our LTV.
2. Referrals help us lower CAC and  also help us jumpstart new markets in the same way that people BEG Google Fiber to come to their neighborhoods   

However, we’re not in the business of creating a halfway decent experience. We’re in the business of understanding, building, and delivering the best experience possible.


## 4. The Product Experience that Oscar needs to build and how that ties into the fundamentals of a payer
The math doesn’t change: a payer still covers a pool of individuals who have varying levels of risk when they face catastrophic situations. Because Oscar is a payer, it is subject to The First Law of Insurance: profit is predicated on Total Premiums and Total Claims Paid.


**Thus, the 2 Key Questions for Oscar are:**  

1. Via software and consumer products, can we meaningfully lower the median risk in the pool?
2. Via software and consumer products, can we attract and retain more low-risk individuals so that we can shift those premiums to better care for high-risk individuals and still make enough profit to have a viable business for investors?

Focusing on user experience and core job stories helps us with (2): we want to capture low-risk patients, which, broadly, means younger and wealthier individuals. Here are some of the job stories for them:  

* Help me find care fast. If it’s for my child, spouse, or parent, find it faster
* Make my healthcare budgeting as predictable as possible
* Help me understand what’s covered and what’s not 
* Don’t let any billing experience drag longer than 2 weeks. If I have to hire a medical advocate to clean up your billing mess then you have failed

Focusing on user experience helps us with (1): with highly retained, Weekly-Active patients, we can start to shift toward preventative care. We can:  

* Improve medication adherence and follow up rate by building telemedicine tools to cut out a 1-hour long trip for a 5-minute question
* Provide incentives for healthier habits
* Nudge people with reminders (and more importantly, Concierge service) to see the doctor for routine checkups
* Apply consumer app habit-building behavior to good habits (e.g. Strava)



## 5. The 2 Key Questions above have different flavorings in Oscar’s 3 markets
Oscar is interesting because we are focusing on 3 separate markets: Medicare Advantage (MA), Individual, and Employer. 

The MA and Employer markets are new, and while my hypothesis is that the 2 Key Questions are the same, we will need to continue experimenting to see if the Product approach can stay the same. Here are some ways we already know it will have to be different:

MA patients are older. Their job stories include:  

* I need to have a dedicated and consistent care team who knows my medical history
* I need to have care that is resilient to the fact that I am not self ambulatory and don’t have an iPhone 22

The reimbursement model for MA is also different:  

* Revenue comes from the CMS and it’s just fee for service

Employer markets have the Principal-Agent problem: our daily user and our Buyer are not the same person. Buyer job stories include:  

* I want predictable spend for budgeting
* I don’t want YoY increases


## 6. All of the other things Oscar needs to execute on
The five paragraphs above seem nice. They seem simple. As if, “oh, well why didn’t anyone try this before?” People have; the system, as I’ve mentioned before, is remarkably resistant and resilient to reform. 

I believe that the above is the correct approach and the right questions for Product at Oscar to be asking. 

But there are a host of other things that the company will have to do that is out of scope for this memo, but worth listing:  

* We haven’t even talked about Providers. Doctors are increasingly asked to do more with less, faster, thereby reducing highly trained, extremely smart, and exceedingly empathetic people to factory workers. Doctor burnout is on the rise
* There’s more to “Providers” than just doctors: nurses, med techs, admin staff (I don’t mean hospital executives here: I mean the poorly paid ones), EMTs. There are lots of these people who do lots of great work, and they are not paid well or particularly valued
* Healthcare companies operate under the ever-present axe of government regulation: an errant clause in a rider in an addendum in a bill can destroy your business model overnight
* Our customers are real people with real lives and real life-threatening conditions. Delaying on an email can mean that someone doesn’t get authorization for a lifesaving procedure. The butterfly doesn’t have to flap its wings very hard for bad things to happen in Oscar’s business
* Incumbents have some of the smartest, most charming, highest-paid schmoozers this side of George Clooney in Ocean’s 11, and they’ve had decades to carve out defensive positions
* Healthcare is just a mountain of manual paperwork. This is an industry where electronic fax solves a real, daily, high-volume problem. Hiring people to process this is 1) expensive and 2) destroys morale if it goes on too long
* There is no interoperability. Gold is hoarded and gardens are walled in healthcare

## 7. In summary
1. The American healthcare industry sucks. It’s expensive, callous, and disastrous for many Americans who have the misfortune to touch it
2. Reform is hard, bordering on impossible. The system is deadlocked, with nobody wanting to sacrifice their high salaries and profit margins first. Any attempt to do so is met with an army of lobbyists, senators, and fervid anti-Socialists. Being a payer is probably the best position from which to attempt any substantive changes, but requires a huge war chest and an appetite for lawsuits
3. In their Corporate DNA, payers are not marketers. They are not particularly empathetic. They don’t put much stock in storytelling. They are, first and foremost (and preeminently!) statisticians. This results in highly profitable, highly efficient insurance companies that patients absolutely hate
4. People hate their insurance companies, but are forced to stick with them. Providing a halfway decent experience should be enough to sway folks in the same way that I’m just waiting for Google Fiber to come to my neighborhood so I can send a big ol fuck you to Comcast
5. Oscar is still an insurance company, which means that the First Law of Insurance still applies: profit is predicated on Total Premiums and Total Claims Paid
6. For Oscar, the 2 questions we need to explore are:
* Via software and consumer products, can we meaningfully lower the median risk in the pool?
* Via software and consumer products, can we attract and retain more low-risk individuals so that we can shift those premiums to better care for high-risk individuals and still make enough profit to have a viable business for investors?
7. I truly believe we can. There are many analogues in the consumer space that have historically been applied to bending customer habits toward addiction (what we in the consumer app biz call “retention” e.g. Instagram, TikTok, Twitter). I propose we use those for good: let’s apply gamification to building healthy habits; User Centered Design to the user journey of scheduling and paying for a doctor’s visit; and H.264 video compression to telemedicine
8. Oscar is in an interesting spot because they’re crossing the streams between 3 markets: Medicare Advantage (MA), Individual, and Employer. These three markets have different user job stories, care models, and sales models. I think these can work synergistically, but tracking the profitability of each discrete market will be important
