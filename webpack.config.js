var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist");//directory path of bundle file output
var SRC_DIR = path.resolve(__dirname, "src");//directory path of react applications codebase

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/public",
        filename: "/scripts/bundle.js",
        publicPath: "/public/"
    },
   /* plugins: [
        new ExtractTextPlugin('styles/styles.css', {
            publicPath: '/app/',
            allChunks: true
        })
    ],*/
    module: {
            loaders: [
            {
                //bundle all the required js files
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
            ,
                {
                    //extract and compile the css and Sass files
                    test: /\.s?css$/,
                    include: SRC_DIR,
                    loader: ExtractTextPlugin.extract(
                        ("style-loader", "css-loader")
                    )
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader?attrs[]=video:src'
                },
                {

                     test: /\.mp4$/,
                     loader: "url-loader?limit=10000&mimetype=video/mp4&name=videos/[name].[ext]"
                },
                { 
					test: /\.(png|jpg)$/, 
					loader: 'url-loader?limit=10000&name=images/[name].[ext]'
				}
        ],

    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins : [
        new ExtractTextPlugin("css/styles.css")
    ]
};

module.exports = config;