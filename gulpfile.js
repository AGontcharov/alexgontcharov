'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var jshintConfig = require('./package').jshintConfig;
var jscs = require('gulp-jscs');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var prefix = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var htmlhint = require('gulp-htmlhint');
var htmlMin = require('gulp-htmlmin');
var htmlreplace = require('gulp-html-replace');
var bytediff = require('gulp-bytediff');
var del = require('del');

// Prevent looking up default files
jshintConfig.lookup = false;

// Build
gulp.task('default', [
  'styles',
  'scripts',
  'html',
  'index',
  'images',
  'pdf'
]);

// JavaScript Jshint and JSCS
gulp.task('lint', function() {
  return gulp.src([
    'public/app/**/*.js',
    'server/**/*.js',
    'spec/**/*.js',
    '*.js'
  ])
  .pipe(jshint(jshintConfig))
  .pipe(jscs())
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(jscs.reporter());
});

// Minify JavaScript
gulp.task('scripts', ['lint'], function() {
  return gulp.src([
    'public/app/js/app.module.js',
    'public/app/js/**/*module.js',
    'public/app/js/**/*.js'
    ])
  .pipe(concat('app.min.js'))
  .pipe(bytediff.start())
  .pipe(uglify())
  .pipe(bytediff.stop())
  .pipe(gulp.dest('dist'));
});

// Minify CSS
gulp.task('styles', function() {
  return gulp.src([
    'pubic/app/assets/css/index.css',
    'public/app/assets/**/*.css'
    ])
  .pipe(prefix('last 2 versions'))
  .pipe(concat('app.min.css'))
  .pipe(bytediff.start())
  .pipe(cleanCSS({
    level: 2
  }))
  .pipe(bytediff.stop())
  .pipe(gulp.dest('dist'));
});

// htmlhint
gulp.task('htmlhint', function() {
  return gulp.src('public/app/**/*.html')
  .pipe(htmlhint('.htmlhintrc'))
  .pipe(htmlhint.reporter());
});

// Minify HTML
gulp.task('html', ['htmlhint'], function() {
  return gulp.src('public/app/views/**/*.html')
  .pipe(bytediff.start())
  .pipe(htmlMin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(bytediff.stop())
  .pipe(gulp.dest('dist/views'));
});

// Minify and rewrite index.html
gulp.task('index', function() {
  return gulp.src('public/app/index.html')
  .pipe(bytediff.start())
  .pipe(htmlreplace({
    'js': 'app.min.js',
    'css': 'app.min.css'
  }))
  .pipe(htmlMin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(bytediff.stop())
  .pipe(gulp.dest('dist'));
});

// Copy Images
gulp.task('images', function() {
  return gulp.src('public/app/assets/img/*')
  .pipe(gulp.dest('dist/assets/img'));
});

// Copy PDF
gulp.task('pdf', function() {
  return gulp.src('public/app/resume.pdf')
  .pipe(gulp.dest('dist'));
});

// Clean build
gulp.task('clean', function() {
  return del('dist/**');
});