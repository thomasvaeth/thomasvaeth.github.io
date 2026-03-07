<script lang="ts">
  import Dialog from '$lib/components/Dialog.svelte';
  import Image from '$lib/components/Image.svelte';
  import Section from '$lib/components/Section.svelte';
  import TextBlock from '$lib/components/TextBlock.svelte';
  import type { LetterboxdFeedItem } from '$lib/types/letterboxd-feed';

  const {
    letterboxdFeed = [],
  }: {
    letterboxdFeed?: LetterboxdFeedItem[];
  } = $props();

  let open = $state(false);

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

  const openDialog = () => {
    if (open) {
      return;
    }

    open = true;
  };

  const formatMemberRating = (rating: number): string => {
    const normalizedRating = Math.max(0, Math.min(5, Math.round(rating * 2) / 2));

    const fullStars = Math.floor(normalizedRating);
    const hasHalfStar = normalizedRating - fullStars >= 0.5;

    return `${'★'.repeat(fullStars)}${hasHalfStar ? '½' : ''}`;
  };
</script>

<header class="Header">
  <ul class="Header__list">
    <li>
      <button
        type="button"
        class="Header__link"
        aria-haspopup="dialog"
        aria-controls="dialog"
        aria-expanded={open}
        onclick={openDialog}
      >
        About
      </button>
    </li>
    {#each links as { title, link } (link)}
      <li>
        <a
          class="Header__link"
          href={link}
          target={title !== 'Email' ? '_blank' : undefined}
          rel="external noopener noreferrer"
        >
          {title}
        </a>
      </li>
    {/each}
  </ul>
</header>

<Dialog class="Header__dialog" bind:open>
  <Section>
    <TextBlock variant="1" heading="About" contentSize="large">
      <p>
        Over the past 8+ years I have built component libraries, design systems, and CMS&#8209;driven UI platforms used
        across high&#8209;traffic web experiences.
      </p>
      <p>
        At Block, I helped architect the design system behind Square’s public web platform, building reusable
        TypeScript&#8209;based components, tokenized styling systems, and developer tooling that help teams ship faster
        while maintaining consistent, high&#8209;quality interfaces.
      </p>
      <p>
        Previously I worked on growth and product experiences at Redfin and contributed to the frontend modernization of
        Getty Images’ web platform.
      </p>
    </TextBlock>
  </Section>

  <Section>
    <TextBlock variant="1" heading="Life" contentSize="large">
      <p>Based in Ballard, Seattle.</p>
    </TextBlock>

    <div class="Header__images">
      <Image src="/about/running.jpg" alt="Running" />
      <Image src="/about/ziti.jpg" alt="Ziti" />
    </div>

    <TextBlock variant="1" contentSize="large">
      <p>
        Outside of work I enjoy running, making pizza, reading fiction, collecting vintage t&#8209;shirts, and spending
        time with my Brussels Griffon, Ziti.
      </p>
      <p>I also keep track of the movies I watch on Letterboxd.</p>
    </TextBlock>

    {#if letterboxdFeed.length > 0}
      <ul class="Header__movies">
        {#each letterboxdFeed as { title, link, poster, memberRating } (link)}
          <li>
            <a href={link} target="_blank" rel="external noopener noreferrer" aria-label="{title} on Letterboxd">
              <Image src={poster} alt={title} />
            </a>
            {#if memberRating !== undefined}
              <span>{formatMemberRating(memberRating)}</span>
            {/if}
          </li>
        {/each}
      </ul>
    {/if}
  </Section>
</Dialog>

<style lang="scss">
  @use '../../styles/tools/extends';
  @use '../../styles/tools/mixins-media' as media;

  .Header {
    position: sticky;
    top: 0;
    z-index: 99;

    padding: var(--space-small) var(--space-medium);

    &__list {
      display: flex;
      justify-content: center;
      gap: var(--space-small);
    }

    &__link {
      @extend %action-transition;
    }

    &__images {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-small);

      @include media.at('small') {
        grid-template-columns: repeat(2, 1fr);
      }

      :global(.Image) {
        padding: var(--space-small);
      }
    }

    &__movies {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-extra-small);

      text-align: center;

      @include media.at('small') {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }

  :global {
    .Header {
      &__dialog {
        .Image {
          filter: grayscale(1);
        }
      }
    }
  }
</style>
