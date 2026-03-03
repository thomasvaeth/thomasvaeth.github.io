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

<figure class={['bg-black', 'border', 'border-black', className]}>
  <img {src} {alt} />
</figure>
