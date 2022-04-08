const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // entry
    entry : "./src/script/app.js",

    // output
    output : {
        path : require("path").resolve(__dirname,'dist'),
        filename : "app.bundle.js"
    },

    // mode
    mode : "production",

    // module
    module : {
        rules : [
            { // for sass, css and style
                test : /\.s[ac]ss/i,
                use : [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },

    // plugins
    plugins : [
        new HtmlWebpackPlugin({
            title : "Pdfing",
            filename : "index.html"
        })
    ],

    // webpack server
    devServer : {
        port : 3030,
        open : true,
        compress : true
    }
}