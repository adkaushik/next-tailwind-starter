const colors = require('tailwindcss/colors');

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'var(--color-current)',
      black: 'var(--color-black)',
      background: 'var(--color-background)',
      gray: 'var(--color-gray)',
      darkGray: 'var(--color-darkGray)',
      blue: 'var(--color-blue)',
      white: 'var(--color-white)',
      primary: 'var(--color-primary)',
      pureWhite: 'var(--color-pureWhite)',
      solidPrimary: 'var(--color-solidPrimary)',
      solidDark: 'var(--color-solidDark)',
      solidLight: 'var(--color-solidLight)',
      solidPink: 'var(--color-solidPink)'
    },
    fontFamily: {
       logo: ["'Dancing Script'"],
       body: ["Montserrat"]
    }
  }
};
