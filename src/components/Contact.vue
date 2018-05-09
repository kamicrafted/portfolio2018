<template>
  <div class="view-contact">
    <hero :pagename="current"></hero>

    <div class="container">
      <h2 class="contact-msg">
        {{ msg }}
      </h2>

      <form class="form pageclip-form" action="https://send.pageclip.co/NRtF9mtNQS24qAKhaBa7hLsw7cs9FTNk" method="post">
        <div class="form__fields">
          <div class="form__info">
            <div class="form__input-group">
              <label class="form__label" for="fullname">Full Name<span class="form__required">*</span></label>
              <input class="form__input-text" name="fullname" type="text" required>
            </div>

            <div class="form__input-group">
              <label class="form__label" for="email">Email<span class="form__required">*</span></label>
              <input class="form__input-text" name="email" type="email" required>
            </div>

            <div class="form__input-group">
              <label class="form__label" for="phone">Phone</label>
              <input class="form__input-text" name="phone" type="phone">
            </div>
          </div>

          <div class="form__message">
            <label class="form__label" for="message">Message<span class="form__required">*</span></label>
            <textarea class="form__input-textarea" name="message" id="message" required></textarea>
          </div>
        </div>

        <div class="form__footer">
          <p class="form__safe">
            Your information is safe and won’t be used for anything other than to get in touch with you.
          </p>

          <button class="btn btn--submit submit"><img class="icon-send" src="@/assets/icons/icon-paperplane.svg" alt=""> Send</button>
        </div>
      </form>
    </div>

    <site-footer></site-footer>
  </div>
</template>

<script>
import Hero from './partials/Hero'
import SiteFooter from './partials/Footer'

export default {
  name: 'Contact',
  data () {
    return {
      current: 'contact',
      msg: 'Have a project you’re looking to commission or collaborate on? Drop me a note and I’ll get back to you as soon as possible!'
    }
  },
  components: {
    SiteFooter,
    Hero
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/app';

.contact-msg {
  max-width: em(475);
  margin: 0 auto;
  margin-bottom: em(25);
  text-align: center;
  font-size: rem(22);
  line-height: 1.6;
  opacity: .9;

  @media #{$sm} {
    font-size: rem(18);
    line-height: 1.4;
  }
}

.form {
  &__fields {
    display: flex;
    justify-content: space-between;

    @media #{$sm} {
      flex-direction: column;
    }
  }

  &__info {
    width: 49%;

    @media #{$sm} {
      width: 100%;
    }
  }

  &__message {
    display: flex;
    flex-direction: column;
    width: 49%;

    @media #{$sm} {
      width: 100%;
      margin-top: em(25);
    }

    .form__input-textarea {
      flex: 1 0 auto;

      @media #{$sm} {
        min-height: em(150);
      }
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: em(25);

    .submit {
      margin: 0 0 0 em(40);
    }
  }

  &__safe {
    font-size: rem(12);
    font-weight: 100;
  }
}
</style>
