<script lang="ts">
  import Layout from '$lib/components/Layout/Layout.svelte';
  import type { Snippet } from 'svelte';
  import type { ClassValue } from 'svelte/elements';
  import type { LayoutProps } from '$lib/components/Layout/Layout.types';

  const {
    variant = '1•1•1',
    columnStart = 'auto',
    splitColumns = false,
    company = '',
    heading = '',
    contentSize = 'regular',
    class: className,
    children,
  }: {
    variant?: LayoutProps['variant'];
    columnStart?: LayoutProps['columnStart'];
    splitColumns?: boolean;
    company?: string;
    heading?: string;
    contentSize?: 'regular' | 'large' | 'extra-large';
    class?: ClassValue;
    children: Snippet;
  } = $props();
</script>

<Layout class={['mb-4 md:mb-0', className]} {variant} {columnStart}>
  {#if company || heading}
    <div
      class={[
        'flex',
        'flex-col',
        'justify-end',
        {
          'md:col-span-2': splitColumns,
        },
      ]}
    >
      {#if company}
        <p class="ml-[0.1em] font-bold uppercase">
          {company}
        </p>
      {/if}

      {#if heading}
        <h2 class="font-bold">
          {heading}
        </h2>
      {/if}
    </div>
  {/if}

  <div
    class={[
      {
        'md:col-start-3': splitColumns,
        'text-xl': contentSize === 'large',
        'text-2xl': contentSize === 'extra-large',
      },
    ]}
  >
    {@render children?.()}
  </div>
</Layout>
