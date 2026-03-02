<script lang="ts">
  import Layout from '$lib/components/Layout/Layout.svelte';
  import type { Snippet } from 'svelte';
  import type { LayoutProps } from '$lib/components/Layout/Layout.types';

  const {
    variant = '1•1•1',
    columnStart = 'auto',
    splitColumns = false,
    heading = '',
    contentSize = 'regular',
    children,
  }: {
    variant?: LayoutProps['variant'];
    columnStart?: LayoutProps['columnStart'];
    splitColumns?: boolean;
    heading?: string;
    contentSize?: 'regular' | 'large' | 'extra-large';
    children: Snippet;
  } = $props();
</script>

<Layout
  class={[
    'TextBlock',
    {
      'TextBlock--split-columns': splitColumns,
    },
  ]}
  {variant}
  {columnStart}
>
  {#if heading}
    <h2 class="TextBlock__heading">
      {heading}
    </h2>
  {/if}

  <div class={['TextBlock__content', contentSize !== 'regular' && `TextBlock__content--${contentSize}`]}>
    {@render children?.()}
  </div>
</Layout>

<style lang="scss">
  @use '../../styles/tools/mixins-media' as media;

  .TextBlock {
    &__content {
      &--large {
        font-size: 1.25rem;
      }

      &--extra-large {
        font-size: 1.5rem;
      }
    }
  }

  :global {
    .TextBlock {
      margin-bottom: var(--space-small);

      @include media.at('medium') {
        margin-bottom: var(--space-none);
      }

      &.Layout {
        gap: var(--space-small);

        @include media.at('medium') {
          gap: var(--space-medium);
        }
      }
    }
  }

  :global(.TextBlock--split-columns) {
    .TextBlock {
      &__heading {
        @include media.at('medium') {
          grid-column: 1;
        }
      }

      &__content {
        @include media.at('medium') {
          grid-column: 3;
        }
      }
    }
  }
</style>
