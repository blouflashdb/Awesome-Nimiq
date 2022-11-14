import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import svgLoader from "vite-svg-loader";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  experimental: {
    reactivityTransform: false,
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },

  css: ["@nimiq/style", "~/assets/fonts/fonts.scss"],

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
