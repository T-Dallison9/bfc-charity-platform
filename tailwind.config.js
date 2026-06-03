/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-primary": "#FFFFFF",
        "neutral-secondary-soft": "#F3F3F3",
        "neutral-tertiary": "#E8E8E8",
        "default": "#D0D0D0",
        "heading": "#1A1A1A",
        "body": "#4A4A4A",
        "brand": "#6366F1",
        "fg-brand": "#6366F1",
      },
      
      borderRadius: {
        "base": "0.375rem",
      },
      fontFamily: {
        sans: ['League Spartan', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
