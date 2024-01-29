---
layout: post
title: Product teardown- TlDl
date: 2020-07-08
---


### And now for something completely different
These teardowns are an attempt to practice a muscle called "Product Taste™". 
* [Elad Gil calls Product Taste](http://growth.eladgil.com/book/chapter-7-product-management/characteristics-of-great-product-managers/) "the insights and intuition to understand customer needs for a product in a given area"
* [The Basecamp folks describe it](https://signalvnoise.com/posts/1325-acquire-taste) as "developing an eye for the details that matter"

The intent of these teardowns is to go deep on software products and ask "why was this product decision made? What circumstances necessitated that decision? What does that mean for the future decision tree?"

These are all things that PMs have to sniff out and hold in their heads while charting the course with their teams, so let my exploration and mistakes and incorrect conclusions here be an example for others interested in getting into Product


## Tl;Dl — Too Long; Didn't Listen

**Summary**: [social bookmarking for podcasts. Bookmark and annotate important parts of podcasts; share them with others](https://tldl.app/)

**Comps**: 
* delicious / Pinboard
* pocket - pocket allows users to save and highlight snippets of articles. They’ve recently branched out into social sharing, recommendations ("if you liked this article, then you might like [X]”): this drives their subscription business model
* readwise - a piping tool that allows users to unify their note-taking apps. Readwise creates pipes between Pocket, Instapaper, Kindle, Evernote, etc. They make money via subscription

**How will they make money?**
* Unclear (classic startup)
* The app is free, so maybe they’re aggregating demand right now with new features. That might ladder up into a community, access to which they can charge advertisers 
* In-app purchases? Limits for snippets per episode that can be surpassed with a Pro account? I don’t think that’s a winning proposition, since the success of this community will hinge upon the UGC creation rate

**Core job stories**:
* I want to bookmark snippets of a podcast
* I want to search my saved snippets
* I want to annotate snippets with my thoughts at the moment
* I want to tag snippets
* I want to join snippets together
* I want to export snippets to other note-taking/idea-keeping apps

**Growth opportunities**:
* This is a feature that many other podcast apps could easily copy. TL;DL will need to grow their feature set to be at parity with competing apps. They’ll also need to jumpstart the community aspect to attract and retain users, kind of like a Pinterest-style approach 
* It appears to be recording the timestamp, correlating that timestamp to the episode ID, and appending the annotation to it. That’s brittle, if tools like dynamic ads become more prevalent (unless dynamic ads respects the time slow of the original ad, which I wouldn’t expect to happen)
* Fighting against consolidation of podcast networks. Spotify + Ringer + Gimlet + Parcast is a big force to fight against, especially since Spotify signed Joe Rogan exclusive. TL;DL is a productivity/workflow enhancement podcatcher app built on top of the (previously) open and free world of podcasts, but breaks if podcasts become proprietary to apps

**Questions (that can be answered quantitatively)**:
* [Q- Question] Are people finding value in the app? And if so, what value?
    * [D- Data] Number of snippets per episode
    * [D] Reopen rate of snippets
    * [D] Share rate of snippets
    * [D] “Uptake” rate of shared snippets: are shared snippets converting into new downloads?
    * [D] Top-line lagging indicators: WAU and weekly retention rate
* [Q] Are the pitch and framing landing?
    * [D] App download funnel conversion rates
    * [D] Count of core actions performed in app (e.g. bookmarked, shared, converted)
* [Q] Are users connecting with each other around shared interests?
    * [D] How many people are sharing the same moments?

**Questions (that can only be answered qualitatively)**:
* [Q] Is this a good enough substitute for existing podcatcher apps?


In the next part we'll dig deeper into their UX/UI. Right now they're [iOS only](https://apps.apple.com/us/app/tl-dl-too-long-didnt-listen/id1483572885)


**PS, I love their icon:**
![TLDL app icon Mona Lisa with MS Paint headphones painted on her enigmatic smile](/assets/images/mona.png)



