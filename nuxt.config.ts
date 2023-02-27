// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    css: ["~/assets/css/main.css", "remixicon/fonts/remixicon.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    app: {
        head: {
            title: "notsapinho",
            link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
        }
    }
});
