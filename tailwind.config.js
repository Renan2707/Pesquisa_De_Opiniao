module.exports = {           
  content: ["./core/**/*.{html,js}",],
  theme: {
    extend: {
      fontFamily: {
        urbanist: "'Urbanist', sans-serif",
        cairo: "'Cairo', sans-serif",
        fredoka: "'Fredoka', sans-serif",
      },
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/container-queries'),
      require('@tailwindcss/aspect-ratio'),
  ],  
}

