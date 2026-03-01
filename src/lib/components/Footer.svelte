<script lang="ts">
  const links = [
    {
      title: 'GitHub',
      link: 'https://github.com/thomasvaeth',
    },
    {
      title: 'CodePen',
      link: 'http://codepen.io/thomasvaeth',
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/thomasvaeth',
    },
  ];
</script>

<footer class="Footer">
  <span>
    &copy; Thomas Vaeth. Coded with code in {new Date().getFullYear()}.
  </span>
  <ul class="Footer__list">
    {#each links as { title, link } (link)}
      <li>
        <a
          class="Footer__link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </li>
    {/each}
  </ul>
</footer>

<style lang="scss">
  .Footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em;

    border-top: 1px solid var(--color-black);

    &__list {
      display: flex;
      gap: 1em;
    }

    // &__item {

    // }
  }
</style>
