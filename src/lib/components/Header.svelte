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
  @use '../../styles/tools/config' as config;

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
      position: relative;

      font-weight: var(--font-weight-bold);
      color: var(--color-black);

      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;

        height: 2px;
        width: 100%;

        background-color: var(--color-red);
        transform: translateY(-50%) scaleX(0);
        transform-origin: right center;
        transition: transform 800ms config.$ease-out-expo;
      }

      &:hover,
      &:focus-visible {
        &:after {
          transform: translateY(-50%) scaleX(1);
          transform-origin: left center;
        }
      }
    }
  }
</style>
