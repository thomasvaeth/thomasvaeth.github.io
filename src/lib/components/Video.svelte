<script lang="ts">
  import { onMount } from 'svelte';

  const {
    src,
  }: {
    src: string;
  } = $props();

  let videoElement: HTMLVideoElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            void videoElement.play().catch(() => {
              // Ignore autoplay failures
            });
          } else {
            videoElement.pause();
          }
        }
      },
      {
        threshold: 0,
      },
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  });
</script>

<video bind:this={videoElement} class="border border-black" loop muted playsinline preload="metadata">
  <source {src} type="video/mp4" />
</video>
