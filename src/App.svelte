<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import Image from '$lib/components/Image.svelte';
  import Intro from '$lib/components/Intro.svelte';
  import Layout from '$lib/components/Layout/Layout.svelte';
  import ModelViewer from '$lib/components/ModelViewer.svelte';
  import Progess from '$lib/components/Progess.svelte';
  import Section from '$lib/components/Section.svelte';
  import TextBlock from '$lib/components/TextBlock.svelte';
</script>

<Progess />

<Header />

<main>
  <Intro />

  <Section>
    <TextBlock heading="Project 20X" contentSize="large">
      <p>
        Aenean et tortor convallis, placerat lacus a, congue lacus. Quisque magna libero, porta eu molestie non, maximus
        id nibh. In gravida dolor id dolor dapibus, ut imperdiet odio finibus.
      </p>
    </TextBlock>
    <Layout variant="2•1">
      <Image src="/block/project-20x/hero-1.jpg" alt="" withBorder={true} />
    </Layout>
    <Layout variant="1•2" columnStart="2">
      <Image src="/block/project-20x/hero-2.jpg" alt="" withBorder={true} />
    </Layout>
    <Layout variant="1">
      <Image src="/block/project-20x/hardware.jpg" alt="" withBorder={true} />
    </Layout>
    <Layout variant="1•1">
      <Image src="/block/project-20x/content-explorer.jpg" alt="" withBorder={true} />
      <Image src="/block/project-20x/faq.jpg" alt="" withBorder={true} />
    </Layout>
    <Layout variant="2•1" columnStart="2">
      <Image src="/block/project-20x/footer.jpg" alt="" withBorder={true} />
    </Layout>
  </Section>

  <Section>
    <TextBlock heading="Square Handheld & Terminal" contentSize="large">
      <p>
        Aenean et tortor convallis, placerat lacus a, congue lacus. Quisque magna libero, porta eu molestie non, maximus
        id nibh. In gravida dolor id dolor dapibus, ut imperdiet odio finibus.
      </p>
    </TextBlock>
    <Layout variant="1">
      <video autoplay loop muted playsinline>
        <source src="/block/handheld/handheld.mp4" type="video/mp4" />
      </video>
    </Layout>
    <Layout variant="1">
      <Image src="/block/handheld/handheld-case.jpg" alt="" withBorder={true} />
    </Layout>
    <Layout variant="2•1">
      <Image src="/block/handheld/handheld-pricing.jpg" alt="" withBorder={true} />
    </Layout>
    <Layout variant="1•2" columnStart="2">
      <Image src="/block/handheld/terminal-pricing.jpg" alt="" withBorder={true} />
    </Layout>
    <Layout variant="1•1">
      <Image src="/block/handheld/handheld-values.jpg" alt="" withBorder={true} />
      <Image src="/block/handheld/terminal-values.jpg" alt="" withBorder={true} />
    </Layout>
    <Layout variant="1">
      <Image src="/block/handheld/terminal-compare.jpg" alt="" withBorder={true} />
    </Layout>
  </Section>

  <Section>
    <TextBlock heading="Public Web Next" contentSize="large">
      <p>
        Aenean et tortor convallis, placerat lacus a, congue lacus. Quisque magna libero, porta eu molestie non, maximus
        id nibh. In gravida dolor id dolor dapibus, ut imperdiet odio finibus.
      </p>
    </TextBlock>

    <Layout>
      <Image src="/block/pw-next/hero-1.jpg" alt="" withBorder={true} />
      <Image src="/block/pw-next/hero-2.jpg" alt="" withBorder={true} />
      <Image src="/block/pw-next/hero-3.jpg" alt="" withBorder={true} />
    </Layout>
    <Layout variant="1">
      <Image src="/block/pw-next/content-block.jpg" alt="" withBorder={true} />
    </Layout>
    <Layout variant="1•1">
      <Image src="/block/pw-next/carousel.jpg" alt="" withBorder={true} />
      <Image src="/block/pw-next/banking.jpg" alt="" withBorder={true} />
    </Layout>
    <Layout variant="2•1">
      <Image src="/block/pw-next/content-explorer-1.jpg" alt="" withBorder={true} />
    </Layout>
    <Layout variant="1•2" columnStart="2">
      <Image src="/block/pw-next/content-explorer-2.jpg" alt="" withBorder={true} />
    </Layout>
  </Section>

  <Section>
    <TextBlock heading="AR/VR" contentSize="large">
      <p>
        Aenean et tortor convallis, placerat lacus a, congue lacus. Quisque magna libero, porta eu molestie non, maximus
        id nibh. In gravida dolor id dolor dapibus, ut imperdiet odio finibus.
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
    <TextBlock heading="Upgrade" contentSize="large">
      <p>
        Aenean et tortor convallis, placerat lacus a, congue lacus. Quisque magna libero, porta eu molestie non, maximus
        id nibh. In gravida dolor id dolor dapibus, ut imperdiet odio finibus.
      </p>
    </TextBlock>
    <Layout variant="1">
      <Image src="/block/upgrade/family.jpg" alt="" />
    </Layout>
    <Layout variant="1">
      <Image src="/block/upgrade/desktop.jpg" alt="" />
    </Layout>
    <Layout columnStart="3">
      <video autoplay loop muted playsinline>
        <source src="/block/upgrade/register.mp4" type="video/mp4" />
      </video>
    </Layout>
  </Section>
</main>

<Footer />
