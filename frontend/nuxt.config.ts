// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  tailwindcss: {
    configPath: "~/tailwind.config.ts",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/vue-fontawesome",
    ],
  },
  modules: ["@nuxt/ui", "@vee-validate/nuxt"],
  runtimeConfig: {
    public: {
      baseUrl: process.env.API_URL,
    },
  },
});
