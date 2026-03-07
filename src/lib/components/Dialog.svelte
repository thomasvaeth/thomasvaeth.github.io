<script lang="ts">
  import { browser } from '$app/environment';
  import type { Snippet } from 'svelte';
  import type { ClassValue } from 'svelte/elements';

  let {
    open = $bindable(false),
    children,
    class: className,
  }: {
    open?: boolean;
    children: Snippet;
    class?: ClassValue;
  } = $props();

  let dialogElement: HTMLDialogElement | null = null;

  function handleClose() {
    open = false;
  }

  $effect(() => {
    if (!browser || !dialogElement) {
      return;
    }

    if (open && !dialogElement.open) {
      dialogElement.showModal();

      return;
    }

    if (!open && dialogElement.open) {
      dialogElement.close();
    }
  });

  $effect(() => {
    if (!browser) {
      return;
    }

    document.documentElement.style.overflow = open ? 'hidden' : '';
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  });
</script>

<dialog bind:this={dialogElement} id="dialog" class={['Dialog', className]} onclose={handleClose}>
  <div class="Dialog__header">
    <form method="dialog">
      <button class="Dialog__close" type="submit">Close</button>
    </form>
  </div>

  {@render children?.()}
</dialog>

<style lang="scss">
  @use '../../styles/tools/extends';
  @use '../../styles/tools/mixins-media' as media;

  .Dialog {
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    padding: var(--space-none);

    overflow-y: auto;
    overflow-x: hidden;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;

    border: 1px solid var(--color-black);

    @include media.at('small') {
      height: auto;
      max-height: calc(100dvh - (var(--space-medium) * 2));
      max-width: calc(var(--max-width) / 2);
    }

    &::backdrop {
      background-color: rgba(var(--color-black-rgb), 0.35);
      -webkit-backdrop-filter: blur(1px);
      backdrop-filter: blur(1px);
    }

    &__header {
      position: sticky;
      top: var(--space-small);
      z-index: 99;

      width: fit-content;
      margin: var(--space-small) var(--space-medium) var(--space-small) var(--space-auto);
    }

    &__close {
      @extend %action-transition;
    }
  }
</style>
