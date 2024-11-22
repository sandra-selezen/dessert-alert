import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
export default config;
