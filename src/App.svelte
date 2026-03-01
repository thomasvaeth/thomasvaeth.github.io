<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import Intro from '$lib/components/Intro.svelte';
  import Layout from '$lib/components/Layout/Layout.svelte';
  import ModelViewer from '$lib/components/ModelViewer.svelte';
  import Section from '$lib/components/Section.svelte';
  import TextBlock from '$lib/components/TextBlock.svelte';
</script>

<Header />

<main>
  <Intro />

  <Section>
    <TextBlock heading="Block">
      <p>
        Aenean et tortor convallis, placerat lacus a, congue lacus. Quisque
        magna libero, porta eu molestie non, maximus id nibh. In gravida dolor
        id dolor dapibus, ut imperdiet odio finibus.
      </p>
    </TextBlock>
    <Layout variant="2•1">
      <ModelViewer title="Handheld" />
      <Layout variant="1">
        <ModelViewer title="Register" />
        <ModelViewer title="Stand" />
      </Layout>
    </Layout>
  </Section>

  <Section>
    <TextBlock heading="Block">
      <p>
        Aenean et tortor convallis, placerat lacus a, congue lacus. Quisque
        magna libero, porta eu molestie non, maximus id nibh. In gravida dolor
        id dolor dapibus, ut imperdiet odio finibus.
      </p>
    </TextBlock>
    <Layout variant="1">
      <img src="/block/upgrade/family.jpg" alt="" />
    </Layout>
    <Layout variant="1">
      <img src="/block/upgrade/desktop.jpg" alt="" />
    </Layout>
    <Layout columnStart="3">
      <video autoplay loop>
        <source src="/block/upgrade/register.mp4" type="video/mp4" />
      </video>
    </Layout>
  </Section>
</main>

<Footer />
