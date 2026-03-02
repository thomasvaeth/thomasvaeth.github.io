<script lang="ts">
  import Layout from '$lib/components/Layout/Layout.svelte';
  import type { Snippet } from 'svelte';
  import type { LayoutProps } from '$lib/components/Layout/Layout.types';

  const {
    variant = '1•1•1',
    columnStart = 'auto',
    heading = '',
    contentSize = 'regular',
    children,
  }: {
    variant?: LayoutProps['variant'];
    columnStart?: LayoutProps['columnStart'];
    heading?: string;
    contentSize?: 'regular' | 'large' | 'extra-large';
    children: Snippet;
  } = $props();
</script>

<Layout class="TextBlock" {variant} {columnStart}>
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
</style>
