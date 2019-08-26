const path = require('path');
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                // exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react",'@babel/preset-env']
                    },
                     
                }
            }
        ]
    }
}