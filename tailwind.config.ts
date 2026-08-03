import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: "#00e5ff",
        neonPink: "#ff00ea",
      },
      backgroundImage: {
        "nexus-gradient": "linear-gradient(to right, #00e5ff, #ff00ea)",
      },
    },
  },
  plugins: [],
};
export default config;