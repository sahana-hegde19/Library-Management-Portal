
let path = require('path')

module.exports = {
    build: {
        sitEnv: require('./sit.env'),
        prodEnv: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: '',
        assetsPublicPath: './', //生产环境assetsPublicPath: '/'
        staticPath:'./', //生产环境 staticPath:''
        productionSourceMap: false,
        
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 2017,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        staticPath:'/static/',
        proxyTable: {
            '/v2': {
                target: 'http://api.douban.com',
                changeOrigin : true,
                pathRewrite: {
                  '^/v2': '/v2'
                }
            }
        },
        
        cssSourceMap: false
    }
}
