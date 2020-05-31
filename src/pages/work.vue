<template>
  <div :class="$style.root">
    <TechList :filters="filters" @input="filters = $event" />
    <JobList :filters="filters" />
  </div>
</template>

<script>
import TechList from '~/components/TechList.vue'
import JobList from '~/components/JobList.vue'

export default {
  name: 'PageWork',
  components: {
    TechList,
    JobList,
  },
  data() {
    return {
      filters: [],
    }
  },
}
</script>

<style lang="scss" module>
.root {
}
</style>
