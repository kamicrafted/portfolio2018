<template>
  <div class="view-work">
    <hero :pagename="current" @update-section="showSection"></hero>

    <transition-group name="view-fade" mode="out-in">
      <work-recent v-if="subsection === 'recent'" :project="project" key="recent"></work-recent>
      <work-freelance v-else-if="subsection === 'freelance'" :project="project" key="freelance"></work-freelance>
      <work-archived v-else-if="subsection === 'archived'" :project="project" key="archived"></work-archived>
    </transition-group>

    <site-footer></site-footer>
  </div>
</template>

<script>
import Hero from './partials/Hero'
import WorkRecent from './WorkRecent'
import WorkFreelance from './WorkFreelance'
import WorkArchived from './WorkArchived'
import SiteFooter from './partials/Footer'

export default {
  name: 'Work',
  data () {
    return {
      current: 'work',
      subsection: 'recent'
    }
  },
  methods: {
    showSection: function (section) {
      this.subsection = section
    }
  },
  props: ['project'],
  components: {
    Hero,
    WorkRecent,
    WorkFreelance,
    WorkArchived,
    SiteFooter
  }
}
</script>

<style scoped>

</style>
