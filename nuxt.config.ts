import svgLoader from "vite-svg-loader";

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
    plugins: [svgLoader()],
  },
});
