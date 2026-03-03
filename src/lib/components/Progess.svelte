<script lang="ts">
  let scrollY = $state(0);
  let innerHeight = $state(0);

  const progress = $derived.by(() => {
    if (typeof document === 'undefined') {
      return 0;
    }

    const maxScroll = document.documentElement.scrollHeight - innerHeight;

    if (maxScroll <= 0) {
      return 0;
    }

    return Math.min(100, Math.max(0, (scrollY / maxScroll) * 100));
  });
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div class="fixed top-0 left-0 z-[999] w-full pointer-events-none" aria-hidden="true">
  <div class="h-1 w-[var(--progress)] bg-[var(--color-red)]" style:--progress="{progress}%"></div>
</div>
