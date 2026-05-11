/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ivory: '#faf9f7',
        charcoal: '#1a1a1a',
        mist: '#73726d',
        border: '#e8e4dc',
        clay: '#bc4b2f',
      },
      fontFamily: {
        serif: ['"Source Serif 4"', '"Source Serif Pro"', 'Georgia', 'serif'],
      },
      maxWidth: {
        column: '40rem',
      },
    },
  },
  plugins: [],
};
