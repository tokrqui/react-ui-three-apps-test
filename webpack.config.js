const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        "app-one": "./src/app-one.jsx",
        "app-two": "./src/app-two.jsx",
        "app-three": "./src/app-three.jsx",
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
    module: {
        rules: [
            {
                // "oneOf" will traverse all following loaders until one will
                // match the requirements. When no loader matches it will fall
                // back to the "file" loader at the end of the loader list.
                oneOf: [
                    {
                        test: /(?<!\.test)\.jsx?$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',

                        options: {
                            // This is a feature of `babel-loader` for webpack (not Babel itself).
                            // It enables caching results in ./node_modules/.cache/babel-loader/
                            // directory for faster rebuilds.
                            cacheDirectory: true,
                            cacheCompression: false,
                            compact: false,
                        }
                    },

                    {
                        test: /.svg$/,
                        loader: 'svg-sprite-loader',
                        exclude: /fonts/,
                        options: {}
                    },

                    {
                        test: /\.s[ac]ss$/i,
                        use: [
                            // Creates `style` nodes from JS strings
                            'style-loader',
                            // Translates CSS into CommonJS
                            'css-loader',
                            // Compiles Sass to CSS
                            'sass-loader',
                        ]
                    },

                    {
                        test: /.css$/,
                        use: ['style-loader', {
                            loader: 'css-loader',
                            options: {
                                modules: 'global'
                            }
                        }]
                    },

                    {
                        loader: 'raw-loader',
                        test: /\.(raw|aspx|html|cshtml)$/,
                    },

                    {
                        loader: 'file-loader',
                        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.(json)$/],
                        options: {
                            name: 'assets/[folder]/[name].[ext]?[contenthash]',
                        },
                    },
                    // ** STOP ** Are you adding a new loader?
                    // Make sure to add the new loader(s) before the "file" loader.
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    resolve: {
        extensions: [
            /* resolve this without extension */
            '.js', '.jsx'
        ],
        modules: [
            path.resolve('./node_modules')
        ],
    },
};