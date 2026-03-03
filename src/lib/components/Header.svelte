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

<header class="sticky top-0 z-[99] p-4">
  <ul class="flex justify-center gap-4">
    <li>
      <button
        type="button"
        class="action-link"
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
          class="action-link"
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

<Dialog bind:open>
  <Section>
    <TextBlock variant="1" heading="About" contentSize="large">
      <p>
        Over the past 8+ years I have built component libraries, design systems, and CMS&#8209;driven UI platforms used
        across high&#8209;traffic web experiences.
      </p>
      <p class="mt-4">
        At Block, I helped architect the design system behind Square’s public web platform, building reusable
        TypeScript&#8209;based components, tokenized styling systems, and developer tooling that help teams ship faster
        while maintaining consistent, high&#8209;quality interfaces.
      </p>
      <p class="mt-4">
        Previously I worked on growth and product experiences at Redfin and contributed to the frontend modernization of
        Getty Images’ web platform.
      </p>
    </TextBlock>
  </Section>

  <Section>
    <TextBlock variant="1" heading="Life" contentSize="large">
      <p>Based in Ballard, Seattle.</p>
    </TextBlock>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Image class="p-4 grayscale" src="/about/running.jpg" alt="Running" />
      <Image class="p-4 grayscale" src="/about/ziti.jpg" alt="Ziti" />
    </div>

    <TextBlock variant="1" contentSize="large">
      <p>
        Outside of work I enjoy running, making pizza, reading fiction, collecting vintage t&#8209;shirts, and spending
        time with my Brussels Griffon, Ziti.
      </p>
      <p class="mt-4">I also keep track of the movies I watch on Letterboxd.</p>
    </TextBlock>

    {#if letterboxdFeed.length > 0}
      <ul class="mt-4 grid grid-cols-2 gap-2 text-center md:grid-cols-4">
        {#each letterboxdFeed as { title, link, poster, memberRating } (link)}
          <li class="grid gap-1">
            <a href={link} target="_blank" rel="external noopener noreferrer" aria-label={`${title} on Letterboxd`}>
              <Image class="grayscale" src={poster} alt={title} />
            </a>

            {#if memberRating !== undefined}
              <span class="text-xs">{formatMemberRating(memberRating)}</span>
            {/if}
          </li>
        {/each}
      </ul>
    {/if}
  </Section>
</Dialog>
