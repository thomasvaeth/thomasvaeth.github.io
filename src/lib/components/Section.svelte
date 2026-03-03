<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ClassValue } from 'svelte/elements';

  const {
    children,
    class: className,
  }: {
    children: Snippet;
    class?: ClassValue;
  } = $props();
</script>

<section class={['flex', 'flex-col', 'gap-4', 'px-8', 'py-16', 'full-width-border', 'md:gap-8', className]}>
  {@render children?.()}
</section>
