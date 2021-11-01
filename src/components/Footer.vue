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
  }
</style>
