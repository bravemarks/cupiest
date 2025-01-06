module.exports = {
  plugins: [
    require('postcss-normalize')({
      forceImport: true  // Import all of normalize.css
    })
  ]
};
