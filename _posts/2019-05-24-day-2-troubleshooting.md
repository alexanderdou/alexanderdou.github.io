---
layout: post
title: "day 2: troubleshooting"
date: 2019-05-24
published: false
---

# Results of yesterday
* If you go to [https://alexanderdou.github.io/](https://alexanderdou.github.io/) on a new browser session (e.g. Incognito or Guest mode), it takes you to the Github Page, but when I go to that link on my logged-in Chrome session, it still redirects to alexanderdou.com with the Squarespace. This looks a lot like caching issues I've seen in the past
* If you go to [http://alexanderdou.com](http://alexanderdou.com) in a new browser session, it shows a Github 404, which is progress! I'll look into how to fix that today

# Action items
* Read documentation on how to set up a Github Page for alexanderdou.com
  * As per instructions here: https://help.github.com/en/articles/setting-up-an-apex-domain
  * Confirmed via dig in Terminal that the IP addresses are working
  * Set up custom domain on the Github side as well, but I'm not sure if that will do anything...
  * Changed CNAME record on DNS side
  * Huzzah it worked 🎉!
* See if blasting the cache helps the first issue
* Create posts without going to this editor (maybe command line?)
* Add pictures in easily (AWS? Look to see if that's free for low usage)
* Fill out CV page
  * There's also an issue where the header on the CV page looks smaller than all the other pages when viewing on my phone. I'll look into that too
  
