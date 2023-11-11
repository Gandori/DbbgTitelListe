const path = require('path')

module.exports = {
    mode: 'development',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../build'),
        filename: 'static/js/[name].js',
        clean: true,
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        liveReload: true,
        hot: true,
        allowedHosts: ['localhost'],
        client: {
            overlay: true,
            progress: true,
        },
        compress: true,
        port: 5050,
    },
}
