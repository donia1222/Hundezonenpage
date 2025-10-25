import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#009688",
        "primary-dark": "#00796B",
        "primary-light": "#00d2bf",
        accent: "#FF1493",
        orange: "#FF8C00",
      },
    },
  },
  plugins: [],
};
export default config;
