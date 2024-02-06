---
layout: post
title: "Didn't quite get to what I wanted to yesterday"
date: 2019-06-12
published: false
---

# What happened yesterday
So, I ran into an issue yesterday where installing the theme [as per the docs](https://github.com/pages-themes/minimal) didn't result in the theme changing on the site, either locally or publically. 

I tried:
* Installing the Minimal theme on local (after downloading the relevant gems)
* Pushing to Github and seeing if it updated there
* Installing the Minima theme
* Changing the theme on Github with the [Jekyll Theme Chooser](https://help.github.com/en/articles/adding-a-jekyll-theme-to-your-github-pages-site-with-the-jekyll-theme-chooser)

None of them worked

# What we'll do today
Today I'll look into the documentation on Jekyll [here](https://jekyllrb.com/docs/themes/)

I'll also try to reason out how the theme might be being applied (clearly it has its own CSS, so could the CSS I set up originally be interfering with it? I tried removing the CSS in the <head> of the index.html on my Home page, but that only stripped any styling)

I'll also Google!

If none of that works I'll just ask my roommate. Easy peasy


# Updates
* Huzzah! I figured it out. In [these docs](https://jekyllrb.com/docs/themes/) I saw that Jekyll will look "to your site's content before looking to the theme’s defaults for any requested file in the following folders": /assets, /_layouts, /_includes, and /_sass. Because I had stuff in /_layouts, it was looking to those as the default. I would think that they would include that in there...
* I had some merge conflicts from changing the site theme with the Jekyll Theme Choose yesterday that I ended up kind of forcing through, and now we have another error where "alexanderdou.com redirected you too many times". Always another struggle. 
* So, I did what the docs called "[converting gem-based themes to regular themes](https://jekyllrb.com/docs/themes/#converting-gem-based-themes-to-regular-themes)" and copied all of the theme layouts and assets over to my blog files. I think we're all good here: we should be rolling smoothly on Minimal from now on. Now we'll see what happens if I want to try moving to [hyde](https://github.com/poole/hyde)
* As for the DNS issue... it appears to have resolved itself. Damn it. I mean, I'm glad, but still it's frustrating