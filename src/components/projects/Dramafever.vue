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
            <span :class="{
            'cdirection': (skill === 'Creative Direction'),
            'adirection': (skill === 'Art Direction'),
            'marketing': (skill === 'Marketing'),
            'web': (skill === 'Web Design'),
            'flash': (skill === 'Flash/Actionscript'),
            'graphic': (skill === 'Graphic Design'),
            'interaction': (skill === 'Interaction Design'),
            'dev': (skill === 'Front-end'),
            'operations': (skill === 'Operations'),
            'management': (skill === 'Management')
            }" v-for="(skill, index) in project[0].skills" :key="index">{{ skill }}
          </span>
          </div>
        </div>

        <p class="detail__description">{{ project[0].description }}</p>
      </div>

      <p>
        One of the first projects I started on was to modernize the DramaFever branding. After several rounds and countless bad ideas, the team landed on an updated version of the original logo.
      </p>

      <p>
        In 2013, the company ambitiously took on an evolutionary step for the website, introducing several new features, interactions and a facelift to bring the old site into the modern age.
      </p>
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

<style lang="scss" scoped>
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
  padding: em(50) 0;
}

.keyart {
  background: #820d08 url(../../assets/projects/dramafever/keyart_bg.jpg) top center;
  background-size: cover;
  padding-top: em(25);
  position: relative;
  z-index: 0;

  img {
    display: block;
    width: 100%;
  }
}
</style>
