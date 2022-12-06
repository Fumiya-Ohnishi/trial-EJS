const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const wrap = require('gulp-wrap');

// 共通
const { src, dest } = require('gulp');
const config = require('../config')
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sourcemaps = require("gulp-sourcemaps");

// js
function js() {
  return src(config.js.src)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(sourcemaps.init())
    .pipe(concat(config.js.file))
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    // .pipe(uglify())
    // .pipe(sourcemaps.write(config.js.sourcemap))
    .pipe(wrap('$(document).ready(function () {\n<%= contents %>\n});'))
    .pipe(dest(config.js.dest))
};

// 納品用js
function jsProduct() {
  return src(config.js.src)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(sourcemaps.init())
    .pipe(concat(config.js.file))
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(wrap('$(document).ready(function () {\n<%= contents %>\n});'))
    .pipe(dest(config.jsProduct.dest))
};

// jsLibs
function jsLibs() {
  return src(config.jsLibs.src)
    .pipe(concat(config.jsLibs.file))
    .pipe(uglify())
    .pipe(dest(config.jsLibs.dest))
};

// 納品用jsLibs
function jsLibsProduct() {
  return src(config.jsLibs.src)
    .pipe(concat(config.jsLibs.file))
    .pipe(uglify())
    .pipe(dest(config.jsLibsProduct.dest))
};

exports.js = js; 
exports.jsProduct = jsProduct;
exports.jsLibs = jsLibs;
exports.jsLibsProduct = jsLibsProduct;