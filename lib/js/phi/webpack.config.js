module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'phi.js',
        library: 'phi',
        libraryTarget: 'umd'
    },
    mode: 'production'
};
