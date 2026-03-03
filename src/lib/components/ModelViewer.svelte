<script lang="ts">
  const {
    title,
  }: {
    title: 'Handheld' | 'Register' | 'Stand' | 'Terminal';
  } = $props();

  const rotationPerSecond = $derived.by(() => {
    let rotationPerSecond = '22deg';

    if (title === 'Handheld') {
      rotationPerSecond = '-26deg';
    } else if (title === 'Stand') {
      rotationPerSecond = '-22deg';
    }

    return rotationPerSecond;
  });
</script>

<svelte:head>
  <script
    async
    type="module"
    src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.1.0/model-viewer.min.js"
  ></script>
</svelte:head>

<div class="relative aspect-[5/4] border border-black bg-white">
  <model-viewer
    class="absolute inset-0 block h-full w-full [--progress-bar-height:2px] [--progress-bar-color:var(--color-black)]"
    alt="Square {title}"
    src="/block/ar/{title.toLowerCase()}.glb"
    ios-src="/block/ar/{title.toLowerCase()}.usdz"
    ar
    auto-rotate
    auto-rotate-delay="0"
    camera-controls
    disable-pan
    disable-tap
    disable-zoom
    interaction-prompt="none"
    orientation={title === 'Handheld' ? '-15deg 15deg 180deg' : '0deg 0deg 0deg'}
    reveal="auto"
    rotation-per-second={rotationPerSecond}
    shadow-intensity="1"
    touch-action="pan-y"
    tabindex="-1"
  >
    <button slot="ar-button" class="action-link absolute left-1/2 bottom-2 sm:bottom-4 -translate-x-1/2">
      View in your space
    </button>
  </model-viewer>
</div>
