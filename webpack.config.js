const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = { 
    watch: true,
    entry: './src/index.js', 
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'bundle.js'
    },
    devtool: 'cheap-source-map', 
    devServer: { 
        static: { 
            directory: path.join(__dirname, 'dist'), 
        },
        open: true,
        port: 9000, 
        compress: false
    }, 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, 

            },
            {
                test: /\sc|ass$/, 
                use: [
                    { loader: MiniCssExtractPlugin.loader}, 
                    { loader: "css-loader" }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}