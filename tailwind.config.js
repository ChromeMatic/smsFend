module.exports = {
    purge: ['./src/**/*.vue',],
    darkMode: false,
    theme: {
        extend: {
            animation:{ bounce:'pulse .8s infinite'},
            animation:{ bounce:'ping 2s infinite'}
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}