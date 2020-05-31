<template>
  <div :class="$style.root">
    <JobListItem
      v-for="(job, index) in filteredJobList"
      :key="index"
      :job="job"
    />
  </div>
</template>

<script>
import JobListItem from '~/components/JobListItem.vue'

export default {
  name: 'JobList',
  components: {
    JobListItem,
  },
  props: {
    filters: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      jobList: [
        {
          company: 'Luko',
          title: 'Frontend Lead Developer',
          description:
            'Many things done over thez years lorem ipsum bawé mon gars, zsdkopazi adozija dazdiojad oiazo dida',
          tasks: [
            'Many things done over thez years lorem ipsum bawé mon gars',
            'Many things done over thez years lorem ipsum bawé mon gars',
            'Many things done over thez years lorem ipsum bawé mon gars',
          ],
          techs: ['Vue', 'Nuxt', 'Javascript', 'SCSS'],
        },
      ],
    }
  },
  computed: {
    filteredJobList() {
      return this.jobList.filter(
        (job) =>
          !this.filters.length ||
          this.filters.some((filter) => job.techs.includes(filter)),
      )
    },
  },
}
</script>

<style lang="scss" module>
.root {
}
</style>
