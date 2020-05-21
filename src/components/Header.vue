<template>
  <header :class="$style.root">
    <nuxt-link :class="$style.logoLink" :to="{ name: 'index' }">
      <img src="~/assets/images/logo.svg" alt="Logo" :class="$style.logo" />
    </nuxt-link>

    <nav :class="$style.nav">
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
  name: 'Header',
}
</script>

<style lang="scss" module>
.root {
  position: fixed;
  top: 0;
  left: 0;

  display: flex;

  width: 100vw;
  height: 50px;
  border-bottom: 1px dashed black;

  color: black;

  background: white;
}

.nav {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.logoLink {
  height: 100%;
  padding: $spacing;
}

.logo {
  width: auto;
  height: 100%;
}

.link {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: $spacing $spacing * 2;

  color: black;

  font-size: $font-size-l;

  text-decoration: none;

  &:hover {
    background: grey;
  }
}
</style>
