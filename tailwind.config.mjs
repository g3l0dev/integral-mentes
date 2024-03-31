/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  screens: {
    m: { min: "320px", max: "767px" },
    md: { min: "768px", max: "1024px" },
    xl: { min: "1280px", max: "2560px" },
  },
  plugins: [],
};
