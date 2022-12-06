const gulpEjs = require("gulp-ejs");
const htmlbeautify = require('gulp-html-beautify');
const rename = require("gulp-rename");

// 共通
const { src, dest } = require("gulp");
const config = require('../config')
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

// ejs
function ejs () {
  return src(config.ejs.src)
    .pipe(plumber({
        errorHandler: notify.onError('<%= error.message %>')
    })) // エラーが発生しても処理を継続

    .pipe(gulpEjs({}, {}, {ext: '.html'}))
    .pipe(rename({ extname: ".html" }))
    .pipe(htmlbeautify({                          // インデント整理
      "indent_size": 2,
      "max_preserve_newlines": 0,
      "keep_array_indentation": true,
    }))
    .pipe(dest(config.ejs.dest));
};

// 納品用ejs
function ejsProduct () {
  return src(config.ejs.src)
    .pipe(plumber({
        errorHandler: notify.onError('<%= error.message %>')
    })) // エラーが発生しても処理を継続

    .pipe(gulpEjs({}, {}, {ext: '.html'}))
    .pipe(rename({ extname: ".html" }))
    .pipe(htmlbeautify({                          // インデント整理
      "indent_size": 2,
      "max_preserve_newlines": 0,
      "keep_array_indentation": true,
    }))
    .pipe(dest(config.ejsProduct.dest));
};

exports.ejs = ejs;
exports.ejsProduct = ejsProduct;