
module.exports = function(eleventyConfig) {
  // Add the custom filter
  eleventyConfig.addFilter("removePostTag", (tags) => {
    if (!Array.isArray(tags)) {
      return []; // Return an empty array if tags is not an array
    }
    return tags.filter(tag => tag.toLowerCase() !== "post");
  });

  // Add passthrough copies
  eleventyConfig.addPassthroughCopy("./comic/**/*.jpg");
  eleventyConfig.addPassthroughCopy({ "./public/images": "/images" });
  eleventyConfig.addPassthroughCopy({ "./public/files": "/files" });
  eleventyConfig.addPassthroughCopy({ "./public/pdfjs": "/pdfjs" });

  // Return the directory configuration
  return {
    dir: {
      input: "./",
      output: "_site"
    }
  };
};
