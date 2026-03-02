<script lang="ts">
  const links = [
    {
      title: 'Email',
      link: 'mailto:thomas.vaeth@gmail.com',
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/thomasvaeth',
    },
  ];
</script>

<header class="Header">
  <ul class="Header__list">
    {#each links as { title, link } (link)}
      <li>
        <a class="Header__link" href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </li>
    {/each}
  </ul>
</header>

<style lang="scss">
  @use '../../styles/tools/extends';

  .Header {
    position: sticky;
    top: 0;
    z-index: 99;

    padding: 1rem;

    &__list {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    &__link {
      @extend %action-transition;
    }
  }
</style>
