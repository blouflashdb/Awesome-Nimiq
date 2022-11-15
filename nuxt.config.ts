import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";
import svgLoader from "vite-svg-loader";

import en from "./locales/en.json";
import de from "./locales/de.json";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],

  experimental: {
    reactivityTransform: false,
  },

  css: ["@/assets/fonts/fonts.scss", "@nimiq/style"],

  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
      },
      {
        code: "de",
        iso: "de-DE",
      },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: true,
    },
    vueI18n: {
      legacy: false,
      locale: "en",
      messages: {
        en,
        de,
      },
    },
  },

  vite: {
    resolve: {
      alias: {
        "vue-i18n": "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js",
      },
    },
    plugins: [
      svgLoader(),
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json"),
        ],
      }),
    ],
  },
});
