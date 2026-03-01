<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ClassValue } from 'svelte/elements';

  const {
    children,
    class: className = '',
  }: {
    children: Snippet;
    class?: ClassValue;
  } = $props();
</script>

<section class={['Section', className]}>
  {@render children?.()}
</section>

<style lang="scss">
  .Section {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;

      height: 1px;
      width: 100vw;

      background-color: var(--color-black);
      transform: translateX(-50%);
    }
  }
</style>
