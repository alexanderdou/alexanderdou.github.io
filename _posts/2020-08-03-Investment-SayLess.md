---

layout: post

title: Investment Memo- Say Less (ft. ModelZoo)

date: 2020-08-03

---



*[Before we begin, the customary asterisks apply](https://alexanderdou.com/2020/07/22/investment-fluent#quick-note-before-we-begin)*  



*Post-publication note: [here's an example of a company sprouting up around applying GPT-3 to business applications](https://magicemail.io/?ref=producthunt). It's likely a coincidence that the use case is exactly the same as Say Less*



*Post-Post-publication note: [here's another](https://www.producthunt.com/posts/kriya-ai-2): this one will generate intro emails for you, source, and send. [The top comment?](https://www.producthunt.com/posts/magic-email#comment-1130609): a request for automatic GPT-3 generated reply messages. This truly is the most boring dystopia we have created*





## Introduction



<blockquote>If I had more time, I would have written you a shorter letter</blockquote>



Say Less is a Chrome Extension that watches as you write your emails and will summarize them. 



It packages selected text and shortens it with an NLP model published by Facebook Research (BART), and then swaps the returned snippet in your email. See it in action here: 



[![We see a Gmail draft. It's a very long email from Hooli. In the top right corner of the draft popup is a black oval icon that says "117 words". When the cursor hovers over the icon the text changes to "Say Less?". The user clicks on it, and highlights most of the email (except for the "Hello" salutation and the "Best," signoff). The highlighted text is all red (instead of the normal blue). When the user let's go, all of the selected text greys out, and there is a tea brewing icon that shows up, indicating that the system is churning. The oval icon says "Loading...". After about 10 seconds, all of the highlighted text is gone, replaced with a much shorter email, approximately 30 words. (As an aside, I tried running this alt-text through Say Less and it.... wasn't great)](http://img.youtube.com/vi/w_oPHcWWAqs/0.jpg)](http://www.youtube.com/watch?v=w_oPHcWWAqs "SayLess Chrome Extension in action")





The company behind this is called ModelZoo<span class="sidenote-number"></span>. They build a service that allows you to easily deploy models to an endpoint. Say Less is a commercial example of a model running on ModelZoo, and it exhibits what you can do with the platform.





<span class="sidenote">**Useful Links**  

[Website link](https://sayless.email/)  

[Twitter](https://twitter.com/_modelzoo_)  

[ProductHunt](https://www.producthunt.com/posts/say-less)  </span>







I will examine ModelZoo from the hypothetical standpoint of: Would I invest $1M into this company and expect it to make money? How much money would you expect it to make? What would need to be true and where would you need to de-risk in order for that outcome to be more likely? Let’s begin.





------





**To: Investors**  

**Re: ModelZoo (re: Say Less)**  

**Aug 3, 2020**  



-------





## Recommendation

We recommend an investment in ModelZoo. They are selling picks and shovels at the forefront of an emerging technology, AI and NLP models. They have a couple of business models open to them and they have a unique core competency around Customer Acquisition, specifically with Earned Media channels. 



There's a world in which ModelZoo can create a marketplace. This platform would allow creators to commercialize AI models, hosted and deployed on ModelZoo's infrastructure. Creators could pay for increased model customziation (e.g. higher quality output from the model). AI researchers would get paid by the app creators per use, and can also pick up bounties for model tuning. 



Investment would be directed in a couple of areas:

    * Beef up the compute power that ModelZoo can offer. This helps ModelZoo compete against other well-capitalized MLOps (Machine Learning Ops) companies

    * Create more "side businesses" (e.g. Say Less), highlighting the commercial opportunities of AI models and earning media placements and organic traffic

    * Test the marketplace hypothesis: manually connect researchers and companies to explore how an AI model might be deployed and trained 





## Competition

There are a couple of flavors of competitor:

* General runtime leasing: Google Cloud Run, Digital Ocean

* ML-flavored runtime leasing: Sagemaker

* Platforms: H2O.ai, KubeFlow

* MLOps: Cubonacci, Algorithmia, FastAPI  



ModelZoo fits into the last bucket, but has a distinct end-consumer bent (featuring "apps" like Say Less). All other competitors in the space are exclusively B2B. 





## Business Model and Monetization

There are two prevailing business models in AI/NLP

1. SaaS tool for Data Science teams. "We are selling a speed and productivity tool that makes deployment and iteration on your model faster". This is a B2B, recurring subscription style business, likely with tiers based on usage. Cubonacci, Google Cloud RUn, and Sagemaker are all examples

2. Access to a proprietary model. "We have developed a model and you can get its output." This is also a B2B business, likely with pre-negoatiated contracts for calendar durations. Watson is an example, as are a raft of healthcare-via-AI startups like Aidoc (AI-powered radiology); AtomWise (AI-powered drug design); Bot M.D. (AI-powered medical transcription and medical assistant)



**The third business model, and what we are making this ModelZoo bet on, is a Marketplace.**



The costs to build up a company around a proprietary model are prohibitive. Hiring a marketing team, a sales team, an Engineering team are disciplines orthogonal to building a fast and accurate neural net. Further, not all models need to be applied or co-opted by large, multinationals. 



By building a Marketplace where AI Researchers represent Supply and app developers represent Demand, ModelZoo can create a large cottage industry. This turns a bulky, cumbersome B2B exercise into a lighter B2C problemset with Customer Acquisition at the forefront. 



ModelZoo already has a core competency in Customer Acquisition. Founder Yoav Zimmerman has a sense for interesting applications of models, with [Shift-Ctrl-F](https://chrome.google.com/webstore/detail/shift-ctrl-f-semantic-sea), an upgrade to CMD-F that searches the page for an answer to your question and [The Twitter Turing Test](https://twitterturingtest.modelzoo.dev/), A quiz game to determine if the Tweet was written by a human or an AI. 





### Risks of the Marketplace approach

In any Marketplace you need to ask how users might “break bad”. We do not want to be in the business of bounties to build better deepfakes. One risk of this approach is heavy, cumbersome manual moderation

