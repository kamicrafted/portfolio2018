<template>
  <div>
    <div class="keyart">
      <img :src="getImg(project[0].art)" alt="">
    </div>
    <div class="container">
      <div class="detail detail--2col">
        <div class="detail__project">
          <h3 class="detail__year">{{ project[0].year }}</h3>
          <h1 class="detail__title">{{ project[0].title }}</h1>
          <div class="detail__skills">
            <span v-for="(skill, index) in project[0].skills" :key="index">{{ skill }}</span>
          </div>
        </div>

        <p class="detail__description">{{ project[0].description }}</p>
      </div>

      <div class="block-img block-img--right">
        <img class="block-img__screen" src="@/assets/projects/jujusdiary/juju1.jpg" alt="">
        <div class="block-img__info">
          <h2 class="block-img__title">Website</h2>
          <p class="block-img__description">
            1. Getting our name out there on Reddit, through weekly drawing sessions; later expanding to work with other guest artists<br>
          </p>
        </div>
      </div>

      <div class="block-img">
        <img class="block-img__screen" src="@/assets/projects/jujusdiary/juju1.jpg" alt="">
        <div class="block-img__info">
          <h2 class="block-img__title">Website</h2>
          <p class="block-img__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis quaerat nobis aliquid magni perferendis necessitatibus temporibus eos odio. Dolor adipisci deleniti eos magni officia ipsum sit nobis soluta sapiente.
          </p>
        </div>
      </div>

      <h3 class="block-pullquote">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    getImg: function (url) {
      return require('../../assets/' + url)
    },
    newBG: function () {
      this.$emit('newBackdrop')
    }
  },
  mounted () {
    this.newBG()
  },
  props: ['project', 'index']
}
</script>

<style lang="scss">
@import '../../styles/app';

.block-pullquote {
  position: relative;
  margin: em(15) 0;
  padding: em(25) 0;
  font-size: rem(32);
  text-align: center;
  font-weight: 100;

  &:before {
    content: '–';
    position: absolute;
    top: 0;
    left: 50%;
    width: 20%;
    color: $color-primary;
    transform: translateX(-50%);
  }

  &:after {
    content: '–';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 20%;
    color: $color-primary;
    transform: translateX(-50%);
  }
}

.block-img {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__info {
    width: 40%;
  }

  &__title {
    font-size: rem(20);
    font-weight: 900;
    text-transform: uppercase;
  }

  &__screen {
    margin: em(25) em(25) em(25) 0;
  }

  &--right {
    flex-direction: row-reverse;

    .block-img__screen {
      margin-right: 0;
      margin: em(25) 0 em(25) em(25);
    }
  }

  @media #{$sm} {
    flex-direction: column;

    .block-img__info {
      width: 100%;
      margin-top: em(25);
    }

    .block-img__screen {
      width: 100%;
      margin: em(50) 0 0;
    }
  }
}

.detail {
  padding: 0 0 em(50);
}

.keyart {
  position: relative;
  z-index: 0;
  img {
    width: 100%;
  }
}
</style>
