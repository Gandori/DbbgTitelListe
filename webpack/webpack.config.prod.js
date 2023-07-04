const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const WebpackAssetsManifest = require('webpack-assets-manifest')

module.exports = {
    mode: 'production',
    output: {
        publicPath: '/ReactBuild/',
        path: path.resolve(__dirname, '../build'),
        filename: 'static/js/[contenthash:10].js',
        clean: true,
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                extractComments: false,
                terserOptions: {
                    compress: true,
                },
            }),
            new WebpackAssetsManifest({
                publicPath: true,
            }),
        ],
    },
}
