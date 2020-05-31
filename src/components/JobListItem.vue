<template>
  <div :class="$style.root">
    <p :class="$style.company">
      {{ job.company }}
    </p>
    <p :class="$style.title">{{ job.title }}</p>
    <p :class="$style.description">{{ job.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'JobListItem',
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.root {
  position: relative;

  background: white;
}

.title {
  font-weight: bold;
}

.company {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
