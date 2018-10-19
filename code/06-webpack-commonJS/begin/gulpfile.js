var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('js', function(){
  return gulp.src('src/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js', {newLine: ";"}))
    // .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src'))
});

gulp.task('default', [ 'js' ]);