---
layout: post
title: "Let's get down to business"
date: 2019-05-29
---

I have most of the pieces in place. I have a:
* Github Page (personal version)
* Custom domain- alexanderdou.com
* Jekyll running locally so that I can build and test locally

## The workflow looks like:
1. Clone repo using the link on the project page
2. Make changes to the layout files that have been cloned to my computer
3. Test using the `jekyll serve` command ([from this page](https://kbroman.org/simple_site/pages/local_test.html))
4. Repeat Steps 2-3 until I see the changes that I like
5. Add and commit with `git add .` and `git commit`
6. Push with `git push`
* If I fuck up irreperably along the way, just delete the files and re-clone from Step 1

## Examining the Minimal theme
It's been a while, so here's [the link to the Github Page-supported Minimal theme](https://pages-themes.github.io/minimal/)

What I want to do now is dissect it to try and recreate it

* There are three sections here: Header, Content, and Footer. The page is split in two columns, at about 50% width, with the Header and Footer constrained on the left side and the Content on the right. 
* Responsiveness: at roughly 950px width, the sections stack to fit in one column
* Font styling: 
	* Font family is "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif
		*I'm not sure what all the extra stuff past "Noto Sans" means, but that's something to look up*
	* font-size: h1: 28px; h2: 21px; h3: 16.38px; h4: 14px; h5: 11.62px; h6: 9.38px. 
		*Not sure why there are decimals for certain sizes. Oh, maybe it's "em's"?*

That's enough for now, let's try to build these.

Notes for today:
* Got a little hung up on Flexbox, but I found some good examples to follow
* Rabbit-holed a bit around SCSS. I thought maybe I could cheat and use the CSS file from the Minimal repo, but it looks like it imports the css from somewhere, so I don't think I can see it
* I found this other theme that seems to have been built on top of Minimal (it's also called [Minimal](https://github.com/orderedlist/minimal/blob/master/stylesheets/styles.css)). It turns out I CAN see this repo's CSS, so I'm going to look at that tomorrow. 