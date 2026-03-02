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

<section class={['Section', className]}>
  {@render children?.()}
</section>

<style lang="scss">
  @use '../../styles/tools/extends';

  .Section {
    @extend %full-width-border;

    display: flex;
    flex-direction: column;
    gap: var(--space-component);
    padding: var(--space-component);
  }
</style>
