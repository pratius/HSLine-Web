// next.config.js
const withPlugins = require('next-compose-plugins');


const withImages = require('next-images')
const nextConfig = {
  trailingSlash: true
}
let imageConfig = withImages({
  images: {
    disableStaticImages: true,
    unoptimized: true,
  }
});
module.exports = withPlugins([
  [imageConfig]
], nextConfig)