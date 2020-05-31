<template>
  <div :class="$style.root">
    <TechListItem
      v-for="(tech, index) in techList"
      :key="index"
      :is-highlighted="filters.includes(tech)"
      @click="updateFilters(tech)"
    >
      {{ tech }}
    </TechListItem>
  </div>
</template>

<script>
import TechListItem from '~/components/TechListItem.vue'

export default {
  name: 'TechList',
  components: {
    TechListItem,
  },
  props: {
    filters: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      techList: [
        'Vue',
        'SCSS',
        'Javascript',
        'Nuxt',
        'Vuetify',
        'Apollo',
        'GraphQL',
        'Node.js',
        'MongoDB',
      ],
    }
  },
  methods: {
    updateFilters(tech) {
      let newFilters = [...this.filters]

      if (this.filters.includes(tech)) {
        newFilters = newFilters.filter((filter) => filter !== 'tech')
      } else {
        newFilters.push(tech)
      }

      this.$emit('input', newFilters)
    },
  },
}
</script>

<style lang="scss" module>
.root {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing;
  justify-content: center;
}
</style>
