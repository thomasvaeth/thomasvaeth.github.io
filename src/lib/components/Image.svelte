<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  const {
    src,
    alt,
    withBorder = false,
    class: className,
  }: {
    src: string;
    alt: string;
    withBorder?: boolean;
    class?: ClassValue;
  } = $props();
</script>

<img
  class={[
    'Image',
    className,
    {
      'Image--with-border': withBorder,
    },
  ]}
  {src}
  {alt}
/>

<style lang="scss">
  .Image {
    &--with-border {
      border: 1px solid var(--color-black);
    }
  }
</style>
