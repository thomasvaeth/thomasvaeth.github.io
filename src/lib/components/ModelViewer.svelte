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

<div class="ModelViewer">
  <model-viewer
    alt="Square {title}"
    src="/block/{title.toLowerCase()}.glb"
    ios-src="/block/{title.toLowerCase()}.usdz"
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
  ></model-viewer>
</div>

<style lang="scss">
  .ModelViewer {
    position: relative;

    background-color: var(--color-gray);

    &:before {
      content: '';

      display: block;
      padding-top: 80%;
    }

    model-viewer {
      --progress-bar-height: 0px;
      // --progress-bar-color: var(--color-black);

      position: absolute;
      top: 0;
      left: 0;

      height: 100%;
      width: 100%;
    }
  }
</style>
