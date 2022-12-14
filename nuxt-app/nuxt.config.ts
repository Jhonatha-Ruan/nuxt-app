// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["bootstrap/dist/css/bootstrap.min.css"], // add
    vite: {
      define: {
        "process.env.DEBUG": false,
      },
    },
});
