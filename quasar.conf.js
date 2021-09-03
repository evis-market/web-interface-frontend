/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli/quasar-conf-js

/* eslint-env node */
const ESLintPlugin = require('eslint-webpack-plugin');
/* eslint func-names: 0 */
/* eslint global-require: 0 */
const { configure } = require('quasar/wrappers');
const path = require('path')

module.exports = configure((ctx) => ({
  // https://v2.quasar.dev/quasar-cli/supporting-ts
  supportTS: false,

  // https://v2.quasar.dev/quasar-cli/prefetch-feature
  // preFetch: true,

  // app boot file (/src/boot)
  // --> boot files are part of "main.js"
  // https://v2.quasar.dev/quasar-cli/boot-files
  boot: [
    'axios',
    'svc',
  ],

  // https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
  css: [
    'app.scss',
  ],

  // https://github.com/quasarframework/quasar/tree/dev/extras
  extras: [
    // 'ionicons-v4',
    // 'mdi-v5',
    // 'fontawesome-v5',
    // 'eva-icons',
    // 'themify',
    // 'line-awesome',
    // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

    'roboto-font', // optional, you are not bound to it
    'material-icons', // optional, you are not bound to it
  ],

  // Full list of options: https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
  build: {
    env: {
      API_BASE_URL: ctx.dev ? 'https://dev.evis.market' : 'https://evis.market',
    },

    vueRouterMode: 'history', // available values: 'hash', 'history'

    // transpile: false,

    // Add dependencies for transpiling with Babel (Array of string/regex)
    // (from node_modules, which are by default not transpiled).
    // Applies only if "transpile" is set to true.
    // transpileDependencies: [],

    // rtl: true, // https://v2.quasar.dev/options/rtl-support
    // preloadChunks: true,
    // showProgress: false,
    // gzip: true,
    // analyze: true,

    // Options below are automatically set depending on the env, set them if you want to override
    // extractCSS: false,

    // https://v2.quasar.dev/quasar-cli/handling-webpack
    // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
    chainWebpack(chain) {
      chain.plugin('eslint-webpack-plugin')
        .use(ESLintPlugin, [{ extensions: ['js', 'vue'] }]);
    },
    chainWebpack (chain, { isServer, isClient }) {
      chain.resolve.alias
        .set('services', path.resolve(__dirname, './src/services'));
    },
  },

  // Full list of options: https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
  devServer: {
    https: false,
    host: '0.0.0.0',
    port: 10000,
    open: true, // opens browser window automatically
  },

  // https://v2.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
  framework: {
    config: {},

    // iconSet: 'material-icons', // Quasar icon set
    // lang: 'en-US', // Quasar language pack

    // For special cases outside of where the auto-import strategy can have an impact
    // (like functional components as one of the examples),
    // you can manually specify Quasar components/directives to be available everywhere:
    //
    // components: [],
    // directives: [],

    // Quasar plugins
    plugins: [],
  },

  // animations: 'all', // --- includes all animations
  // https://v2.quasar.dev/options/animations
  animations: [],

  // https://v2.quasar.dev/quasar-cli/developing-ssr/configuring-ssr
  ssr: {
    pwa: false,

    // manualStoreHydration: true,
    // manualPostHydrationTrigger: true,

    prodPort: 3000, // The default port that the production server should use
    // (gets superseded if process.env.PORT is specified at runtime)

    maxAge: 1000 * 60 * 60 * 24 * 30,
    // Tell browser when a file from the server should expire from cache (in ms)

    chainWebpackWebserver(chain) {
      chain.plugin('eslint-webpack-plugin')
        .use(ESLintPlugin, [{ extensions: ['js'] }]);
    },

    middlewares: [
      ctx.prod ? 'compression' : '',
      'render', // keep this as last one
    ],
  },

  // https://v2.quasar.dev/quasar-cli/developing-pwa/configuring-pwa
  pwa: {
    workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
    workboxOptions: {}, // only for GenerateSW

    // for the custom service worker ONLY (/src-pwa/custom-service-worker.[js|ts])
    // if using workbox in InjectManifest mode
    chainWebpackCustomSW(chain) {
      chain.plugin('eslint-webpack-plugin')
        .use(ESLintPlugin, [{ extensions: ['js'] }]);
    },

    manifest: {
      name: 'Evis.Market',
      short_name: 'Evis.Market',
      description: 'EVIS Data Marketplace',
      display: 'standalone',
      orientation: 'portrait',
      background_color: '#ffffff',
      theme_color: '#027be3',
      icons: [
        {
          src: '/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          src: '/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: '/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
        },
      ],
    },
  },

  // Full list of options: https://v2.quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
  cordova: {
    // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
  },

  // Full list of options: https://v2.quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
  capacitor: {
    hideSplashscreen: true,
  },

  // Full list of options: https://v2.quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
  electron: {
    bundler: 'packager', // 'packager' or 'builder'

    packager: {
      // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

      // OS X / Mac App Store
      // appBundleId: '',
      // appCategoryType: '',
      // osxSign: '',
      // protocol: 'myapp://path',

      // Windows only
      // win32metadata: { ... }
    },

    builder: {
      // https://www.electron.build/configuration/configuration

      appId: 'frontend',
    },

    // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
    chainWebpackMain(chain) {
      chain.plugin('eslint-webpack-plugin')
        .use(ESLintPlugin, [{ extensions: ['js'] }]);
    },

    // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
    chainWebpackPreload(chain) {
      chain.plugin('eslint-webpack-plugin')
        .use(ESLintPlugin, [{ extensions: ['js'] }]);
    },
  },
}));
