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

var njs_files = [

	// Libraries
	'www/vendors/neataptic.js',

	// Core
	'www/assets/js/utils.js',
	'www/assets/js/board.js',
	'www/assets/js/checkpoint.js',
	'www/assets/js/player.js',
	'www/assets/js/training.js',

	// Main
	'runner/node.js',

];

gulp.task('node', function (cb) {

  return gulp.src(njs_files)
    .pipe(concat('node.js'))
    .pipe(gulp.dest('./dist/'));

});

gulp.task('default', ['node'], function(){});
