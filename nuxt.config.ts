// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxthq/ui"],

  ui: {
    icons: ["heroicons", "bxl", "mdi", "fluent"],
  },

  colorMode: {
    preference: "dark",
  },
});
