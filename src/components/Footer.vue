<template>
  <footer :class="$style.root">
    <a
      href="https://github.com/ValdoGhafoor"
      target="_blank"
      :class="$style.link"
    >
      <img src="~/assets/images/github.png" :class="$style.icon" />
    </a>
    <a
      href="https://www.linkedin.com/in/valdo-ghafoor/"
      target="_blank"
      :class="$style.link"
    >
      <img src="~/assets/images/linkedin.png" :class="$style.icon" />
    </a>

    Copyright © {{ currentYear }}, Valdo Ghafoor
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss" module>
.root {
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100vw;

  padding: $spacing;

  text-align: center;

  background: white;
}

.icon {
  width: 20px;
  height: 20px;
}

.link {
  display: inline-block;
}
</style>
