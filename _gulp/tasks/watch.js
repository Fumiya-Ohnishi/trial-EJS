const browserSync = require('browser-sync');
const { series, watch } = require('gulp');
const config = require('../config')

// watchファイル
const { images } = require('./images');
const { js } = require("./js");
const { styles } = require("./sass");
const { ejs } = require('./ejs');
// const { fonts } = require("./fonts");

function watchFile() {
  const browserReload = (done) => {
    browserSync.reload();
    done();
  };

  watch(config.watch.sass, series(styles, browserReload));
  watch(config.watch.ejs, series(ejs, browserReload));
  watch(config.watch.img, series(images, browserReload));
  watch(config.watch.js, series(js, browserReload));
  // watch(config.watch.fonts, series(fonts, browserReload));
}

exports.watchFile = watchFile;
