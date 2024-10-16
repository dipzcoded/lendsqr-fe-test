/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        avenirNext:["Avenir Next Cyr",'sans-serif']
      },
      gridTemplateColumns: {
        'auto-fit-minmax': 'repeat(auto-fit, minmax(12rem, 1fr))',
        'auto-fit-minmax-2': 'repeat(auto-fit, minmax(14rem, 1fr))',
        'auto-fit-minmax-3': 'repeat(auto-fit, minmax(16rem, 1fr))',
        'auto-fit-minmax-4': 'repeat(auto-fit, minmax(18rem, 1fr))',
      },
      boxShadow: {
        loginShadow: "0px 15px 90px 0px #00000008",
        headerShaodw: "3px 0px 20px 0px #0000000A",
		userDataShadow:"3px 5px 20px 0px #0000000A",

      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
