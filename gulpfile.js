const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
// Scripts
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const log = require('gulplog');
const uglify = require('gulp-uglify');
// Styles
const sass = require('gulp-sass');
const sassImporter = { importer: require('npm-sass').importer };
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('default', ['demo']);



// ------------------------------
// Demo
// ------------------------------

gulp.task('demo', ['demo-scripts', 'demo-styles']);

gulp.task('demo-scripts', function () {
  return browserify('./resources/assets/js/demo.js')
    .bundle()
    .pipe(source('demo.js'))       // Output filename
    .pipe(gulp.dest('./docs/js')); // Output folder
});

gulp.task('demo-styles', function() {
  return gulp.src(['./resources/assets/sass/demo.scss'])
    .pipe(sass(sassImporter))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .on('error', sass.logError)
    .pipe(cleanCSS({ inline: ['none'], keepSpecialComments: 0 }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./docs/css'));
});
