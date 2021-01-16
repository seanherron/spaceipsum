const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');

  eleventyConfig.addPlugin(syntaxHighlight, {
    alwaysWrapLineHighlights: false,
    trim: true,
  });

  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("./.tmp/css/style.css");
  eleventyConfig.addPassthroughCopy({ "./.tmp/css/style.css": "static/css/style.css" });
  eleventyConfig.addPassthroughCopy({ "./src/site/_includes/img": "static/img" });
  eleventyConfig.addPassthroughCopy({ "./src/site/robots.txt": "robots.txt" });
  return  {
    dir: {
      input: "src/site",
      includes: "_includes",
      output: "dist"
    },
    passthroughFileCopy: true,
    templateFormats : ["njk", "md", "ico", "png", "webmanifest"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
  };
};