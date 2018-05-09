<template>
  <div>
    <div class="detail detail--2col">
      <div class="detail__project">
        <h3 class="detail__year">{{ project[index].year }}</h3>
        <h1 class="detail__title">{{ project[index].title }}</h1>
        <div class="detail__skills">
          <span v-for="(skill, index) in project[index].skills" :key="index">{{ skill }}</span>
        </div>
      </div>

      <p class="detail__description">
        {{ project[index].description }}
        <br v-if="project[index].type === 'case'">
        <!-- <router-link :to="'/project/' + project[index].slug" class="btn btn--more" v-if="project[index].type === 'case'">
          <span><img class="icon-send" src="@/assets/icons/icon-stacks.svg" alt=""> View project</span>
        </router-link> -->

        <span class="btn btn--more" v-if="project[index].type === 'case'" @click="updateRoute(project[index].slug)">
          <img class="icon-send" src="@/assets/icons/icon-stacks.svg" alt=""> View project
        </span>

        <br v-if="project[index].type === 'link'">
        <router-link to="/" class="btn btn--link" v-if="project[index].type === 'link'">
          <span><img class="icon-send" src="@/assets/icons/icon-rocket.svg" alt=""> Launch website</span>
        </router-link>

        <br v-if="project[index].type === 'offline'">
        <span class="btn btn--offline" v-if="project[index].type === 'offline'">Offline</span>
      </p>

    </div>

    <div class="keyart">
      <img :src="getImg(project[index].preview)" alt="">
    </div>

    <hr>
  </div>
</template>

<script>
export default {
  props: ['project', 'index'],
  methods: {
    getImg: function (url) {
      return require('../assets/' + url)
    },
    updateRoute (path) {
      this.$router.push('project/' + path)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/app';

.detail {
  margin-top: em(50);
}

.keyart {
  position: relative;
  z-index: 100;
  margin: em(50) 0 em(150) 0;

  @media #{$sm} {
    margin-bottom: em(50);
  }

  img {
    width: 100%;
  }
}

hr {
 border: none;
 border-top: 1px solid rgba(darken(cyan, 50%), .2);
 border-bottom: 1px solid rgba(cyan, .2);
}
</style>
