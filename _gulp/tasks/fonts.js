const { src, dest } = require('gulp');
const config = require('../config')
const changed = require("gulp-changed");

// doc
function fonts() {
  return src(config.fonts.src)
    .pipe(changed(config.fonts.dest))
    .pipe(dest(config.fonts.dest))
};

exports.fonts = fonts;