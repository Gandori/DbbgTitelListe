const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devConfig = require('./webpack/webpack.config.dev')
const prodConfig = require('./webpack/webpack.config.prod')

const path = require('path')
const resolvePath = (relativePath) => path.resolve(__dirname, relativePath)

module.exports = (env) => {
    const folders = {
        css: 'static/css/',
        js: 'static/js/',
        assets: 'static/assets/',
    }

    const filenames = {
        cssDev: folders.css + '[name].css',
        cssProd: folders.css + '[contenthash:10].css',
        assetsDev: folders.assets + '[name][ext]',
        assetsProd: folders.assets + '[contenthash:10][ext]',
    }

    return {
        ...(env.production ? prodConfig : devConfig),

        entry: {
            shared: ['react', 'react-dom'],
            main: './src/index.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
            new MiniCssExtractPlugin({
                filename: env.production ? filenames.cssProd : filenames.cssDev,
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/i,
                    loader: 'babel-loader',
                },
                {
                    test: /\.(css|scss|sass)$/i,
                    use: [
                        { loader: MiniCssExtractPlugin.loader },
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpg|ico)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: env.production
                            ? filenames.assetsProd
                            : filenames.assetsDev,
                    },
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                '@/components': resolvePath('src/components'),
                '@/assets': resolvePath('src/assets'),
                '@/data': resolvePath('src/data'),
                '@/styles': resolvePath('src/styles'),
            },
        },
    }
}
