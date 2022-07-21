const changeLoaderOptions = (loaders) => {
  if (loaders) {
    for (const loader of loaders) {
      if (loader.loader === "sass-loader") {
        Object.assign(loader.options, {
          includePaths: ["./assets"],
        });
      }
    }
  }
};

export default {
  /*
   ** Headers of the page
   */
  head: {
    title: "Nuxt application",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "This app use Nuxt to call Spring Boot app",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  /*
   ** Set the link active classes
   */
  // router: {
  //   linkActiveClass: 'active open'
  // },

  /*
   ** Customize the progress bar color
   */
  loading: { color: "#42A5CC" },

  /**
   * Import CSS
   */
  css: [
    "~/node_modules/flag-icon-css/css/flag-icon.min.css",
    "~/node_modules/font-awesome/css/font-awesome.min.css",
    "~/node_modules/simple-line-icons/css/simple-line-icons.css",
    "~/node_modules/bootstrap-vue/dist/bootstrap-vue.css",
    { src: "~/assets/scss/style.scss", lang: "scss" },
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    // Doc: https://github.com/bootstrap-vue/bootstrap-vue
    "bootstrap-vue/nuxt",
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Style resources configuration
   */
  styleResources: {
    scss: "./assets/scss/style.scss",
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });

        const vueLoader = config.module.rules.find(
          ({ loader }) => loader === "vue-loader"
        );
        const {
          options: { loaders },
        } = vueLoader || { options: {} };

        if (loaders) {
          for (const loader of Object.values(loaders)) {
            changeLoaderOptions(Array.isArray(loader) ? loader : [loader]);
          }
        }

        config.module.rules.forEach((rule) => changeLoaderOptions(rule.use));
      }
    },
  },
};
