const sass = require('gulp-sass')(require('sass'));
const sassGlob = require("gulp-sass-glob");
const autoprefixer = require('gulp-autoprefixer');

// 共通
const { src, dest } = require('gulp');
const config = require('../config')
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sourcemaps = require("gulp-sourcemaps");

// styles
function styles() {
  return src(config.sass.src)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(sass({outputStyle : 'compressed'}))
    .pipe(autoprefixer(config.sass.autoprefixer))
    .pipe(sourcemaps.write(config.sass.sourcemap))
    .pipe(dest(config.sass.dest))
}

// 納品用styles
function stylesProduct() {
  return src(config.sassProduct.src)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(sass({outputStyle : 'compressed'}))
    .pipe(autoprefixer(config.sassProduct.autoprefixer))
    .pipe(dest(config.sassProduct.dest))
}

exports.styles = styles; 
exports.stylesProduct = stylesProduct;