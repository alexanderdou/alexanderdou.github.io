---

layout: post

title: "Change of Plans"

date: 2019-05-28

published: false

---



Yesterday, [I blocked myself](https://knowyourmeme.com/memes/congratulations-you-played-yourself). I created a new branch to house the attempt to replicate the [Minimal theme](https://github.com/pages-themes/minimal). However, I found myself committing changes and refreshing the URL to no avail. It took me longer than I'd like to admit to realize the reason why: I was making changes on the branch, and Jekyll builds from master.



As best I can understand, there's no way to build locally without learning how to use Git / Github from the command line. I thought this would be a step a couple of projects down the line, but I believe that I'm going to have to learn this before I can move on.



Tasks:

* Follow [these instructions](https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll) on how to set up GitHub to run locally

* Learn how to build locally

* Learn how to deploy and merge (I think this is where Pull Requests come in to play) when I'm satistied with the local build

* My developer roommate also told me about "gulp" and that there's a wide world of web developer build tools, so do some research on the surface area of that world



Things I learned today:

* How to get out of vi. I think that's enough for today.



Update from 5/29:

* I think I got the localhost to work! Testing this to see if it shows up in local

* It does!



Log from yesterday:

* Went through the instructions on the above link

* Ran into issues with updating the Ruby gems, which blocked me on step 2 (Install Jekyll using Bundler). From Google, it seems like the problem was that I was trying to update/make changes to the /system's/ version of Ruby, and so the terminal commands were being blocked. The fix for that was installing RVM, which is a package manager that helps to manage the Ruby installation and ostensibly allow me to have my own personal non-system version of Ruby

* Cloned the repo from Github.com browser to my personal computer

* Linked them with origin and upstream

* Made some test changes and pushed to master