module.exports = {
    purge: ['./src/**/*.vue',],
    darkMode: false,
    theme: {
      extend:{
          fontFamily:{
            DM:"'DM Mono', monospace",
          }
      },
      screens: {
        'sm': '640px',
        'md': '769px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
