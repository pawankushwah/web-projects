/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {
        extend: {
            fontFamily:{
                "comfortaa" : "'Comfortaa', cursive, 'Roboto Serif', serif"
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "dark",
      },
}
