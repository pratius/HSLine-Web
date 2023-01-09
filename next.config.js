// Import Nextjs Plugin composer...
const withPlugins = require('next-compose-plugins');

// Import Webpack...
const webpack = require('webpack');

// Import css modules...
const withCSS = require('@zeit/next-css');
const cssConfig = {};

// Import sass modules...
const withSass = require('@zeit/next-sass');
const scssConfig = {};

// Import image modules...

const withImages = require('next-images');
const imageConfig = {};

const { parsed: localEnv } = require('dotenv').config();

const nextConfig = {
    //assetPrefix: '/xamin-react/',
    webpack: (config, options) => {
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        });
        // modify the `config` here
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv));


        return config;
    },
    env: {
        'PORT': process.env.PORT
    }
};

module.exports = withPlugins([
    [withImages],
    [
        withCSS({
            webpack: function (config) {
                config.module.rules.push({
                    test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|cur)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 100000,
                            name: '[name].[ext]'
                        }
                    }
                });
                return config
            }
        })
    ],
    [
        withSass,
        scssConfig
    ]
],nextConfig);
