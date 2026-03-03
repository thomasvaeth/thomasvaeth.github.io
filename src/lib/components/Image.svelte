<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  const {
    src,
    alt,
    class: className,
  }: {
    src: string;
    alt: string;
    class?: ClassValue;
  } = $props();
</script>

<figure class={['Image', className]}>
  <img {src} {alt} />
</figure>

<style lang="scss">
  .Image {
    background-color: var(--color-black);
    border: 1px solid var(--color-black);
  }
</style>
