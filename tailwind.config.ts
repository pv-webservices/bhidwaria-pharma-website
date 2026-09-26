import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "sans-serif"],
      },
      colors: {
        brand: {
          navy: "#062f55",
          blue: "#0b5f97",
          sky: "#1c9ad6",
          green: "#4caf2a",
          lime: "#7ccf3f",
          ink: "#132b45",
          mist: "#f2f8fc",
          pale: "#ecf8ef",
        },
      },
      boxShadow: {
        soft: "0 14px 40px -12px rgba(6,47,85,.18)",
        card: "0 6px 22px -8px rgba(19,43,69,.12)",
        lift: "0 26px 50px -18px rgba(6,47,85,.30)",
        glow: "0 12px 30px -8px rgba(76,175,42,.45)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 18% 12%, rgba(124,207,63,.16), transparent 34%), radial-gradient(circle at 82% 20%, rgba(28,154,214,.16), transparent 40%), linear-gradient(135deg,#f8fcff 0%,#eef7fd 55%,#f5fcf2 100%)",
        "navy-gradient": "linear-gradient(120deg,#041f3a 0%,#062f55 40%,#0b5f97 100%)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        "pulse-ring": { "0%": { transform: "scale(.9)", opacity: ".7" }, "100%": { transform: "scale(1.6)", opacity: "0" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        "spin-slow": "spin-slow 40s linear infinite",
        "pulse-ring": "pulse-ring 1.8s cubic-bezier(.2,.6,.4,1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
