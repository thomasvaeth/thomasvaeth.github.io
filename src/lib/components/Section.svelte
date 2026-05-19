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
  {@render children()}
</section>

<style lang="scss">
  @use '../../styles/tools/mixins' as mixins;
  @use '../../styles/tools/mixins-media' as media;

  .Section {
    @include mixins.full-width-border($after: true);

    display: flex;
    flex-direction: column;
    gap: var(--space-small);
    padding: calc(var(--space-large) * 2) var(--space-medium) var(--space-large);

    @include media.at('medium') {
      gap: var(--space-medium);
    }
  }
</style>
