<template>
  <footer class="app-footer">
    <div class="app-footer__decor"></div>
    <div class="app-footer__content">
      <div class="app-footer__pages text-subhead-2-medium">
        <ul class="app-footer__pages-list q-pr-xl">
          <li><a target="_blank" href="https://evis.market/pdf/white_paper_ru.pdf">White Paper</a></li>
          <li><a target="_blank" href="https://evisdm.medium.com/">Blog</a></li>
          <li><a target="_blank" href="https://t.me/igor_yur">Contact</a></li>
          <li><a target="_blank" href="#">FAQ</a></li>
          <li><a target="_blank" href="https://evis.market/ru/team/">Team</a></li>
        </ul>
        <ul class="app-footer__pages-list">
          <li><a target="_blank" href="https://evis.market/pdf/privacy_policy_en.pdf">Privacy</a></li>
          <li><a target="_blank" href="https://evis.market/pdf/terms_of_service_en.pdf">Terms</a></li>
          <li><a target="_blank" href="https://evis.market/pdf/cookie_policy_en.pdf">Cookie Policy</a></li>
          <li><a target="_blank" href="https://evis.market/pdf/ccpa_en.pdf">CCPA</a></li>
          <li><a target="_blank" href="https://evis.market/pdf/risk_disclaimer_en.pdf">Risk disclaimer</a></li>
        </ul>
      </div>
      <div class="app-footer__contacts">
        <Logo color="white" width="" height="40" />
        <div class="app-footer__social-nets row items-center">
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
        <a class="app-footer__email text-btn-2-semi-bold" target="_blank" href="mailto:support@evis.market">support@evis.market</a>
        <div class="app-footer__github"></div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from 'components/Logo';

export default {
  name: 'Footer',
  components: { Logo },
};
</script>

<style lang="scss">
  .app-footer {
    flex-shrink: 0;
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
      min-height: 200px;
      background-color: $primary;
      padding-top: 8px;
      padding-left: 25em;
      padding-bottom: 30px;
      display: flex;
      justify-content: space-around;
    }
    &__pages {
      display: flex;
      & ul {
        list-style: none;
      }
      & a {
        text-decoration: none;
        color: white;
      }
    }
    &__email {
      text-decoration: none;
      color: white;
    }
  }
</style>
