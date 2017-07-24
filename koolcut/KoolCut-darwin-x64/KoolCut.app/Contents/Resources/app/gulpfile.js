var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('browserify');
var clean = require('gulp-clean');
const changed = require('gulp-changed');
var notify = require('gulp-notify');

gulp.task("babel", function() {
	return gulp.src('./io_src/*.js')
		.pipe(changed('io'))
		.pipe(babel({
			presets: ['es2015'],
      plugins: ["add-module-exports", "transform-es2015-modules-amd", "transform-es2015-modules-commonjs"]
		}))
		.pipe(notify({
      		message: 'Babeled file: <%= file.relative %>',
    	}))
		.pipe(gulp.dest('io'))
});

gulp.task("clean", function() {
	return gulp.src('io', {read: false})
		.pipe(clean());
});

gulp.task("default", ["babel"], function() {
	gulp.watch("./io_src/*.js", ["babel"]);
});
