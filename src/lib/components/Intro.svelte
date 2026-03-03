<script lang="ts">
  import Image from '$lib/components/Image.svelte';
  import Layout from '$lib/components/Layout/Layout.svelte';
  import Section from '$lib/components/Section.svelte';
  import TextBlock from '$lib/components/TextBlock.svelte';
</script>

<Section class="[--glyph-factor:0.6]">
  <h1
    class="font-bold text-center leading-[0.92] uppercase sm:leading-[0.86] md:leading-[0.8]"
    style:font-size="calc((min(100vw, var(--max-width)) - (var(--spacing) * 16)) / (7 * var(--glyph-factor)))"
  >
    <span class="block">Thomas</span>
    <span class="block">Vaeth</span>
  </h1>

  <TextBlock variant="1" class="lg:grid-cols-2 lg:[&>*:first-child]:col-start-2" contentSize="extra-large">
    <p>
      I build high&#8209;traffic, customer&#8209;facing products with a focus on performance and long-term
      maintainability.
    </p>
    <p class="mt-4">
      I like working where design meets engineering, turning complex ideas into clean, flexible front&#8209;end systems
      that can evolve over time.
    </p>
  </TextBlock>

  <Layout
    variant="1"
    class="md:grid-cols-2 lg:grid-cols-3 md:[&>*:first-child]:col-start-1 lg:[&>*:first-child]:col-start-2"
  >
    <Image class="p-8 grayscale" src="/me.jpg" alt="Thomas Vaeth" />
  </Layout>
</Section>
