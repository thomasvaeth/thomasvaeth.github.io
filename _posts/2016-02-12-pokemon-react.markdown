---
layout: post
title: "Pokémon React"
date: 2016-02-12
related: ["Gulp", "React on Free Code Camp"]
---
The past week has been all about React in ES2015 and Pokémon. I had so many problems, but I learned so much. I have been wanting to build something with the Pokémon API for a while and finally got the chance to do so. Unfortunately the sprites are not on V2 of the API yet, so the homepage is doing two calls to V1 and the Pokédex is doing one call to V2.

<img src="/assets/images/pokemon-1.png">

<img src="/assets/images/pokemon-2.png">

I was using five CDNs for everything I needed for React to work and the page was taking forever to load. I wanted to get rid of as many as I could. It took me a few hours to figure out, but I finally got what I needed. I installed the following packages to speed everything up: `babel-preset-es2015`, `babel-preset-react`, `babelify`, `browserify`, `gulp`, `gulp-rename`, `gulp-uglify`, `jquery`, `react`, `react-dom`, `react-router`, and `vinyl-source-stream`.

<script src="https://gist.github.com/thomasvaeth/6186a9a6c22b14fb9c43.js"></script>
<script src="https://gist.github.com/thomasvaeth/e7cf3ce2588960c5a709.js"></script>

I installed `browserify` because I was requiring dependencies on the client side. So right there I was able to get rid of four CDNs (React, React-DOM, React-Router, and jQuery). Now I needed to get rid of the Babel CDN. That is where `babelify` came in, but I still needed `babel-preset-es2015` and `babel-preset-react`. At first I did not have `babel-preset-react` installed, so it kept erroring at the JSX syntax. The Babel presets seems to be something that was added for Babel 6, so it took a while to get that last part. The last part was to minify the script because the file sizes were a huge difference (1.1MB vs 371KB). I still had the script in the head, so I was getting another error because the `#container` could not be found. All I had to do was move the script to the end of the body.

I got a little practice with Jade, but there was not much in the HTML file. And as far as styling goes I ditched Bootstrap and Foundation for once. Everything was built using a flexbox. I went through a <a href="http://flexboxfroggy.com/" target="_blank">short tutorial</a> and jumped right into it. It is pretty easy, but it took a little work to get `align-self` to do what I wanted it to do. I also used Sass, but only variables for the colors and nesting for the components. I had Jade and Sass in Gulp, so everything was built quickly whenever a change was made.

At the end of the project I threw everything on Express because of the React-Router. I used `browserHistory` for production, so I needed to configure my server. The <a href="https://github.com/reactjs/react-router/blob/latest/docs/guides/Histories.md" target="_blank">documentation</a> gives the reasoning behind it.

Webpack and Redux next?
