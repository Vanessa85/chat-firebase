var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  minifyCss = require('gulp-clean-css'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  usemin = require('gulp-usemin'),
  connect = require('gulp-connect'),
  del = require('del');

//Scripts
gulp.task('scripts', function() {
  return gulp.src('app/**/*.js')
      .pipe(concat('bundle.js'))
      .pipe(gulp.dest('dist'))
      .pipe(uglify())
      .pipe(gulp.dest('dist'))
      .pipe(notify({message: 'Scripts task complete'}))
      .pipe(connect.reload());
});

gulp.task('usemin', function() {
  return gulp.src('./app/index.html')
      .pipe(usemin({
        css: [minifyCss()],
        js: [uglify()],
        vendorsjs: [uglify()]
      }))
      .pipe(gulp.dest('./'));
});

gulp.task('clean', function() {
  return del(['dist', './index.html']);
});

gulp.task('watch', ['connect'], function() {
    gulp.watch('./app/**/*.js', ['scripts']);
});

gulp.task('connect', function() {
  connect.server();
});

gulp.task('default', ['clean', 'connect'], function() {
  //gulp.start('scripts');
  gulp.start('usemin');
});
