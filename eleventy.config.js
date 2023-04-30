const eleventyLightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyLightningCSS);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy({
    "./dist/bundle.min.js": "js/supports-css.js",
  });
  eleventyConfig.addPassthroughCopy("./docs/**/*.png");
  eleventyConfig.addPassthroughCopy("./docs/fonts/");

  return {
    dir: {
      input: "docs",
      output: "public",
    },
  };
};
