const path = require('path');
module.exports = {
    entry: './lib/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname,'dist/lib'),
        library: 'FUI',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};
