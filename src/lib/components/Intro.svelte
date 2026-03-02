<script lang="ts">
  import Image from '$lib/components/Image.svelte';
  import Layout from '$lib/components/Layout/Layout.svelte';
  import Section from '$lib/components/Section.svelte';
  import TextBlock from '$lib/components/TextBlock.svelte';
</script>

<Section class="Intro">
  <h1 class="Intro__title">
    <span>Thomas</span>
    <span class="Intro__last">Vaeth</span>
  </h1>

  <TextBlock variant="1•1" columnStart="2" contentSize="extra-large">
    <p>
      I build high-traffic, customer-facing websites with a focus on performance, maintainability, and thoughtful user
      experience
    </p>
    <p>
      My work sits at the intersection of design and engineering, where I turn complex product and marketing goals into
      scalable front-end systems built for long-term growth
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
      font-size: calc((100cqw - 2em) / (var(--character-count) * var(--glyph-factor)));
      line-height: 1.1;
      text-transform: uppercase;

      span {
        display: block;
      }
    }

    &__last {
      text-align: right;
    }

    &__figure {
      padding: var(--space-component);

      background-color: var(--color-black);
    }
  }

  :global {
    .Intro {
      --character-count: 12;
      --glyph-factor: 0.6;

      &__img {
        filter: grayscale(1);
      }
    }
  }
</style>
