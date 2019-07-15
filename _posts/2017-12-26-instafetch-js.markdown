---
layout: post
title: "Instafetch.js"
date: 2017-12-26
description: "A 6KB JavaScript plugin for the Instagram API using fetch instead of jQuery."
image: "/assets/images/posts/instafetch-js.jpg"
---
<p>I have nothing against jQuery. It does exactly what it’s supposed to do. jQuery simplifies a lot of the complicated things in JavaScript, so it is easier to use (and I do use it here on this website).</p>
<p>But why use an 87KB file only to write more JavaScript that is only being used for AJAX to return some JSONP? Every project doesn’t need it. So let’s use fetch instead to hit the endpoints of the Instagram API.</p>
<div class="flex-vid">
  <iframe height="575" scrolling="no" title="Instafetch.js Example" src="//codepen.io/thomasvaeth/embed/EgwRWo/?height=265&theme-id=0&default-tab=result&embed-version=2" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;"></iframe>
</div>

<hr/>

<h2>The Fetch API</h2>
<p>The Fetch API provides a <code>fetch()</code> method defined on the window object, which can be used to perform requests. <code>fetch()</code> returns a Promise that can be used to retrieve the response of the request. It is an easier way to make web requests and handle responses than using a XMLHttpRequest.</p>
<pre>
<code>
fetch(url, options).then(function(response) {
  // handle HTTP response
}.catch(error) {
  // handle network error
});
</code>
</pre>
<p>However, the Fetch API only supports JSON, but what about JSONP? The Instagram API requires JSONP because it is a cross-domain request. <a href="https://github.com/camsong/fetch-jsonp" target="_blank">Fetch-JSONP</a> is being used as a dependency to allow JSONP data-types while using the Fetch API.</p>
<p>Now we’re good to go on most browsers except for Internet Explorer. It’s pretty common for something not to work on IE and having to find a workaround, so this is no different from other things we build. The Fetch API returns a Promise, but IE doesn’t know what a Promise is. You will see “Promise is undefined” in the console and the Instagram feed will be empty. We’re using the <a href="https://github.com/taylorhakes/promise-polyfill" target="_blank">Promise Polyfill</a> to support IE until <code>fetch()</code> is supported. So that’s where the plugin goes from 3KB to 6KB (but it’s still less than 87KB).</p>

<hr/>

<h2>Download</h2>
<p>Instafetch.js is currently available on CDNJS, NPM, Bower, and GitHub.</p>

<h3>CDNJS</h3>
<pre>
<code>
&lt;script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/instafetch.js/1.5.0/instafetch.min.js"&gt;&lt;/script&gt;
</code>
</pre>

<h3>NPM</h3>
<pre>
<code>
npm install --save instafetch.js es6-promise
</code>
</pre>
<pre>
<code>
require('es6-promise').polyfill();
require('instafetch.js');
</code>
</pre>

<h3>Bower</h3>
<pre>
<code>
bower install instafetch.js
</code>
</pre>
<pre>
<code>
&lt;script type="text/javascript" src="path/to/bower_components/instafetch.js/dist/instafetch.min.js"&gt;&lt;/script&gt;
</code>
</pre>

<h3>GitHub</h3>
<p><a href="https://github.com/thomasvaeth/instafetch.js" target="_blank">Download</a> the script or the minified version in the <code>dist</code> folder.</p>
<pre>
<code>
&lt;script type="text/javascript" src="path/to/instafetch.min.js"&gt;&lt;/script&gt;
</code>
</pre>

<hr/>

<h2>How to Use</h2>
<p>The Instagram API uses the OAuth 2.0 protocol, so you're going to need an access token. The easiest way to get your access token is login to Instagram on your browser and generate one on <a href="http://instagram.pixelunion.net/" target="_blank">Pixel Union</a>.</p>
<pre>
<code>
&lt;div id="instafetch"&gt;&lt;/div&gt;
</code>
</pre>
<pre>
<code>
&lt;script type="text/javascript"&gt;
  instafetch.init({
    accessToken: 'ACCESS TOKEN',
    target: 'instafetch',
    numOfPics: 20,
    caption: false
  });
&lt;/script&gt;
</code>
</pre>
<p>Instafetch.js will look for an element with the ID of instafetch by default. The target element can be changed when initializing the plugin.</p>
<p>The plugin also allows you to set the number of items to return from your feed and if you want to include the captions.</p>

<hr/>

<h2>Demo &amp; Documentation</h2>
<p><a href="http://thomasvaeth.com/instafetch.js/" target="_blank">Demo</a></p>
<p><a href="https://github.com/thomasvaeth/instafetch.js/blob/master/README.md" target="_blank">Documentation</a></p>
