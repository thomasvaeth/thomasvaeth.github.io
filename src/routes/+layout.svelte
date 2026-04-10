<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';
  import Lenis from 'lenis';

  import '../styles/app.scss';

  const {
    children,
  }: {
    children: Snippet;
  } = $props();

  onMount(() => {
    const lenis = new Lenis({
      prevent: (node) => node.id === 'dialog',
    });

    let frameId = 0;

    const raf = (time: number) => {
      lenis.raf(time);

      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);

      lenis.destroy();
    };
  });
</script>

{@render children()}
