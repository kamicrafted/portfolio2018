<template>
  <div class="view-work">
    <hero :pagename="current" @update-section="showSection"></hero>

    <transition name="view-fade" mode="out-in">
      <work-recent v-if="subsection === 'recent'" :project="project"></work-recent>
      <work-archived v-else></work-archived>
    </transition>

    <site-footer></site-footer>
  </div>
</template>

<script>
import Hero from './partials/Hero'
import WorkRecent from './WorkRecent'
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
    WorkArchived,
    SiteFooter
  }
}
</script>

<style scoped>

</style>
