<template>
  <div class="play play--boxed">
    <div class="container">
      <div class="detail detail--left">
        <div class="detail__project">
          <h3 class="detail__year">{{ project[index].year }}</h3>
          <h1 class="detail__title">{{ project[index].title }}</h1>
          <div class="detail__skills">
            <span v-for="(skill, index) in project[index].skills" :key="index">{{ skill }}</span>
          </div>
        </div>

        <p class="detail__description">
          {{ project[index].description }}
          <br v-if="project[index].link === 1">
          <a :href="project[index].url" class="btn btn--more" v-if="project[index].link === 1">Launch website</a>
        </p>
      </div>

      <div class="keyart">
        <img :src="getImg(project[index].art)" alt="">
      </div>

      <div class="box" v-if="project[index].type === 'boxed'">
        <div class="box__top"></div>
        <div class="box__right"></div>
        <div class="box__bottom"></div>
        <div class="box__left--top"></div>
        <div class="box__left--bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project', 'index'],
  methods: {
    getImg: function (url) {
      return require('../../assets/' + url)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/app';

.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media #{$sm} {
    flex-direction: column-reverse;
  }
}

.detail {
  position: relative;
  z-index: 10;
  max-width: em(500);
  padding: 0 em(25);

  @media #{$sm} {
    max-width: 100%;
    padding: 0;
    margin-bottom: em(100);
  }

  @media #{$sm} {
    padding-top: em(50);
  }

  &__title {
    margin: em(1) 0;
    font-size: rem(60);
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;

    @media #{$sm} {
      font-size: rem(30);
    }
  }

  &__year {
    font-size: rem(15);
    font-weight: 700;
    line-height: 1;
    opacity: .6;
  }

  &__skills {
    font-size: rem(13);
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
  }
}

.keyart {
  position: relative;
  z-index: 100;
  margin: em(50) 0 em(150) 0;

  @media #{$sm} {
    margin: 0 0 em(50);
  }

  img {
    width: 100%;
  }
}

.box {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80%;
  height: 50%;
  transform: translateX(-50%) translateY(-50%);

  @media #{$sm} {
    margin-top: em(100);
    top: auto;
    bottom: 20%;
    height: 40%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  &__left--top {
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
    width: em(6);
    height: 20%;
    background: linear-gradient(to top, #926cff, #9858c4);

    @media #{$md} {
      height: 10%;
    }

    @media #{$sm} {
      height: 100%;
      background: linear-gradient(to top, #9858c4, #926cff, #9858c4);
    }
  }

  &__left--bottom {
    position: absolute;
    z-index: 10;
    left: 0;
    bottom: 0;
    width: em(6);
    height: 20%;
    background: linear-gradient(to bottom, #926cff, #9858c4);

    @media #{$md} {
      height: 10%;
    }

    @media #{$sm} {
      display: none;
    }
  }

  &__right {
    position: absolute;
    z-index: 10;
    right: 0;
    top: 0;
    width: em(6);
    height: 100%;
    background: linear-gradient(to right, #926cff, #8e7dff, #9858c4);
  }

  &__top {
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: em(6);
    background: linear-gradient(to right, #9858c4, #8e7dff, #926cff);
  }

  &__bottom {
    position: absolute;
    z-index: 10;
    left: 0;
    bottom: 0;
    width: 100%;
    height: em(6);
    background: linear-gradient(to right, #9858c4, #8e7dff, #926cff );
  }
}

hr {
 border: none;
 border-top: 1px solid rgba(darken(cyan, 50%), .2);
 border-bottom: 1px solid rgba(cyan, .2);
}

.play--boxed {
  .detail {
    width: 50%;

    @media #{$sm} {
      width: 100%;
    }
  }
  .keyart {
    width: 40%;

    @media #{$sm} {
      width: 100%;
      text-align: center;
    }

    img {
      @media #{$sm} {
        width: auto;
        max-height: em(600);
      }
    }
  }
}
</style>
