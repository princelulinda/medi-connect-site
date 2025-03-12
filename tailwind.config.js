/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./public/**/*.html",
    "./dist/**/*.html",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes : [
      {
        mytheme: {
          "primary": "#5998ff",
          "secondary": "#f6d860",
          "accent": "#5ac8fa",
          "neutral": "#f9fcfd",
          "base-100": "#fcfdff",
        },
      },
        "light"
    ]
  
    },
  plugins: [
    require('daisyui'),
  ],
}

