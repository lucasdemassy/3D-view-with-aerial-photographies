const path = require('path');

module.exports = {
    entry: {
        "three-photogrammetric-camera": [path.resolve(__dirname, 'src/main.js')],
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
        library: 'ThreePhotogrammetricCamera',
        libraryTarget: 'umd'
    },
  devServer: {
    publicPath: '/dist/'
  },
};
