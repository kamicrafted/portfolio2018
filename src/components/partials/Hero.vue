<template>
  <div>
    <header class="hero hero--work">
      <img class="hero__title hero__title--contact" src="@/assets/images/section-contact.svg" :alt="pagename" v-if="pagename === 'contact'">
      <img class="hero__title hero__title--work" src="@/assets/images/section-work.svg" :alt="pagename" v-if="pagename === 'work'">
      <img class="hero__title hero__title--play" src="@/assets/images/section-play.svg" :alt="pagename" v-if="pagename === 'play'">

      <nav class="hero__nav" v-if="pagename == 'work'">
        <router-link to="#" class="hero__nav-item" :class="{'active' :(navCurrent === 'recent')}" @click.native="emitSection('recent')">Recent</router-link>
        <router-link to="#" class="hero__nav-item" :class="{'active' :(navCurrent === 'archived')}" @click.native="emitSection('archived')">Archived</router-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data () {
    return {
      navCurrent: 'recent'
    }
  },
  methods: {
    emitSection: function (section) {
      this.navCurrent = section
      this.$emit('update-section', section)

      // load corresponding section
    }
  },
  props: ['pagename']
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.hero {
  &__title {
    display: block;
    width: 100%;
    padding: em(150) 0 em(50) 0;
    margin: 0 auto;
    pointer-events: none;

    @media #{$sm} {
      margin: 0 auto;;
      padding-top: em(150);
      width: 90%;
    }

    &--work {
      max-width: em(675);
    }

    &--play {
      max-width: em(550);
    }

    &--contact {
      max-width: em(950);
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
  }

  &__nav-item {
    position: relative;
    margin: 0 em(10) em(50);
    color: white;
    text-decoration: none;
    font-weight: 900;
    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: em(-10);
      width: 0;
      height: em(2);
      transform: translateX(-50%);
      transition: all .15s $ease-out-quad;
      background: $color-primary;
    }

    &:hover {
      &:after {
        width: 100%;
      }
    }

    &.active {
      &:after {
        width: 100%;
      }
    }
  }
}
</style>
