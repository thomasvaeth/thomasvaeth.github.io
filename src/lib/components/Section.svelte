<script lang="ts">
  import type { Snippet } from 'svelte';

  type SectionLayout = '1•1•1' | '2•1' | '1•2' | '1•1';

  const {
    layout = '1•1•1',
    children,
  }: {
    layout?: '1•1•1' | '2•1' | '1•2' | '1•1';
    children: Snippet;
  } = $props();

  const layoutClassMap: Record<SectionLayout, string> = {
    '1•1•1': '',
    '2•1': 'Section__container--two-one',
    '1•2': 'Section__container--one-two',
    '1•1': 'Section__container--one-one',
  };
</script>

<section class="Section">
  <div class={['Section__container', layoutClassMap[layout]]}>
    {@render children?.()}
  </div>
</section>

<style lang="scss">
  .Section {
    padding: 1rem;

    &__container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    &__container--two-one {
      & > :global(*:first-child) {
        grid-column: span 2;
      }
    }

    &__container--one-two {
      & > :global(*:last-child) {
        grid-column: span 2;
      }
    }

    &__container--one-one {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
