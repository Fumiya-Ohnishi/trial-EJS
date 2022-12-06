const dest = '../dest'; // 出力先ディレクトリ
const product = '../product'; // バックエンド側への納品ディレクトリ
const src = '../src';  // ソースディレクトリ

module.exports = {
  src: src,
  dest: dest,
  
  // ejs
  ejs: {
    src: [
      src + '/ejs/!(_)*.ejs', src + '/ejs/**/!(_)*.ejs'
    ],
    dest: dest ,
    options: {
      pretty: true,
    }
  },
  ejsProduct: {
    src: [
      src + '/ejs/!(_)*.ejs', src + '/ejs/**/!(_)*.ejs'
    ],
    dest: product ,
    options: {
      pretty: true,
    }
  },

  // js
  js: {
    src: [
      src + '/js/common/*.js',
      src + '/js/components/*.js',
      src + '/js/project/*.js',
      src + '/js/project/**/*.js',
    ],
    file: 'index.js',
    sourcemap: '../js/',           // ソースマップ出力
    dest: dest + '/assets/js/'
  },
  jsProduct: {
    src: [
      src + '/js/common/*.js',
      src + '/js/components/*.js',
      src + '/js/project/*.js'
    ],
    file: 'index.js',
    sourcemap: '../js/',           // ソースマップ出力
    dest: product + '/assets/js/'
  },

  // jsLibs
  jsLibs: {
    src: [
      src + '/js/libs/*.js',
    ],
    file: 'libs-index.js',
    dest: dest + '/assets/js/'
  },
  jsLibsProduct: {
    src: [
      src + '/js/libs/*.js',
    ],
    file: 'libs-index.js',
    dest: product + '/assets/js/'
  },

  // sass
  sass: {
    src: [                          // もし外部のcssフレームワーク使うなら配列の先頭で読み込むと良いです
      src + '/scss/style.scss',
    ],
    dest: dest + '/assets/css', // 出力ディレクトリ
    output: 'style.css',            // 出力ファイル名
    sourcemap: '../css/',           // ソースマップ出力
    autoprefixer: {
      cascade: false                // 整形
    },
    minify: false                   // minify化
  },
  sassProduct: {
    src: [                          // もし外部のcssフレームワーク使うなら配列の先頭で読み込むと良いです
      src + '/scss/style.scss',
    ],
    dest: product + '/assets/css', // 出力ディレクトリ
    output: 'style.css',            // 出力ファイル名
    sourcemap: '../css/',           // ソースマップ出力
    autoprefixer: {
      cascade: false                // 整形
    },
    minify: false                   // minify化
  },

  // img
  img: {
    src: [  // 元画像
      src + '/img/**/*.?(png|jpg|gif|svg|ico|pdf|docx|mp4)', '!' + src + '/img/**/_*.?(png|jpg|gif|svg|ico|pdf|docx|mp4)'
    ],
    dest: dest + '/assets/img/'   // 出力画像ディレクトリ
  },
  imgProduct: {
    src: [  // 元画像
      src + '/img/**/*.?(png|jpg|gif|svg|ico|pdf|docx|mp4)', '!' + src + '/img/**/_*.?(png|jpg|gif|svg|ico|pdf|docx|mp4)'
    ],
    dest: product + '/assets/img/'   // 出力画像ディレクトリ
  },

  // watch
  watch: {
    sass: src + '/scss/**',
    ejs: src + '/ejs/**',
    img: src + '/img/**',
    js: src + '/js/**',
  }
}
