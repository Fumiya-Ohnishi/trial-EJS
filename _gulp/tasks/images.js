const imagemin = require("gulp-imagemin");
const pngquant = require('imagemin-pngquant');


// 共通
const { src, dest } = require('gulp');
const config = require('../config')
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const changed = require("gulp-changed");


// 画像の最適化
function images() {
  return src(config.img.src)
    .pipe(changed(config.img.dest))
    .pipe(plumber({                                   // エラー出たら通知
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(imagemin([
      imagemin.mozjpeg({
        quality: 75,
        progressive: true,
      }),
      pngquant({
        quality: [ 0.65, 0.8 ],
        speed: 1
       }),
      imagemin.svgo({
          plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
          ]
      })
  ]))
  .pipe(dest(config.img.dest))
}

// 納品用_画像の最適化
function imagesProduct() {
  return src(config.img.src)
    .pipe(changed(config.imgProduct.dest))
    .pipe(plumber({                                   // エラー出たら通知
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(imagemin([
      imagemin.mozjpeg({
        quality: 75,
        progressive: true,
      }),
      pngquant({
        quality: [ 0.65, 0.8 ],
        speed: 1
       }),
      imagemin.svgo({
          plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
          ]
      })
  ]))
  .pipe(dest(config.imgProduct.dest))
}

exports.images = images;
exports.imagesProduct = imagesProduct;
