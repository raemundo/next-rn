const { withExpo } = require('@expo/next-adapter')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const { i18n } = require("./next-i18next.config");
const withTM = require("next-transpile-modules")([
  "next-rn",
  // you can add other modules that need traspiling here
]);

module.exports = withPlugins(
  [
    withTM,
    withFonts,
    withImages,
    [withExpo, { projectRoot: __dirname }],
  ],
  {
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    webpack5: false,
    i18n,
    images: {
      domains: ['reactnative.dev'],
    },
  }
)
