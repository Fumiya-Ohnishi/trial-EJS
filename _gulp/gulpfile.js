// gulp
const {series} = require('gulp');

// sass
const { styles, stylesProduct } = require("./tasks/sass");

// ejs
const { ejs,ejsProduct } = require("./tasks/ejs");

// js
const { js, jsProduct, jsLibs, jsLibsProduct } = require("./tasks/js");

// fonts
// const { fonts } = require("./tasks/fonts");

// images
const { images, imagesProduct } = require('./tasks/images');

// watch 
const { watchFile } = require('./tasks/watch');

// browsersync
const { browsersync } = require("./tasks/browserSync");

/***************************************************************************
* gulp task
***************************************************************************/
const defaultTasks = series(styles, ejs, browsersync, js, jsLibs, images, watchFile);
const productTasks = series(stylesProduct, ejsProduct, jsProduct, jsLibsProduct, browsersync, imagesProduct);

exports.default = defaultTasks;
exports.product = productTasks;