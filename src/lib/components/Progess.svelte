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

<div class="Progess" aria-hidden="true">
  <div class="Progess__bar" style="--progress: {progress}%"></div>
</div>

<style lang="scss">
  .Progess {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    width: 100%;

    pointer-events: none;

    &__bar {
      height: 4px;
      width: var(--progress);

      background-color: var(--color-red);
    }
  }
</style>
