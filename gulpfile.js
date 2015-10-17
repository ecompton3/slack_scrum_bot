'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var rimraf = require('rimraf');

var config = {
  outputDir: './public/'
};

gulp.task('default', function() {
  gulp.start('build');
});

gulp.task('move-assets', ['clean'], function() {
  return gulp.src(['assets/**/*'])
             .pipe(gulp.dest('./public'));
});

gulp.task('make-sass', ['clean'], function() {
  return gulp.src('scss/main.scss')
             .pipe(sass({
               outputStyle: 'compressed'
             }))
             .pipe(rename('style.css'))
             .pipe(gulp.dest('./public'));
});

gulp.task('clean', function(cb){
    rimraf(config.outputDir, cb);
});

gulp.task('build', ['make-sass', 'move-assets'], function() {
  process.exit(0);
});
