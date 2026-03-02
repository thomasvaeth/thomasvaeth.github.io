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
  @use '../../styles/tools/mixins-media' as media;

  .Section {
    @extend %full-width-border;

    display: flex;
    flex-direction: column;
    gap: var(--space-small);
    padding: var(--space-large) var(--space-medium);

    @include media.at('medium') {
      gap: var(--space-medium);
    }
  }
</style>
