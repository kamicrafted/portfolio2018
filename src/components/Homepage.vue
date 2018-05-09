<template>
  <div class="view-home">
    <div class="container">
      <div class="intro">
        <h1 class="intro__headline">{{ headline }}</h1>

        <div class="current">
          <h3 class="current__label">Current Gig</h3>
          <h2 class="current__title">{{ currentgig }}</h2>
        </div>

        <h3 class="clients__label">Clients & Projects</h3>
        <div class="client-list">
          <div class="client-list__logo">
            <img src="@/assets/logos/wb.svg" alt="">
          </div>
          <div class="client-list__logo">
            <img src="@/assets/logos/umg.svg" alt="">
          </div>
          <div class="client-list__logo">
            <img src="@/assets/logos/idj.svg" alt="">
          </div>
          <div class="client-list__logo">
            <img src="@/assets/logos/spc.svg" alt="">
          </div>
          <div class="client-list__logo">
            <img src="@/assets/logos/swarovski.svg" alt="">
          </div>
          <div class="client-list__logo">
            <img src="@/assets/logos/pg.svg" alt="">
          </div>
          <div class="client-list__logo">
            <img src="@/assets/logos/dramafever.svg" alt="">
          </div>
          <div class="client-list__logo">
            <img class="logo-shudder" src="@/assets/logos/shudder.png" alt="">
          </div>
          <div class="client-list__logo">
            <img src="@/assets/logos/tacobell.svg" alt="">
          </div>
          <div class="client-list__logo">
            <img src="@/assets/logos/dc.svg" alt="">
          </div>
        </div>

        <!-- <div class="clients">
          <h3 class="clients__label">Past Gigs & Clients</h3>
          <p class="clients__list">
            {{ pastgigs }}
          </p>
        </div> -->
      </div>

      <img class="rasterboy" src="@/assets/images/rasterboy/default.png" alt="">
    </div>

    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteFooter from './partials/Footer'

export default {
  name: 'Home',
  components: {
    SiteFooter
  },
  data () {
    return {
      current: 'home',
      headline: 'Dave Yoon is a multi-disciplinary designer by trade, creative leader by function and problem solver by nature.  He’s been crafting experiences with pixels and bits since 2001.',
      currentgig: 'VP, Design at Warner Bros. Digital Labs',
      pastgigs: 'WB, Taco Bell, DramaFever, Shudder, Swarovski, P&G, Pfizer, Universal Music Group, Island Def Jam, Sony Pictures Classics'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/app';

.view-home {
  min-height: 100%;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  min-width: 100%;

  @media #{$sm} {
    display: flex;
    flex-direction: column-reverse;
  }
}

.intro {
  max-width: em(500);

  &__headline {
    font-size: rem(26);
    line-height: 1.5;

    @media #{$md} {
      font-size: rem(23);
    }

    @media #{$sm} {
      font-size: rem(22);
      line-height: 1.4;
    }

    @media #{$sm-v} {
      font-size: rem(20);
      line-height: 1.4;
    }
  }
}

.clients {
  margin-top: em(25);

  &__label {
    text-transform: uppercase;
    font-weight: 900;
    margin-bottom: em(10);

    @media #{$sm-v} {
      font-size: rem(12);
      margin-bottom: em(5);
    }
  }

  &__list {
    line-height: 1.6;
    opacity: .85;

    @media #{$sm-v} {
      font-size: rem(13);
    }
  }
}

.clients__label {
  margin-top: em(25);

  @media #{$sm} {
    margin-top: em(50);
  }
}

.client-list {
  width: em(500);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: em(5);
  grid-auto-rows: em(50);

  @media #{$sm} {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: em(75);
  }

  &__logo {
    background: rgba(#30273A, .3);
    border-radius: em(4);
    transition: all .15s $ease-out-circ;
    transform: scale(1);

    &:hover {
      background: rgba(#30273A, .8);
      transform: scale(1.2);
    }

    img {
      position: relative;
      top: 50%;
      display: block;
      margin: 0 auto;
      transform: translateY(-50%);

      @media #{$sm} {
        transform: scale(1.3) translateY(-50%);
      }
    }
  }

  .logo-shudder {
    width: em(80);
  }
}

.current {
  margin-top: em(50);

  &__label {
    text-transform: uppercase;
    font-weight: 900;
    margin-bottom: em(5);

    @media #{$sm-v} {
      font-size: rem(12);
      margin-bottom: em(5);
    }
  }

  &__title {
    opacity: .85;

    @media #{$sm-v} {
      font-size: rem(13);
    }
  }
}

.rasterboy {
  max-height: 85vh;
  margin-top: 5vh;
  opacity: .9;

  @media #{$sm} {
    max-height: 50vh;
  }
}
</style>
