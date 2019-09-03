const path = require('path');
module.exports = {
    mode: 'development',
    // mode: 'production',
    entry: {
        "main": path.resolve(__dirname, './src/main.js'),
        "e-react-redux": path.resolve(__dirname, './src/e-react-redux/index.js')
    },
    output: {
        path: path.resolve(__dirname, './src/e-react-redux/dist'),
        filename: '[name].js'
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
