<template>
  <div :class="$style.root">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
  components: {
    Header: () => import('~/components/Header.vue'),
    Footer: () => import('~/components/Footer.vue')
  }
}
</script>

<style lang="scss" module>
.root {
  position: relative;
}
</style>
