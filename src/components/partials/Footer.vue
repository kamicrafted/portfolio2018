<template>
  <div>
    <footer class="site-footer">
      <p class="blurb">
        &copy; {{ new Date().getFullYear() }}
        Crafted with
        <img class="icon-heart" src="../../assets/icons/icon-heart.svg" alt="">, powered by
        <a href="https://vuejs.org/"><img class="vue" src="../../assets/logo-vue.svg" alt=""></a>
      </p>

      <div class="social">
        <div class="social__item">
          <a href="https://www.dribbble.com/kamicrafted/"><img src="@/assets/icons/icon-dribbble.svg" alt=""></a>
        </div>
        <div class="social__item">
          <a href="https://www.instagram.com/kamicrafted/"><img src="@/assets/icons/icon-instagram.svg" alt=""></a>
        </div>
        <div class="social__item">
          <a href="https://www.linkedin.com/in/kamicrafted/"><img src="@/assets/icons/icon-linkedin.svg" alt=""></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SiteFooter',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: em(50);
  padding: 0 em(50) em(25) em(50);
  margin-top: em(50);

  @media #{$md} {
    padding: 0 em(25) em(25) em(25);
  }

  @media #{$sm} {
    margin-top: em(100);
    padding: 0 em(25) em(25) em(25);
  }
}

.social {
  display: flex;
  align-items: center;

  &__item {
    display: block;
    margin-left: em(20);

    img {
      height: em(25);
    }
  }
}

.blurb {
  font-size: rem(12);
  letter-spacing: .025em;
  opacity: .75;
}

.vue {
  position: relative;
  top: em(2);
  width: em(20);
}

.icon-heart {
  position: relative;
  top: em(4);
  width: em(20);
}
</style>
