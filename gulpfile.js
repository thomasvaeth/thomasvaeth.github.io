const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const babelify = require('babelify');
const browserify = require('browserify');
const browserSync = require('browser-sync').create();
const buffer = require('vinyl-buffer');
const cleanCSS = require('gulp-clean-css');
const cp = require('child_process');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');

const paths = {
  styles: {
    src: './_assets/scss/app.scss',
    dest: './_site/assets/css',
    destTwo: './assets/css'
  },
  fonts: {
    src: './_assets/scss/fonts.scss',
    dest: './_site/assets/css',
    destTwo: './assets/css'
  },
  scripts: {
    src: './_assets/js/app.js',
    dest: './_site/assets/js',
    destTwo: './assets/js'
  }
};

function jekyll() {
  return cp.spawn('jekyll', ['build', '--config', '_config.yml'], {stdio: 'inherit'});
}

function reload(done) {
  browserSync.reload();
  done();
}

function serve(done) {
  browserSync.init({
    server: {
      baseDir: './_site'
    }
  });
  done();
}

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.reload({stream: true}))
    .pipe(gulp.dest(paths.styles.destTwo));
}

function fonts() {
  return gulp.src(paths.fonts.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.fonts.dest))
    .pipe(browserSync.reload({stream: true}))
    .pipe(gulp.dest(paths.fonts.destTwo));
}

// function instafetch() {
//   return gulp.src('./_assets/scss/instafetch.js.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
//     .pipe(cleanCSS())
//     .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('./assets/css'));
// }

// function pleaseDontGo() {
//   return gulp.src('./_assets/scss/please-dont-go.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
//     .pipe(cleanCSS())
//     .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('./assets/css'));
// }

// function trophy() {
//   return gulp.src('./_assets/scss/trophy.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
//     .pipe(cleanCSS())
//     .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('./assets/css'));
// }

function scripts() {
  return browserify(paths.scripts.src)
    .transform('babelify', {presets: ['@babel/preset-env']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.reload({stream: true}))
    .pipe(gulp.dest(paths.scripts.destTwo));
}

function watch() {
  gulp.watch('./_assets/scss/**/*.scss', styles);
  gulp.watch('./_assets/js/**/*.js', scripts);
  gulp.watch([
    '*.html',
    '_includes/*',
    '_layouts/*',
    '_posts/*',
    '_work/*',
    'contact/*'
  ], gulp.series(jekyll, reload));
}

const build = gulp.series(styles, scripts, jekyll, serve, watch);
gulp.task('default', build);

exports.styles = styles;
exports.fonts = fonts;
// exports.instafetch = instafetch;
// exports.pleaseDontGo = pleaseDontGo;
// exports.trophy = trophy;
exports.scripts = scripts;
