var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
// const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['sass', 'watch'])

var sassPath = './assets/scss/*.scss';

gulp.task('sass', function() {
    return gulp.src(sassPath)
    	// .pipe(sourcemaps.init())
		.pipe(concat('style.css'))
		.pipe(sass().on('error', sass.logError))
		.pipe(cssmin())
		// .pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/dist/css/'));
});

gulp.task('watch', function() {
	gulp.watch(sassPath, ['sass'])
})