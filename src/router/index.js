import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Work from '@/components/Work'
import Play from '@/components/Play'
import Contact from '@/components/Contact'
import BoxheadStudio from '@/components/projects/BoxheadStudio'
import WorkDramafever from '@/components/projects/Dramafever'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homepage,
      meta: {
        title: 'Kamicrafted - Body of Work 2018',
        metaTags: [
          {
            name: 'description',
            content: 'Kamicrafted - Body of Work 2018, product design, creative direction, illustration, kami studio, kamicrafted'
          }
        ]
      }
    },
    {
      path: '/work',
      name: 'Work',
      component: Work,
      meta: {
        title: 'Kamicrafted - Work',
        metaTags: [
          {
            name: 'description',
            content: 'Kamicrafted - Body of Work 2018, product design, creative direction, illustration, kami studio, kamicrafted'
          }
        ]
      }
    },
    {
      path: '/play',
      name: 'Play',
      component: Play,
      meta: {
        title: 'Kamicrafted - Play',
        metaTags: [
          {
            name: 'description',
            content: 'Kamicrafted - Body of Work 2018, product design, creative direction, illustration, kami studio, kamicrafted'
          }
        ]
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        title: 'Kamicrafted - Contact',
        metaTags: [
          {
            name: 'description',
            content: 'Kamicrafted - Body of Work 2018, product design, creative direction, illustration, kami studio, kamicrafted'
          }
        ]
      }
    },
    {
      path: '/project/boxhead-studio',
      name: 'BoxheadStudio',
      component: BoxheadStudio,
      meta: {
        title: 'Kamicrafted - BoxheadStudio',
        metaTags: [
          {
            name: 'description',
            content: 'Kamicrafted - Body of Work 2018, product design, creative direction, illustration, kami studio, kamicrafted'
          }
        ]
      }
    },
    {
      path: '/project/dramafever',
      name: 'DramaFever',
      component: WorkDramafever,
      meta: {
        title: 'Kamicrafted - DramaFever',
        metaTags: [
          {
            name: 'description',
            content: 'Kamicrafted - Body of Work 2018, product design, creative direction, illustration, kami studio, kamicrafted'
          }
        ]
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
