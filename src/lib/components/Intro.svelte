<script lang="ts">
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
      Aenean et tortor convallis, placerat lacus a, congue lacus. Quisque magna
      libero, porta eu molestie non, maximus id nibh. In gravida dolor id dolor
      dapibus, ut imperdiet odio finibus.
    </p>
  </TextBlock>

  <Layout>
    <figure class="Intro__figure">
      <img class="Intro__img" src="/me.jpg" alt="Thomas Vaeth" />
    </figure>
  </Layout>
</Section>

<style lang="scss">
  .Intro {
    &__title {
      font-size: calc(
        (100cqw - 2em) / (var(--character-count) * var(--glyph-factor))
      );
      line-height: 1;
      text-transform: uppercase;

      span {
        display: block;
      }
    }

    &__last {
      text-align: right;
    }

    &__figure {
      padding: 2rem;

      background-color: var(--color-black);
    }

    &__img {
      filter: grayscale(1);
    }
  }

  :global {
    .Intro {
      --character-count: 12;
      --glyph-factor: 0.6;
    }
  }
</style>
