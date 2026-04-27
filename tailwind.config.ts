import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0f1419",
        panel: "#151b22",
        "panel-soft": "#1b232c",
        line: "#26313d",
        muted: "#9aa6b2",
        accent: "#4fd1c5",
        "accent-soft": "#173b3d"
      },
      boxShadow: {
        panel: "0 18px 50px rgba(0, 0, 0, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
