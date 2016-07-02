---
layout: post
title: "Tumblr to Jekyll"
date: 2015-12-30
---
This was my blog on Tumblr...

<img src="/assets/images/blog/tumblr-1.png" alt="Blog Screenshot"/>

But then I made the switch to <a href="https://jekyllrb.com/" target="_blank">Jekyll</a>. Jekyll is a simple, blog aware, static site generator. It is bundled as a Ruby gem, but you only need to know HTML to make your website. You do not even need to know CSS or JavaScript yet unless you wanted to customize your site from the template Jekyll starts you on. Why is this better than using Tumblr (or WordPress)? The main reason I made the switch is the pages load faster since there is no database or content management system (CMS) for each page.

Jekyll is easy to use and easy to deploy. First run `gem install jekyll` in the terminal (assuming you already have Ruby on your computer, which you do if you are using a Mac), then run `jekyll new USERNAME.github.io`. After you run that command switch to the directory and run `jekyll serve` and you will see your site already built on http://localhost:4000. My directory is `thomasvaeth.github.io` because when I push changes to GitHub I can go to that URL and see the site without having to do anything else; however, you are only allowed to do this once per account.

I thought the hardest part of switching was going to be importing my old Tumblr blog posts. Jekyll has <a href="http://import.jekyllrb.com/docs/home/" target="_blank">documentation</a> on how to do this for all of the popular blogging platforms. To import everything from Tumblr I only had to run one command and I had everything in less than a minute. The downside was all of the pictures were still hosted on Tumblr, so I had to go through and save them all in an images folder instead.
