/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "250px auto", //for sidebar layout
      },
      gridTemplateRows: {
        header: "64px auto", //for the navbar layout
      },
      screens: {
        "max-sm": { 'max': '640px' },
        // => @media (max-width: 640px) { ... }
        "max-md": { 'max': '767px' },
        // => @media (max-width: 767px) { ... }
        "max-lg": { 'min': '507px', 'max': '1035px' },
        // => @media (min-width: 507px, max-width: 1035px) { ... }
        "top-bar": { 'max': '700px' },
        // => @media (max-width: 700px) { ... }
        "card": { 'max': '507px' },
        // => @media (max-width: 507px) { ... }
        "card-2": { 'max': '518px' },
        // => @media (max-width: 518px) { ... }
        "mobile": { 'max': '380px' },
        // => @media (max-width: 380px) { ... }
        "nav-bar": { 'max': '450px' },
        // => @media (max-width: 450px) { ... }
        "nav-bar-2": { 'max': '600px' },
        // => @media (max-width: 600px) { ... }
      },
    },
  },
};
