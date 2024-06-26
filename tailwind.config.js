/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}"
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: "Poppins, sans-serif"
            },
            backgroundImage: {
                primary: "url('@/assets/imgs/background.png')"
            }
        }
    },
    plugins: []
};
