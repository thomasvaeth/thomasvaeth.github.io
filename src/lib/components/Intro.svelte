<script lang="ts">
</script>

<section class="Intro">
  <h1 class="Intro__title">
    <span class="Intro__left">Thomas</span>
    <span class="Intro__right">Vaeth</span>
  </h1>
</section>

<style lang="scss">
  .Intro {
    --character-count: 12;
    --glyph-factor: 0.6;

    padding: 1em;

    &__title {
      font-size: clamp(
        2.5rem,
        calc((100vw - 2em) / (var(--character-count) * var(--glyph-factor))),
        14rem
      );
      line-height: 1;
      text-transform: uppercase;
    }

    &__left,
    &__right {
      display: block;
    }

    &__right {
      text-align: right;
    }
  }
</style>
