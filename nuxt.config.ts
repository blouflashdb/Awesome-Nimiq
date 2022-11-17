import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],

  experimental: {
    reactivityTransform: false,
  },

  css: ["@/assets/fonts/fonts.scss", "@nimiq/style"],

  tailwindcss: {
    injectPosition: "first",
  },

  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "lang_english",
        file: "en.json",
      },
      {
        code: "de",
        iso: "de-DE",
        name: "lang_german",
        file: "de.json",
      },
    ],
    langDir: "locales/",
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "locale",
      redirectOn: "root", // recommended
      alwaysRedirect: true,
    },
  },

  vite: {
    plugins: [svgLoader()],
  },
});
