<script lang="ts">
  import Image from '$lib/components/Image.svelte';
  import Layout from '$lib/components/Layout/Layout.svelte';
  import Section from '$lib/components/Section.svelte';
  import TextBlock from '$lib/components/TextBlock.svelte';
</script>

<Section class="Intro">
  <h1 class="Intro__title">
    <span class="Intro__line">Thomas</span>
    <span class="Intro__line">Vaeth</span>
  </h1>

  <TextBlock variant="1•1" columnStart="2" contentSize="extra-large">
    <p>
      I build high&#8209;traffic, customer&#8209;facing products with a focus on performance and long-term
      maintainability.
    </p>
    <p>
      I like working where design meets engineering, turning complex ideas into clean, flexible front&#8209;end systems
      that can evolve over time.
    </p>
  </TextBlock>

  <Layout class="Intro__headshot" variant="1" columnStart="2">
    <Image class="Intro__img" src="/me.jpg" alt="Thomas Vaeth" />
  </Layout>
</Section>

<style lang="scss">
  @use '../../styles/tools/mixins-media' as media;

  .Intro {
    &__title {
      font-size: calc((min(100vw, var(--max-width)) - (var(--space-medium) * 2)) / (7 * var(--glyph-factor)));
      line-height: 0.92;
      text-align: center;
      text-transform: uppercase;

      @include media.at('small') {
        line-height: 0.86;
      }

      @include media.at('medium') {
        line-height: 0.8;
      }
    }

    &__line {
      display: block;
    }
  }

  :global {
    .Intro {
      --glyph-factor: 0.6;

      &__headshot {
        &.Layout {
          @include media.at('small') {
            grid-template-columns: repeat(2, 1fr);
          }

          @include media.at('medium') {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      }

      &__img {
        padding: var(--space-medium);

        filter: grayscale(1);
      }
    }
  }
</style>
