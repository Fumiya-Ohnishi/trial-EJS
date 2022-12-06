const browserSync = require('browser-sync');
const config = require('../config')


// livereload
function browsersync(done) {
  browserSync.init({
    server: {
      baseDir: config.dest,
      index: '/index.html'
    }
  });
  browserSync.reload();
  done();
}

// 納品用livereload
function browsersyncProduct(done) {
  browserSync.init({
    server: {
      baseDir: config.product,
      index: '/index.html'
    }
  });
  browserSync.reload();
  done();
}

exports.browsersync = browsersync;
exports.browsersyncProduct = browsersyncProduct;