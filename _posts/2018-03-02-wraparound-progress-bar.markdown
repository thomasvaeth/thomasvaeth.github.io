---
layout: post
title: "Wraparound Progress Bar"
date: 2018-03-02
description: A progress bar only at the top of the page is boring. Really boring. So I built a wraparound progress bar.
image: /assets/images/posts/wraparound-progress-bar.jpg
---
<p>A progress bar only at the top of the page is boring. Really boring. Everyone does it because <code>progress</code> is already a native HTML element. I wanted to build something that was made specifically for longer pages with a lot of content. I also wanted to add some style to the page where the content is being framed as you scroll. So I built a wraparound progress bar.</p>

<div class="flex-vid">
  <iframe height="575" scrolling="no" title="Wraparound Progress Bar" src="//codepen.io/thomasvaeth/embed/XZQWMW/?height=265&theme-id=0&default-tab=result&embed-version=2" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;"></iframe>
</div>

<hr/>

<h2>The Setup</h2>
<pre>
<code>
&lt;div class="progress-top"&gt;&lt;/div&gt;
&lt;div class="progress-right"&gt;&lt;/div&gt;
&lt;div class="progress-bottom"&gt;&lt;/div&gt;
&lt;div class="progress-left"&gt;&lt;/div&gt;
</code>
</pre>

<pre>
<code>
$color-progress: #ffc769;
$progress: 0.35em;

.progress-top,
.progress-right,
.progress-bottom,
.progress-left {
  position: fixed;
  z-index: 999;

  background-color: $color-progress;
}

.progress-top,
.progress-bottom {
  height: $progress;
}

.progress-right,
.progress-left {
  width: $progress;
}

.progress-top,
.progress-right {
  top: 0;
}

.progress-top,
.progress-left {
  left: 0;
}

.progress-bottom,
.progress-left {
  bottom: 0;
}

.progress-bottom,
.progress-right {
  right: 0;
}
</code>
</pre>

<hr/>

<h2>The Script</h2>
<pre>
<code>
const ProgressScroll = (() => {
  let s;

  return {
    settings() {
      return {
        top: $('.progress-top'),
        right: $('.progress-right'),
        bottom: $('.progress-bottom'),
        left: $('.progress-left'),
        windowHeight: $(window).height(),
        windowWidth: $(window).width(),
        scrollHeight: $(document).height() - $(window).height(),
        progressTotal: $(window).height() * 2 + $(window).width() * 2,
        scrollPosition: $(document).scrollTop()
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      $(window).on('scroll', this.onScroll);
      $(window).on('resize', this.onResize);

      this.progress();
    },

    onScroll() {
      s.scrollPosition = $(document).scrollTop();

      ProgressScroll.requestTick();
    },

    onResize() {
      s.windowHeight = $(window).height();
      s.windowWidth = $(window).width();
      s.scrollHeight = $(document).height() - s.windowHeight;
      s.progressTotal = s.windowHeight * 2 + s.windowWidth * 2;

      ProgressScroll.requestTick();
    },

    requestTick() {
      requestAnimationFrame(this.progress);
    },

    progress() {
      const percentage = s.scrollPosition / s.scrollHeight;
      const width = s.windowWidth / s.progressTotal;
      const height = s.windowHeight / s.progressTotal;

      s.top.css('width', `${(percentage / width) * 100}%`);
      s.right.css('height', `${((percentage - width) / height) * 100}%`);
      s.bottom.css('width', `${((percentage - width - height) / width) * 100}%`);
      s.left.css('height', `${((percentage - width - height - width) / height) * 100}%`);
    }
  };
})();

ProgressScroll.init();
</code>
</pre>

<p>I know. It uses jQuery. I originally wrote the script in vanilla JavaScript, but the styling would not always reach 100% for each <code>div</code> depending on the scroll speed. This would sometimes leave gaps in between the progress bar since it really is four separate elements.</p>
