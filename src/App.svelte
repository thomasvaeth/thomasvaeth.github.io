<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import Intro from '$lib/components/Intro.svelte';
  import ModelViewer from '$lib/components/ModelViewer.svelte';
  import Section from '$lib/components/Section.svelte';
</script>

<Header />

<main>
  <Intro />

  <Section layout="2•1">
    <ModelViewer title="Handheld" />
    <div class="Section__subcontainer">
      <ModelViewer title="Register" />
      <ModelViewer title="Stand" />
    </div>
  </Section>
</main>

<Footer />

<style lang="scss">
  .Section {
    &__subcontainer {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>
