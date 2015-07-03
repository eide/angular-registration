var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var paths = {
  base: '.',
  scripts: './app'
};

gulp.task('browserify', function () {
  return browserify({ entries: ['app/app.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('server', function () {
  connect.server({
    root: paths.base,
    port: 3000,
    livreload: true
  });
});

gulp.task('build', ['browserify']);

gulp.task('watch', ['build', 'server'], function () {
  gulp.watch(paths.scripts + '**/*', ['build']);
});

gulp.task('default', ['watch']);
