<template>
  <q-footer class="app-footer">
    <div class="app-footer__decor-wrapper">
      <div class="app-footer__decor"></div>
    </div>
    <div class="app-footer__content row">
      <div class="app-footer__pages text-subhead-2-medium col-md-7 col-sm-12 col-xs-12">
        <ul class="app-footer__pages-list q-pr-xl">
          <li><a target="_blank" href="https://evis.market/pdf/white_paper_en.pdf">White Paper</a></li>
          <li><a target="_blank" href="https://evisdm.medium.com/">Blog</a></li>
          <li><a target="_blank" href="https://t.me/igor_yur">Contact</a></li>
          <li><a target="_blank" href="#">FAQ</a></li>
          <li><a target="_blank" href="https://evis.market/en/team/">Team</a></li>
        </ul>
        <ul class="app-footer__pages-list">
          <li><a target="_blank" href="https://evis.market/pdf/privacy_policy_en.pdf">Privacy</a></li>
          <li><a target="_blank" href="https://evis.market/pdf/terms_of_service_en.pdf">Terms</a></li>
          <li><a target="_blank" href="https://evis.market/pdf/cookie_policy_en.pdf">Cookie Policy</a></li>
          <li><a target="_blank" href="https://evis.market/pdf/ccpa_en.pdf">CCPA</a></li>
          <li><a target="_blank" href="https://evis.market/pdf/risk_disclaimer_en.pdf">Risk disclaimer</a></li>
        </ul>
      </div>
      <div class="column col-md-5 col-sm-12 col-xs-12" :class="[smallScreen ? 'items-center' : 'items-start']">
        <div class="row q-mt-xl q-mb-lg">
          <Logo color="white" width="" height="40" />
        </div>
        <div class="row items-center q-mb-lg">
          <q-btn
            round
            color="ev-dark"
            size="11px"
            type="a"
            href="https://t.me/evislinks"
            target="_blank"
            class="q-mr-md"
          >
            <q-icon>
              <img src="~assets/telegram-icon.svg" alt="Telegram" />
            </q-icon>
          </q-btn>
          <q-btn
            round
            color="ev-dark"
            size="11px"
            type="a"
            href="https://twitter.com/evisdm"
            target="_blank"
            class="q-mr-md"
          >
            <q-icon>
              <img src="~assets/twitter-icon.svg" alt="Twitter" />
            </q-icon>
          </q-btn>
          <q-btn
            round
            color="ev-dark"
            size="11px"
            type="a"
            href="https://evisdm.medium.com/"
            target="_blank"
            class="q-mr-md"
          >
            <q-icon>
              <img src="~assets/medium-icon.svg" alt="Medium" />
            </q-icon>
          </q-btn>
          <q-btn
            round
            color="ev-dark"
            size="11px"
            type="a"
            href="https://www.reddit.com/user/evisdm"
            target="_blank"
            class="q-mr-md"
          >
            <q-icon>
              <img src="~assets/reddit-icon.svg" alt="Reddit" />
            </q-icon>
          </q-btn>
          <q-btn
            round
            color="ev-dark"
            size="11px"
            type="a"
            href="https://www.youtube.com/channel/UCZshyycv07LaAbKMQL0BsAw"
            target="_blank"
            class="q-mr-md"
          >
            <q-icon>
              <img src="~assets/youtube-icon.svg" alt="Youtube" />
            </q-icon>
          </q-btn>
        </div>
        <a class="app-footer__email text-btn-2-semi-bold q-mb-md" target="_blank" href="mailto:support@evis.market">
          support@evis.market
        </a>
        <a class="app-footer__github text-btn-2-semi-bold" target="_blank" href="https://github.com/evis-market">
          <span class="q-mr-sm">Github</span>
          <q-icon name="arrow_forward" color="white" size="25px" />
        </a>
      </div>
    </div>
  </q-footer>
</template>

<script>
import Logo from 'components/Logo';

export default {
  name: 'Footer',
  computed: {
    smallScreen() {
      return this.$q.screen.sm || this.$q.screen.xs;
    },
  },
  components: { Logo },
};
</script>

<style lang="scss">
  .app-footer {
    &__decor-wrapper {
      background-color: white;
      height: 80px;
      width: 100%;
    }
    &__decor {
      -webkit-transform: skew(45deg);
      -ms-transform: skew(45deg);
      transform: skew(45deg);
      background-color: $primary;
      height: 80px;
      width: 55%;
      margin-left: -80px;
    }
    &__content {
      margin-right: -20px;
      margin-left: -20px;
      background-color: $primary;
      padding-top: 8px;
      padding-bottom: 30px;
    }
    &__pages {
      display: flex;
      justify-content: center;
      & ul {
        list-style: none;
      }
      & a {
        text-decoration: none;
        color: white;
      }
    }
    &__email, &__github {
      text-decoration: none;
      color: white;
    }
  }
</style>
