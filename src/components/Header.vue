<template>
  <header :class="$style.root">
    <img src="~/assets/images/logo.png" />

    <nav>
      <nuxt-link :class="$style.link" :to="{ name: 'index' }">
        Presentation
      </nuxt-link>

      <nuxt-link :class="$style.link" :to="{ name: 'work' }">
        Work
      </nuxt-link>

      <nuxt-link :class="$style.link" :to="{ name: 'contact' }">
        Contact
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" module>
.root {
  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;

  width: 100vw;
  height: 48px;
  padding: $spacing;

  background: color(white);

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.05),
    0 2px 8px rgba(0, 0, 0, 0.05);
}
</style>
