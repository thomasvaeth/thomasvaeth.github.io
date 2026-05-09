<footer class="Footer">
  <span>
    &copy; Thomas Vaeth. Coded with code in {new Date().getFullYear()}.
  </span>
</footer>

<style lang="scss">
  @use '../../styles/tools/mixins';

  .Footer {
    @include mixins.full-width-border();

    display: flex;
    justify-content: center;
    padding: var(--space-medium);

    font-weight: var(--font-weight-bold);
  }
</style>
