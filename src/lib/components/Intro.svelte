<script lang="ts">
  import Image from '$lib/components/Image.svelte';
  import Layout from '$lib/components/Layout/Layout.svelte';
  import Section from '$lib/components/Section.svelte';
  import TextBlock from '$lib/components/TextBlock.svelte';
</script>

<Section class="Intro">
  <h1 class="Intro__title">
    <span class="Intro__line Intro__line--thomas">Thomas</span>
    <span class="Intro__line Intro__line--vaeth">Vaeth</span>
  </h1>

  <TextBlock variant="1•1" columnStart="2" contentSize="extra-large">
    <p>
      I build high-traffic, customer-facing digital products with a focus on performance, maintainability, and
      thoughtful user experience.
    </p>
    <p>
      My work sits at the intersection of design and engineering, where I turn complex product and marketing goals into
      scalable front-end systems built for long-term growth.
    </p>
  </TextBlock>

  <Layout columnStart="2">
    <figure class="Intro__figure">
      <Image class="Intro__img" src="/me.jpg" alt="Thomas Vaeth" />
    </figure>
  </Layout>
</Section>

<style lang="scss">
  .Intro {
    &__title {
      line-height: 0.8;
      text-align: center;
      text-transform: uppercase;
    }

    &__line {
      display: block;

      &--thomas {
        font-size: calc((min(100vw, var(--max-width)) - (var(--space-medium) * 2)) / (7 * var(--glyph-factor)));
      }

      &--vaeth {
        font-size: calc((min(100vw, var(--max-width)) - (var(--space-medium) * 2)) / (6 * var(--glyph-factor)));
      }
    }

    &__figure {
      padding: var(--space-medium);

      background-color: var(--color-black);
    }
  }

  :global {
    .Intro {
      --glyph-factor: 0.6;

      &__img {
        filter: grayscale(1);
      }
    }
  }
</style>
