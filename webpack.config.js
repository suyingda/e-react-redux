const path = require('path');
module.exports = {
    mode: 'development',
    // mode: 'production',
    entry: {
        // "main": path.resolve(__dirname, './src/main.js'),
        "e-react-redux": path.resolve(__dirname, './src/e-react-redux/index.js'),
        // "tree": "./src/e-react-redux/tree.js",
        // "tree.min": "./src/e-react-redux/tree.js"
    },
    output: {
        path: path.resolve(__dirname, './src/e-react-redux/dist'),
        filename: '[name].js',
        libraryTarget: 'umd',//将你的 library 暴露为所有的模块定义下都可运行的方式
        // library: 'Tree',
        // libraryExport: "default",
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
    }
}
