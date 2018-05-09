<template>
  <div>
    <div class="container">
      <work-preview v-for="(p, index) in project" :key="'p' + index" :project="project" :index="index"></work-preview>
    </div>
  </div>
</template>
<script>
import WorkPreview from './WorkPreview'

export default {
  data () {
    return {
      msg: 'Recent Work'
    }
  },
  props: ['project'],
  components: {
    WorkPreview
  }
}
</script>

<style scoped>

</style>
