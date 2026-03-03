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

      dialogElement.scrollTop = 0;

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

    const overflowClassName = 'overflow-hidden';

    document.documentElement.classList.toggle(overflowClassName, open);
    document.body.classList.toggle(overflowClassName, open);

    return () => {
      document.documentElement.classList.remove(overflowClassName);
      document.body.classList.remove(overflowClassName);
    };
  });
</script>

<dialog
  bind:this={dialogElement}
  id="dialog"
  class={[
    'h-full',
    'w-full',
    'max-h-full',
    'max-w-full',
    'm-auto',
    'p-0',
    'overflow-x-hidden',
    'overflow-y-auto',
    'overscroll-contain',
    'border',
    'border-black',
    'md:h-auto',
    'md:max-h-[calc(100dvh-var(--spacing)*8)]',
    'md:max-w-[calc(var(--max-width)/2)]',
    'backdrop:bg-black/35',
    'backdrop:backdrop-blur-[1px]',
    className,
  ]}
  onclose={handleClose}
>
  <div class="sticky top-4 z-[99] my-4 mr-8 ml-auto w-fit">
    <form method="dialog">
      <button class="action-link" type="submit">Close</button>
    </form>
  </div>

  {@render children?.()}
</dialog>
