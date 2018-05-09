<template>
  <div class="app" id="app">
    <site-header @new-route="onNewRoute"></site-header>

    <transition name="view-fade" mode="out-in" appear>
      <router-view :project="projects" v-cloak @newBackdrop="changeBG" />
    </transition>

    <transition name="fade">
      <div class="backdrop backdrop--contact" v-if="current === 'contact'" key="contact"></div>
      <div class="backdrop backdrop--play" v-else-if="current === 'play'" key="play"></div>
      <div class="backdrop backdrop--work" v-else-if="current === 'work'" key="work"></div>
      <div class="backdrop backdrop--project" v-else-if="current === 'project'" key="project"></div>
      <div class="backdrop backdrop--home" v-else key="home"></div>
    </transition>
  </div>
</template>

<script>
import SiteHeader from './components/partials/Header.vue'

export default {
  name: 'App',
  data () {
    return {
      current: 'home',
      projects: [
        {
          title: 'DramaFever',
          slug: 'dramafever',
          year: '2012-Current',
          skills: [
            'Creative Direction',
            'Art Direction',
            'Front-end',
            'Management'
          ],
          description: 'After close to a decade of hopping around agencies, I met Seung and Romanos – both whom I immediately took a liking to – which got me exposed to the world of startups. It would take me a few years to realize just how significantly the experience has shaped who I am today as both designer and manager, while introducing me to the best group of people I\'ve come to trust, love and respect.',
          preview: 'projects/dramafever/preview.png',
          art: 'projects/dramafever/keyart.png',
          type: 'case'
        },
        {
          title: 'Boxhead Studio',
          slug: 'boxhead-studio',
          year: '2011-2016',
          skills: [
            'Creative Direction',
            'Front-end',
            'Marketing',
            'Operations'
          ],
          description: 'I helped start a small yet ambitious independent publishing company in 2011 as a side-project, teaming up with an amazing illustrator and a promising young designer with the goal of releasing a graphic novel at NYCC \'11. It was tough yet rewarding, and even though we had to eventually shut down, proved to be an invaluable experience to test and learn a broad range of skills.',
          preview: 'projects/jujusdiary/preview.png',
          art: 'projects/jujusdiary/keyart.png',
          type: 'case'
        },
        {
          title: 'BlackBook Productions',
          slug: 'blackbook',
          year: '2008-2010',
          skills: [
            'Creative Direction',
            'Graphic Design',
            'Marketing'
          ],
          description: 'While doing the agency thing, I started BlackBook with a small group of friends to organize events that we\'d want to attend ourselves. In the process, we\'d go on to throw parties all across New York City and build partnerships with various productions and venues – all while having a blast and getting a front seat to NYC\'s one-of-a-kind nightlife.',
          preview: 'projects/jujusdiary/preview.png',
          art: 'projects/jujusdiary/keyart.png',
          type: 'link',
          url: 'google.com'
        },
        {
          title: 'Agency Years',
          slug: 'agency',
          year: '2005-2012',
          skills: [
            'Creative Direction',
            'Interaction Design',
            'Flash/Actionscript'
          ],
          description: 'After leaving Klimate I started a circuit of ad-agencies throughout NYC, which seemed to be the natural course for designers at the time. It was always in my heart to start my own thing, but until I had an idea worth going all-in, advertising seemed to be the logical route to work on exciting projects for well-known brands.',
          preview: 'projects/jujusdiary/preview.png',
          art: 'projects/jujusdiary/keyart.png',
          type: 'offline'
        },
        {
          title: 'Klimate',
          slug: 'klimate',
          year: '2002',
          skills: [
            'Web Design',
            'Creative Direction',
            'Flash/Actionscript'
          ],
          description: 'Without having met Sam or joining Klimate, my life and career would most likely look drastically different today. Over the course of 3 years, I\'d not only learn and love to code, but how to be a designer that goes beyond visual decoration.',
          preview: 'projects/jujusdiary/preview.png',
          art: 'projects/jujusdiary/keyart.png',
          type: 'offline'
        }
      ]
    }
  },
  methods: {
    setBackdrop: function () {
      this.current = this.$route.name.toLowerCase().trim()
    },
    onNewRoute: function () {
      this.current = this.$route.name.toLowerCase().trim()
    },
    changeBG: function () {
      this.current = 'project'
    }
  },
  mounted () {
    this.setBackdrop()
  },
  beforeMount () {
    this.current = this.current
  },
  components: {
    SiteHeader
  }
}
</script>

<style lang="scss">
@import './styles/app';

.app {
  height: 100%;
  min-height: 100%;
}

[v-cloak] {
  display: none;
}
</style>
