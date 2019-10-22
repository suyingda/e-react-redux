const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    mode: 'none',
    // mode: 'development',
    // mode: 'production',
    // devtool:'source-map',
    entry: {
        "main": path.resolve(__dirname, './src/main.js'),
        "e-react-redux": path.resolve(__dirname, './src/e-react-redux/index.js'),
        "e-react-redux.min": path.resolve(__dirname, './src/e-react-redux/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './src/e-react-redux/dist'),
        filename: '[name].js',
        libraryTarget: 'umd',//将你的 library 暴露为所有的模块定义下都可运行的方式
        library: 'e-react-redux',
        // libraryExport: "default",
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
            })
        ]
    },
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                // exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react", '@babel/preset-env']
                    },

                }
            }
        ]
    },
    plugins: [
        function () {
            this.hooks.done.tap('done', (stats) => {
                if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == 2) {
                    console.log('build error');
                    process.exit(1)
                }
            })
        }
    ]
}
