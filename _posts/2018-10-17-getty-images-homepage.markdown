---
layout: post
title: "Getty Images Homepage"
date: 2018-10-17
description:
image: "/assets/images/posts/getty-images-homepage.jpg"
---
<p>The website for Getty Images is currently undergoing a complete redesign. The company is rolling the build out in phases, so only a few pages have been redeveloped so far. It has been a lot of work, but everything is bringing the brand in the right direction.</p>

<hr/>

<h2>The Homepage</h2>
<p>I really wanted to learn and use something new for the homepage and the design gave me the perfect opportunity to use CSS grid. I worked closely with Leina Leung during prototyping and we came up with a grid that worked across all browser sizes. CSS grid is still not supported by all browsers, so a fallback was written that changes the layout to a grid made of float elements. The only main difference between the protype and production code is <code>@supports</code> was ditched in favor of using a media query specific to IE.</p>

<h3>Prototype</h3>
<div class="flex-vid">
  <iframe height="575" scrolling="no" title="CSS Grid for Getty Images" src="//codepen.io/thomasvaeth/embed/mjLLKO/?height=575&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;"></iframe>
</div>
<p>The demo is best viewed with the SCSS tab closed and the zoom set to 0.5x or 0.25x.</p>

<h3>Production</h3>
<div class="browser">
  <span class="browser__dots"></span>
  <figure class="browser__img">
    <img src="/assets/images/posts/getty-images-homepage-1.jpg" alt="Getty Images Website"/>
  </figure>
</div>

<hr/>

<h2>The Editorial Page</h2>
<p>I also got to build the page for editorial images. The page uses a responsive masonry grid to show events in one to five columns depending on the browser size. The individual articles have a linear gradient overlay to make the titles easily readable and an opacity overlay that transitions on hover.</p>

<div class="browser">
  <span class="browser__dots"></span>
  <figure class="browser__img">
    <img src="/assets/images/posts/getty-images-homepage-2.jpg" alt="Getty Images Website"/>
  </figure>
</div>

<hr/>

<div class="browser">
  <span class="browser__dots"></span>
  <figure class="browser__img">
    <img src="/assets/images/posts/getty-images-homepage-3.jpg" alt="Getty Images Website"/>
  </figure>
</div>
