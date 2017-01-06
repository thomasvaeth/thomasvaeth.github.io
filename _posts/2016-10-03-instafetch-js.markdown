---
layout: post
title: "Instafetch.js"
date: 2016-10-03
description: Instafetch.js is a 10KB JavaScript plugin for the Instagram API using fetch instead of jQuery built by Thomas Vaeth of Urban Influence in Seattle, WA.
image: http://thomasvaeth.com/assets/images/misc/instafetch.jpg
---
I have nothing against jQuery. It does exactly what it’s supposed to do. jQuery simplifies a lot of the complicated things in JavaScript, so it is easier to use (and we do use it here at Urban Influence).

But why use an 87KB file only to write more JavaScript that is only being used for AJAX to return some JSONP? Every project doesn’t need it. So let’s use fetch instead to hit the endpoints of the Instagram API.
<p data-height="575" data-theme-id="0" data-slug-hash="EgwRWo" data-default-tab="result" data-user="thomasvaeth" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/thomasvaeth/pen/EgwRWo/">Instafetch.js Example</a> by Thomas Vaeth (<a href="http://codepen.io/thomasvaeth">@thomasvaeth</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
<h2>The Fetch API</h2>

The Fetch API provides a `fetch()` method defined on the window object, which can be used to perform requests. `fetch()` returns a Promise that can be used to retrieve the response of the request. It is an easier way to make web requests and handle responses than using a XMLHttpRequest.

<script src="https://gist.github.com/thomasvaeth/1fd52c4e5975136c7b10e31f877edadb.js"></script>

However, the Fetch API only supports JSON, but what about JSONP? The Instagram API requires JSONP because it is a cross-domain request. <a href="https://github.com/camsong/fetch-jsonp" target="_blank">Fetch-JSONP</a> is being used as a dependency to allow JSONP data-types while using the Fetch API.

Now we're good to go on most browsers except for Internet Explorer. It's pretty common for something not to work on IE and having to find a workaround, so this is no different from other things we build. The Fetch API returns a Promise, but IE doesn't know what a Promise is. You will see "Promise is undefined" in the console and the Instagram feed will be empty. We're using the <a href="https://github.com/stefanpenner/es6-promise" target="_blank">ES6-Promise Polyfill</a> to support IE until `fetch()` is supported. So that's where the plugin goes from 3KB to 10KB (but it's still less than 87KB).

<h2>Download</h2>

Instafetch.js is currently available on NPM, Bower, and GitHub.

<h2>How to Use</h2>

The Instagram API uses the OAuth 2.0 protocol, so you're going to need an access token. The easiest way to get your access token is login to Instagram on your browser and generate one on <a href="http://instagram.pixelunion.net/" target="_blank">Pixel Union</a>.

Instafetch.js will look for an element with the ID of instafetch by default. The target element can be changed when initializing the plugin.

The plugin also allows you to set the number of items to return from your feed and if you want to include the captions.

<h2>Demo &amp; Documentation</h2>
<a href="http://thomasvaeth.com/instafetch.js/" target="_blank">Demo</a>

<a href="https://github.com/thomasvaeth/instafetch.js/blob/master/README.md" target="_blank">Documentation</a>
