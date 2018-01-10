const path = require('path'),
  gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  uglify = require('gulp-uglify'),
  usemin = require('gulp-usemin'),
  del = require('del');

const paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
  srcJS: path.resolve(__dirname, 'src/app/**/*.js'),
  srcCSS: path.resolve(__dirname, 'src/stylesheets/**/*.css'),
  srcHtml: path.resolve(__dirname, 'src/**/*.html'),
  distJS: path.resolve(__dirname, 'dist/js'),
  indexHtml: path.resolve(__dirname, 'src/index.html'),
};

gulp.task('cleanup', () => del.sync(paths.dist));

gulp.task('html', () => {
  return gulp.src([paths.srcHtml, `!${paths.indexHtml}`])
    .pipe(gulp.dest(paths.dist));
});

gulp.task('usemin', ['cleanup'], () => {
  return gulp.src(paths.indexHtml)
    .pipe(usemin({
      path: './',
      js: [uglify()],
      vendor: [uglify()]
    }))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('server', () => {
  browserSync.init({
    port: 4000,
    files: [paths.srcJS, paths.srcCSS],
    server: {
      baseDir: paths.src,
      routes: {
        '/': './'
      }
    }
  });
});

gulp.task('build', ['cleanup'], () => {
  gulp.start('usemin');
  gulp.start('html');
});

gulp.task('default', ['server']);
