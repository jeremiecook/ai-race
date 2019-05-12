/**
 * Gulpfile.js
 * Uglify and concetenation automation
 */

gulp = require('gulp');

//var pump   = require('pump');
var concat = require('gulp-concat');
//var rename = require('gulp-rename');
//var uglify = require('gulp-uglify');



/**
 * Version Node.js
 */

var files = [

	// Libraries
	'docs/vendors/neataptic.js',

	// Core
	'src/core/utils.js',
	'src/core/game.js',
	'src/core/training.js',

	// Main
	'src/core/main.js',

];

gulp.task('node', function (cb) {

  return gulp.src(njs_files)
    .pipe(concat('node.js'))
    .pipe(gulp.dest('./dist/'));

});

gulp.task('default', ['node'], function(){});
