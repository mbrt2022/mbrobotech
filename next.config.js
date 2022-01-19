module.exports = {
  reactStrictMode: true,
};

const withImages = require('next-images');
module.exports = withImages({
  fileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
  inlineImageLimit: false,
  // TypeError: unsupported file type: undefined (file: undefined) - solution below
  images: {
    disableStaticImages: true,
  },
  webpack(config, options) {
    return config;
  },
});
