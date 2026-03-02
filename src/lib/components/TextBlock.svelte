<script lang="ts">
  import Layout from '$lib/components/Layout/Layout.svelte';
  import type { Snippet } from 'svelte';
  import type { LayoutProps } from '$lib/components/Layout/Layout.types';

  const {
    variant = '1•1•1',
    columnStart = 'auto',
    splitColumns = false,
    company = '',
    heading = '',
    contentSize = 'regular',
    children,
  }: {
    variant?: LayoutProps['variant'];
    columnStart?: LayoutProps['columnStart'];
    splitColumns?: boolean;
    company?: string;
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
  {#if company || heading}
    <div class="TextBlock__header">
      {#if company}
        <p class="TextBlock__company">
          {company}
        </p>
      {/if}

      {#if heading}
        <h2>
          {heading}
        </h2>
      {/if}
    </div>
  {/if}

  <div class={['TextBlock__content', contentSize !== 'regular' && `TextBlock__content--${contentSize}`]}>
    {@render children?.()}
  </div>
</Layout>

<style lang="scss">
  @use '../../styles/tools/mixins-media' as media;

  .TextBlock {
    &__header {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    &__company {
      // Optical alignment because this is directly above a much larger font-size
      margin-inline-start: 0.1em;
      font-weight: var(--font-weight-bold);
      text-transform: uppercase;
    }

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
    .TextBlock__header {
      @include media.at('medium') {
        grid-column: 1 / span 2;
      }
    }

    .TextBlock__content {
      @include media.at('medium') {
        grid-column: 3;
      }
    }
  }
</style>
