var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');

gulp.task('typescript', function() {
  gulp.src('./src/ts/**/*.tsx')
    .pipe(ts({
      outDir: './src/js',
      module: 'commonjs',
      jsx: 'react',
      target: 'ES5'
    }))
    .pipe(gulp.dest('./src/js'));
});

gulp.task('browserify', ['typescript'], function() {
  browserify('./src/js/main.js')
    .transform('reactify')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./src/js'));
});

gulp.task('build', ['browserify'], function() {
  return gulp.src('./src/js/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('copy', function() {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
  gulp.src('./src/assets/**/*.*')
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task('default', ['build', 'copy'], function() {
  return gulp.watch(['./src/**/*.ts', './src/**/*.tsx', './src/**/*.html'], ['build', 'copy']);
});
