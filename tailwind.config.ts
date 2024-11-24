import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: "var(--font-figtree)",
        fredoka: "var(--font-fredoka)",
      },
      colors: {
        'pink100': '#db6885',
        'pink50': '#ffd3d7',
        'pink25': "#f5eaeb",
        'pink10': "#fff4f5",
        'black100': '#2f3137',
        'black50': '#707070',
        'grey10': "#c7c7c7",
        'yellow': '#ffc107',
        'white': '#ffffff',
      },
      boxShadowColor: {
        'pink': 'rgba(174, 19, 57, 0.34)',
      },
      borderColor: {
        'white': 'rgba(255, 255, 255, 0.4)',
      }
    },
  },
  plugins: [],
};
export default config;
