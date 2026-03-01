<footer class="Footer">
  <span>
    &copy; Thomas Vaeth. Coded with code in {new Date().getFullYear()}.
  </span>
</footer>

<style lang="scss">
  @use '../../styles/tools/extends';

  .Footer {
    @extend %full-width-border;

    display: flex;
    justify-content: center;
    padding: 2em;

    font-weight: var(--font-weight-bold);
  }
</style>
