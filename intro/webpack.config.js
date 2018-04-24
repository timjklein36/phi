const path = require('path');

module.exports = {
    entry: './src/intro.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: 'intro'
    },
    mode: 'production'
};
