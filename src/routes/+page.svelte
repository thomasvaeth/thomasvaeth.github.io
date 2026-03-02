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

<svelte:head>
  <title>Thomas Vaeth → Design Engineer</title>
  <link rel="canonical" href="https://thomasvaeth.com/" />
  <meta name="theme-color" content="#ffffff" />

  <meta name="author" content="Thomas Vaeth" />
  <meta
    name="description"
    content="Design-minded front-end developer creating scalable, customer-facing web experiences with strong UX, robust design systems, and reliable performance."
  />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="Thomas Vaeth → Design Engineer" />
  <meta property="og:url" content="https://thomasvaeth.com/" />
  <meta property="og:site_name" content="Thomas Vaeth" />
  <meta
    property="og:description"
    content="Design-minded front-end developer creating scalable, customer-facing web experiences with strong UX, robust design systems, and reliable performance."
  />
  <meta property="og:image" content="https://thomasvaeth.com/seo.jpg" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:description"
    content="Design-minded front-end developer creating scalable, customer-facing web experiences with strong UX, robust design systems, and reliable performance."
  />
  <meta name="twitter:title" content="Thomas Vaeth → Design Engineer" />
  <meta name="twitter:url" content="https://thomasvaeth.com/" />
  <meta name="twitter:image" content="https://thomasvaeth.com/seo.jpg" />
</svelte:head>

<Progess />

<Header />

<main>
  <Intro />

  <Section>
    <TextBlock splitColumns={true} company="Block" heading="Growth Surfaces" contentSize="large">
      <p>
        A redesign of Square’s website launched in parallel with Square Register, focused on clarifying the product’s
        major performance and durability improvements through cleaner storytelling and a conversion&#8209;focused
        front&#8209;end build.
      </p>
    </TextBlock>
    <Layout variant="2•1">
      <Image src="/block/project-20x/hero-1.jpg" alt="Payments hero" />
    </Layout>
    <Layout variant="1•2" columnStart="2">
      <Image src="/block/project-20x/hero-2.jpg" alt="Tap to pay on iPhone hero" />
    </Layout>
    <Layout variant="1">
      <Image src="/block/project-20x/hardware.jpg" alt="Hardware devies" />
    </Layout>
    <Layout variant="1•1">
      <Image src="/block/project-20x/content-explorer.jpg" alt="Content explorer" />
      <Image src="/block/project-20x/faq.jpg" alt="FAQ" />
    </Layout>
    <Layout variant="2•1" columnStart="2">
      <Image src="/block/project-20x/footer.jpg" alt="Footer with closing call to action and form" />
    </Layout>
  </Section>

  <Section>
    <TextBlock splitColumns={true} company="Block" heading="Square Handheld & Terminal" contentSize="large">
      <p>
        An international launch campaign for Square Handheld alongside a redesigned Square Terminal experience, focused
        on showcasing the hardware’s refined design, durability, and day&#8209;to&#8209;day performance across global
        markets.
      </p>
    </TextBlock>
    <Layout variant="1">
      <video autoplay loop muted playsinline>
        <source src="/block/handheld/handheld.mp4" type="video/mp4" />
      </video>
    </Layout>
    <Layout variant="1">
      <Image src="/block/handheld/handheld-case.jpg" alt="Handheld case" />
    </Layout>
    <Layout variant="2•1">
      <Image src="/block/handheld/handheld-pricing.jpg" alt="Handheld pricing" />
    </Layout>
    <Layout variant="1•2" columnStart="2">
      <Image src="/block/handheld/terminal-pricing.jpg" alt="Terminal pricing" />
    </Layout>
    <Layout variant="1•1">
      <Image src="/block/handheld/handheld-values.jpg" alt="Handheld value proposition cards" />
      <Image src="/block/handheld/terminal-values.jpg" alt="Terminal value proposition cards" />
    </Layout>
    <Layout variant="1">
      <Image src="/block/handheld/terminal-compare.jpg" alt="Portable hardware comparison" />
    </Layout>
  </Section>

  <Section>
    <TextBlock splitColumns={true} company="Block" heading="Public Web Next" contentSize="large">
      <p>
        A full redesign of Square’s website, modernizing the front&#8209;end system, improving performance and
        consistency, and creating a scalable foundation for future marketing and product storytelling.
      </p>
    </TextBlock>

    <Layout>
      <Image src="/block/pw-next/hero-1.jpg" alt="Square for Services hero" />
      <Image src="/block/pw-next/hero-2.jpg" alt="Square for Barbershops hero" />
      <Image src="/block/pw-next/hero-3.jpg" alt="Websites hero" />
    </Layout>
    <Layout variant="1">
      <Image src="/block/pw-next/content-block.jpg" alt="Content block" />
    </Layout>
    <Layout variant="1•1">
      <Image src="/block/pw-next/carousel.jpg" alt="Carousel" />
      <Image src="/block/pw-next/banking.jpg" alt="Banking services" />
    </Layout>
    <Layout variant="2•1">
      <Image src="/block/pw-next/content-explorer-1.jpg" alt="Content explorer" />
    </Layout>
    <Layout variant="1•2" columnStart="2">
      <Image src="/block/pw-next/content-explorer-2.jpg" alt="Content explorer" />
    </Layout>
  </Section>

  <Section>
    <TextBlock splitColumns={true} company="Block" heading="AR Experiences" contentSize="large">
      <p>
        Launched AR hardware experiences so sellers could place Square devices in their own space and evaluate
        real&#8209;world size, fit, and setup before purchase.
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
    <TextBlock splitColumns={true} company="Block" heading="Upgrade" contentSize="large">
      <p>
        An international hardware campaign featuring Square Register, Square Stand, and Square Terminal, designed to
        highlight the premium look, feel, and performance of Square point&#8209;of&#8209;sale devices.
      </p>
    </TextBlock>
    <Layout variant="1">
      <Image src="/block/upgrade/family.jpg" alt="Upgrade hero" withoutBorder={true} />
    </Layout>
    <Layout variant="1">
      <Image src="/block/upgrade/desktop.jpg" alt="Upgrade hardware device cards" withoutBorder={true} />
    </Layout>
    <Layout columnStart="3">
      <video autoplay loop muted playsinline>
        <source src="/block/upgrade/register.mp4" type="video/mp4" />
      </video>
    </Layout>
  </Section>
</main>

<Footer />
