<script lang="ts">
  const {
    src,
  }: {
    src: string;
  } = $props();
</script>

<video class="Video" autoplay loop muted playsinline>
  <source {src} type="video/mp4" />
</video>

<style lang="scss">
  .Video {
    border: 1px solid var(--color-black);
  }
</style>
