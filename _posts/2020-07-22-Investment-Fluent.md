---
layout: post
title: Investment Memo Practice- Fluent
date: 2020-07-22
---

***Quick note before we begin:***
* This is purely a hypothetical exercise. I do not know if the company/product/piece of software featured in this article is looking for investment
* The purpose of this Investment Memo is for me to [deliberately practice](https://commoncog.com/blog/so-good-they-cant-ignore-you/#dodeliberatepractice) my [Product Taste](https://www.evernote.com/l/ArLTsgomZARKW5ci-eTDQQ0XOhN62MARpFY). It is an effort in understanding the Product positioning, Design decisions, Engineering tradeoffs, and possible branches that this iteration of a Product represents
* This is not a rant, or a critical “take” on the miracle that is any successful launch of software. The team—this collection of human beings—has created something where there was once nothing, and that should be celebrated. My default posture and tenor in this writing is intended to be “dispassionate and earnestly asking genuine questions”. Any departure from that should first be viewed as a mistake in my editing and then be vociferously called out so that I can revisit my wording
* If I got something wrong (which is extremely possible—verging on likely depending on my confidence score), please please please point it out to me (nicely!) at [@alexander_dou](https://twitter.com/alexander_dou). I'll learn something new, and that's a Good Thing


## Introduction
Fluent is a Chrome Extension that substitutes French words into the page you’re currently reading. Their Product Thesis is that by increasing your exposure to French vocabulary words in situ, you can become more comfortable with the lanauge. I’ve been using Fluent on and off for a handful of months. 

**Useful Links**
[Website link](https://www.usefluent.co/)
[Public-facing product roadmap](https://feedback.usefluent.co/)
[Twitter](https://twitter.com/usefluent)
[ProductHunt](https://www.producthunt.com/posts/fluent-2)

I will examine Fluent from the hypothetical standpoint of: Would I invest $1M into this company and expect it to make money? How much money would you expect it to make? What would need to be true and where would you need to de-risk in order for that outcome to be more likely? Let’s begin.


**To: Investors**
**Re: Fluent**
**Jul 22, 2020**

## Recommendation
At the moment, we do not recommend an investment in Fluent. There are too many unproven hypotheses and open questions with large amplitude to be confident in an investment, such as:
* Unclear if users spend an appreciable amount of their days in front of a web-browser based extension (vs native mobile apps like Twitter/IG, desktop apps like Slack, or untranslateable sites like Netflix)
* Unclear if proficiency and engagement in Fluent increases users' proficiency in French
* Unclear how quickly the team can expand to other Verticals such as Speaking/Listening exercises; other languages; other devices


## Competition
Language learning is a broad market, and competitors can best be thought of in terms of their approach, which then informs their business model:
* Access to in-person tools, dictionaries, and lessons (e.g. Rosetta Stone, local college night courses) 
* Access to virtual tools, dictionaries, and lessons (e.g. Duolingo, FluentU, Babbel)
* Access to native speakers (e.g. Cambly, iTalki) 
* Immersion (e.g. Fluent, Toucan, Language Learning Netflix)

Rosetta Stone is, by far, the most successful and recognizable commercial brand in this space. However, its high price point and brand relegate it to an older, professional persona. 

## The Space
The most useful way to think about learning a language is by breaking it down into 4 main functional skills: Read/Write/Listen/Speak.

There are other elements, of course—idioms, cultural touchpoints, slang, etc—but these are the functional skills. 

We can also think about language proficiency as gathering enough knowledge to satisfy these heuristics:
* I can read a [X]-grade level article
* I can be dropped in a [this language]-dominant area and survive
* I can talk to a grandparent who only speaks [this language]
* I can have a business discussion with someone who speaks [this language] 

![Hand-drawn 2-axis chart. X-axis shows Read, Write, Listen, and Speak going left to right; Y-axis shows Group to Solo from top to bottom. Dots on the chart show selected competitors: Duolingo is in the bottom left because they target Write/Solo. FluentU is in the bottom right at Listen/Solo; Rosetta Stone is bottom-right-most at Speak/Solo. College Classes are at the top right with Speak/Group. There is a stick-figure in the bottom left, which symbolizes a beginner language learner. Dotted arrows connect the stick-figure to each of the dots. For College Classes, the dotted arrow makes stops at Read/Group, Write/Group, Listen/Group, before ending at Speak/Group. For Rosetta Stone, the dotted arrow makes stops at Read/Solor, Write/Solo, Listen/Solo, and ends at Speak/Solo](/assets/images/languages.png)

As you ladder up in the heuristics, you progress from needing to focus mostly on Reading to needing to focus mostly on Speaking. Your practice also progresses from being able to be done Solo to needing to be done in a Group

Currently, Fluent targets the Read/Solo quadrant:

![Same chart as above, but with Fluent included. It exists in the bottom-left corner, at Read/Solo](/assets/images/languages_fluent.png)


## Business Model
At this point in time, Fluent does not appear to have monetization. The models in the industry that they can choose from, however, are:
* Recurring monthly subscription for personalized accounts (e.g. Duolingo, Toucan)
* Single purchase of a complete software package (e.g. Rosetta Stone DVDs)
* Purchase “top-up” minutes to chat with a live partner in a Marketplace (e.g. Cambly or Busuu)
* B2B web translation powered by students (e.g. Duolingo)
* One-off certification purchases
* Ads for free version (e.g. Duolingo)

The most likely evolution in business model looks like:
1. [Bootstrap] Build Daily engagement and test Outcomes (i.e. does immersion help users become better at reading French?) in Product’s current iteration
2. [Bootstrap or ad-supported free version, depending on funding] Track progress with User Accounts; build a dedicated desktop/mobile web experience to run spaced repetition exercises for users
3. [Recurring monthly subscription] If users are seeing success in French literacy, convert some portion of them to Paid Subscription
4. [Layer on other models where the Product can support]
    1. In order to target Listen/Speak, connect users together and charge a per-session fee
    2. Offer courses that prep students for certifications

And the set of metrics they’ll use to pilot each stage:
1. Topline metric: count of Daily Users who hover over at least n words
2. Metrics: Installs; Engagement (probably a middle-funnel Engagement metric like 'clicks on pronunciation'); Median difficulty progression rate (i.e. how quickly do users ramp up the difficulty)


## Risks and open questions
There are a considerable number of open questions that we need to test to be more sure about an investment. In no particular order:
* Does the Product approach here—namely, building vocabulary and familiarity around masculinity and feminity of nouns—move people to greater language mastery? 
* Is a web-browser extension the best place to drive meaningful, repeated, and growing engagement with users?
    * How often are people truly reading articles on their desktop web browser? Notably, browser extensions do not run on mobile. At home, people are more likely to be looking at their phones (e.g. Netflix, Twitter, FB, Instagram). And at work, there may be security or workflow-impeding concerns with extensions that replace words in internal docs
* How easily can the current architecture be expanded to translate entire sentences?
    * Currently, the product appears to be limited to single words or adj + noun pairings
    * Can this implementation be easily enhanced to rebuild entire sentences with grammar rules?
* Can it handle slang? How robust is the source dictionary?
    * Currently, the product “lookups” the source word in a dictionary file, which keeps the translation extremely fast 
* How quickly can the team build other languages? 
    * How large is the difference in complexity for implementing other Indo-European languages vs Chinese/Japanese? 



