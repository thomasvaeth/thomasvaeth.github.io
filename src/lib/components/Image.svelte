<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  const {
    src,
    alt,
    withoutBorder = false,
    class: className,
  }: {
    src: string;
    alt: string;
    withoutBorder?: boolean;
    class?: ClassValue;
  } = $props();
</script>

<figure
  class={[
    'Image',
    className,
    {
      'Image--without-border': withoutBorder,
    },
  ]}
>
  <img {src} {alt} />
</figure>

<style lang="scss">
  .Image {
    background-color: var(--color-black);
    border: 1px solid var(--color-black);

    &--without-border {
      border: none;
    }
  }
</style>
