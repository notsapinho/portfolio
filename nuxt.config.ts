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
            meta: [
                {
                    name: "description",
                    content: "sapinho o mais brabo do discord rawrr"
                },
                { name: "theme-color", content: "#00dc82" },
                { name: "og:title", content: "notsapinho" },
                {
                    name: "og:description",
                    content: "sapinho o mais brabo do discord rawrr"
                },
                { name: "og:image", content: "/favicon.png" },
                { name: "og:locale", content: "pt_BR" },
                { name: "og:type", content: "pt_BR" }
            ],
            link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
        }
    }
});
