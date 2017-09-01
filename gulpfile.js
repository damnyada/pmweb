var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

gulp.task('build', function() {
	return gulp.src('app/*.html')
		.pipe(useref())
		.pipe(gulpIf('app/js/*.js', uglify()))
		.pipe(gulp.dest('dist'))
});

