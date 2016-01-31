---
layout: post
title: "React and Sass"
date: 2016-01-30
---
I studied Python for a few more days after my last blog post and then jumped into learning more React. General Assembly only covered React for two days, so there was a lot more to do. Free Code Camp posted a few projects the other month, so I thought that would be a great place to continue to learn. The only project requirements were to use React and Sass. I did not spend a lot of time styling each project since I was mostly doing these to understand React and its one-way data flow, so I only used Sass for nesting.

The first one was to build a <a href="http://www.freecodecamp.com/challenges/build-a-markdown-previewer" target="_blank">markdown previewer</a> using marked. I have used Bootstrap for most projects, but decided to give Foundation a try. I really liked Foundation because I do not have to remove the border radius on every class like I do for Bootstrap. I am definitely going to use it for my next bigger project. You can view the project on <a href="http://codepen.io/thomasvaeth/full/dGJWxK/" target="_blank">CodePen</a>.

<img src="/assets/images/react-1.png">

The next one was to build a <a href="http://www.freecodecamp.com/challenges/build-a-camper-leaderboard" target="_blank">camper leaderboard</a> using two APIs. I used Foundation for this project too. The trickiest part was using `componentDidMount`.
<script src="https://gist.github.com/thomasvaeth/519fb31804110342a39c.js"></script>
But it was not that tricky after reading the documentation about loading initial data. You can view the leaderboard <a href="http://codepen.io/thomasvaeth/full/JGMEMm/" target="_blank">here</a>.

<img src="/assets/images/react-2.png">

And the last one I completed was to build a <a href="http://www.freecodecamp.com/challenges/build-a-recipe-box" target="_blank">recipe book</a> using localstorage. My favorite part of this project was using <a href="https://react-bootstrap.github.io/" target="_blank">React-Bootstrap</a>. The documentation was easy to follow and it made everything I was rendering easier to read. You can view the recipes <a href="http://codepen.io/thomasvaeth/full/EPEpvW/" target="_blank">here</a>.

<img src="/assets/images/react-3.png">

The code for everything is on <a href="https://github.com/thomasvaeth/freecodecamp" target="_blank">GitHub</a>. I want to improve these three projects by using ES2015 since I am already using Babel. I did the ES2015 tutorial on Code School, but I am having trouble with `this.setState` when trying to make the change.
