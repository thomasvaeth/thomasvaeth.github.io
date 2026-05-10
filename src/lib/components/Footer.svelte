<script lang="ts">
  import type { SpotifyTrack } from '$lib/types/spotify-track';

  const {
    spotifyTrack,
  }: {
    spotifyTrack?: SpotifyTrack;
  } = $props();
</script>

<footer class="Footer">
  <span>
    &copy; Thomas Vaeth. Coded with code
    {#if spotifyTrack}
      to <a class="Footer__link" href={spotifyTrack.link} target="_blank" rel="external noopener noreferrer"
        >{spotifyTrack.artist}</a
      >.
    {:else}
      in {new Date().getFullYear()}.
    {/if}
  </span>
</footer>

<style lang="scss">
  @use '../../styles/tools/extends';
  @use '../../styles/tools/mixins';

  .Footer {
    @include mixins.full-width-border();

    display: flex;
    justify-content: center;
    padding: var(--space-medium);

    font-weight: var(--font-weight-bold);

    &__link {
      @extend %action-transition;
    }
  }
</style>
