
module.exports = {

    publicPath: './',
    outputDir: 'dist',
    indexPath: 'dist/index.html',

    devServer: {
        port: 3000,
        compress: true,
    },

    configureWebpack: {
        plugins: []
    }

};