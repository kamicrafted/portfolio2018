<template>
  <div>
    <header class="site-header">
      <nav class="nav">
        <router-link class="nav__item" to="/work" @click.native="emitRoute('work')">Work</router-link>
        <!-- <router-link class="nav__item" to="/play" @click.native="emitRoute('play')">Play</router-link> -->
        <router-link class="nav__item" to="/contact" @click.native="emitRoute('contact')">Contact</router-link>
      </nav>
      <router-link class="nav__item" to="/" @click.native="emitRoute('home')"><img class="logo" src="@/assets/logo-kamicrafted2018.svg" alt=""></router-link>
    </header>
  </div>
</template>

<script>
export default {
  name: 'SiteHeader',
  data () {
    return {
      msg: 'HEADER'
    }
  },
  methods: {
    emitRoute: function (routeName) {
      this.$emit('new-route', routeName)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.site-header {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;
  padding: em(25) em(50) 0;

  @media #{$sm} {
    flex-direction: row-reverse;
    padding: em(25) em(25) 0;
  }

  @media #{$md} {
    padding: em(25) em(25) 0;
  }
}

.nav {
  display: flex;

  &__item {
    position: relative;
    margin-right: em(15);
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: none;
    color: white;

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

    &:last-child {
      margin-right: 0;
    }
  }

  .router-link-exact-active {
    &:after {
      width: 100%;
    }
  }
}

.logo {
  position: relative;
  display: block;
  z-index: 50;
}
</style>
