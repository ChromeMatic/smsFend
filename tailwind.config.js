module.exports = {
    purge: [
        './src/**/*.vue',
    ],
    darkMode: true,
    theme: {
        extend: {
            fontFamily:{
                body:['Montserrat']
            },
            animation:{
                bounce:'bounce 5s infinite'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}