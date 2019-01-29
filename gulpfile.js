const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const babelify = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

function styles() {
  return gulp.src('./_assets/scss/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/css'));
}

function fonts() {
  return gulp.src('./_assets/scss/fonts.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./assets/css'));
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
  return browserify('./_assets/js/app.js')
    .transform('babelify', {presets: ['@babel/preset-env']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./assets/js'));
}

function watch() {
  gulp.watch('./_assets/scss/**/*.scss', styles);
  gulp.watch('./_assets/js/**/*.js', scripts);
}

const build = gulp.parallel(styles, scripts, watch);
gulp.task(build);

gulp.task('default', build);

exports.styles = styles;
exports.fonts = fonts;
// exports.instafetch = instafetch;
// exports.pleaseDontGo = pleaseDontGo;
// exports.trophy = trophy;
exports.scripts = scripts;
