// tailwind.config.js

const { nextui } = require('@nextui-org/theme');

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    // ... other content paths
    "./node_modules/@nextui-org/theme/dist/components/button.js",
    "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
