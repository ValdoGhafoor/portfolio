<template>
  <div :class="$style.root">
    <Header />
    <div :class="$style.content">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
  components: {
    Header: () => import('~/components/Header.vue'),
    Footer: () => import('~/components/Footer.vue'),
  },
}
</script>

<style lang="scss" module>
.root {
  position: relative;

  height: 100vh;
  padding-top: 50px;
}

.content {
  height: 100%;
  padding: $spacing * 3 $spacing;

  background-color: #fff;
  background-image: linear-gradient(
      transparent 79px,
      #abced4 79px,
      #abced4 81px,
      transparent 81px
    ),
    linear-gradient(#eee 0.1em, transparent 0.1em);
  background-size: 100% 1.2em;
}
</style>
