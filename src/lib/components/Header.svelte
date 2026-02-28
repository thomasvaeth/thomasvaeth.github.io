<script lang="ts">
</script>

<header class="Header">
  <span class="Header__title"> Thomas Vaeth </span>
</header>

<style lang="scss">
  .Header {
    position: sticky;
    top: 0;
    z-index: 999;

    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    text-align: center;

    &__title {
      grid-column: 2;
      padding: 1em;

      font-weight: var(--font-weight-bold);
    }
  }
</style>
