<script lang="ts">
  import type { LayoutProps } from './Layout.types';

  // prettier-ignore
  const {
    variant = '1•1•1',
    columnStart = 'auto',
    children,
    class: className,
  }: LayoutProps = $props();

  const variantClassMap: Record<NonNullable<LayoutProps['variant']>, string> = {
    '1•1•1': 'md:grid-cols-3',
    '2•1': 'md:grid-cols-3 md:[&>*:first-child]:[grid-column-end:span_2]',
    '1•2': 'md:grid-cols-3 md:[&>*:last-child]:[grid-column-end:span_2]',
    '1•1': 'md:grid-cols-2',
    '1': 'md:grid-cols-1',
  };
</script>

<div
  class={[
    'grid',
    'grid-cols-1',
    'gap-4',
    'md:gap-8',
    'md:[&>*:first-child]:col-start-[var(--layout-column-start)]',
    variantClassMap[variant],
    className,
  ]}
  style:--layout-column-start={columnStart}
>
  {@render children?.()}
</div>
