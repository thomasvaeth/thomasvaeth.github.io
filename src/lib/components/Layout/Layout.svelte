<script lang="ts">
  import type { LayoutProps } from './Layout.types';

  const {
    variant = '1•1•1',
    columnStart = 'auto',
    children,
    class: className,
  }: LayoutProps = $props();

  const variantClassMap: Record<NonNullable<LayoutProps['variant']>, string> = {
    '1•1•1': '',
    '2•1': 'Layout--two-one',
    '1•2': 'Layout--one-two',
    '1•1': 'Layout--one-one',
    '1': 'Layout--one',
  };
</script>

<div
  class={['Layout', variantClassMap[variant], className]}
  style:--layout-column-start={columnStart}
>
  {@render children?.()}
</div>

<style lang="scss">
  .Layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    &--two-one {
      & > :global(*:first-child) {
        grid-column-end: span 2;
      }
    }

    &--one-two {
      & > :global(*:last-child) {
        grid-column-end: span 2;
      }
    }

    &--one-one {
      grid-template-columns: repeat(2, 1fr);
    }

    &--one {
      grid-template-columns: 1fr;
    }

    & > :global(*:first-child) {
      grid-column-start: var(--layout-column-start);
    }
  }
</style>
