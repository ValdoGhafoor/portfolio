<template>
  <span :class="[$style.root, isHighlighted ? $style.higlighted : '']">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'TechListItem',
  props: {
    isHighlighted: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" module>
.root {
  display: inline-block;
  padding: 5px;
  border: 1px solid black;
  border-radius: 20px;

  cursor: pointer;
}

.highlighted {
  color: red;
}
</style>
