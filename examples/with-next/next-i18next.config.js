const path = require("path");

module.exports = {
  strictMode: false,
  i18n: {
    defaultLocale: "ar-EG",
    locales: ["ar-EG"],
  },
  keySeparator: ".",
  otherLanguages: [],
  localePath: path.resolve("./public/locales"),
};