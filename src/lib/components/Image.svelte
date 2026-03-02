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

<figure
  class={[
    'Image',
    className,
    {
      'Image--with-border': withBorder,
    },
  ]}
>
  <img {src} {alt} />
</figure>

<style lang="scss">
  .Image {
    background-color: var(--color-black);

    &--with-border {
      border: 1px solid var(--color-black);
    }
  }
</style>
