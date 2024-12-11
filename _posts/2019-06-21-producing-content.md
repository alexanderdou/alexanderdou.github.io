---

layout: post

title: "something new- actually producing 'content'"

date: 2019-06-21

---



# Where we are 

**The site is pretty built!** There are definitely things that could be improved:

* [Photography](/pictures/photography.html.) section should have a lightbox, more photos, and better organization by time/theme

* [About me page ](/about/index.html) is empty right now

* [Home page](/index.html) doesn't welcome and sort visitors very effectively



**However, I think this is pretty good progress. So far, I've learned:**

* How Jekyll works. Here's a quick summary:

	* Jekyll is a tool for quickly and easily building a blog-centric website. 

	* You can easily build entirely new pages by creating a new folder within your main directory and creating an index.html (or index.md! It converts automatically!). [This is how a barebones site might look, structure-wise](https://jekyllrb.com/docs/structure/). If you wanted to add an "About Me" page, you would create a new folder in the first tier (e.g. same level as "_posts") and within that, a new index.html

	* It works really nicely with Github Pages, which will rebuild your site with every new commit you push

	* It relies heavily on a feature called "Layouts", which allows you to templatize page structure. Then, your content will be "injected" via Liquid. [Here are the docs on Layouts](https://jekyllrb.com/docs/layouts/)— the [```{{ "{{ content " }}}}``` in the Usage section](https://jekyllrb.com/docs/layouts/#usage) is where your content will be injected

	* [This is a really good step-by-step guide, and the one that I used](http://jmcglone.com/guides/github-pages/)

	* The above guide only goes into making changes on Github.com via your web browser. If you want to play around and test changes before committing, you need to set up a local version of your site on your own personal computer. This means learning Terminal (on Mac) or Command Prompt (Windows). [I used this tutorial from Github](https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll)

* How to use the Command Line Interface (CLI) (aka Terminal) to test changes locally

	* Basic Git commands 

	* [A quick unexpected detour and immediate U-turn out of Vi](/assets/images/zGHQb4O.gif)

	* The terror of a rebase and the importance of git pulling a lot

* How to fiddle around with DNS settings to set up a custom domain



# Now what

* I want to tune up the flow of the site and make the Home page a little more guided for anybody coming to visit

* I want to add another Page about Books, kind of like how [Sam T Davies does](https://www.samuelthomasdavies.com/book-summaries/)

