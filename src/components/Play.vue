<template>
  <div class="view-play">
    <hero :pagename="current"></hero>

    <dribbbleade v-for="(project, index) in projects" :key="'project' + index" :project="projects" :index="index"></dribbbleade>

    <site-footer></site-footer>
  </div>
</template>

<script>
import Hero from './partials/Hero'
import SiteFooter from './partials/Footer'
import Dribbbleade from './play/Dribbbleade'

export default {
  name: 'Play',
  data () {
    return {
      current: 'play',
      msg: 'Play',
      projects: [
        {
          type: 'boxed',
          title: 'Dribbbleade',
          year: '2015',
          skills: [
            'Illustration'
          ],
          description: 'VuePress is composed of two parts: a minimalistic static site generator with a Vue-powered theming system, and a default theme optimized for writing technical documentation. It was created to support the documentation needs of Vue\'s own sub projects.',
          art: 'play/dribbbleade/keyart.png',
          link: 1, // link: web link
          url: 'https://google.com/'
        }
      ]
    }
  },
  components: {
    Hero,
    SiteFooter,
    Dribbbleade
  }
}
</script>

<style scoped>
</style>
