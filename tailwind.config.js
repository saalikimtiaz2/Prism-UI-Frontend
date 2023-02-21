module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#171460',
      green: '#44bd32',
      danger: '#e84118',
      black: '#000000',
      white: '#fff',
      darkGrey: '#3b3b3b',
      grey: '#595959',
      lightGrey: '#B7B7B7',
    },
    screens: {
      xxs: '0px',
      xs: '250px',
      s: '350px',
      sm: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1369px',
    },
    extend: {
      gridTemplateColumns: {
        24: 'repeat(24, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
