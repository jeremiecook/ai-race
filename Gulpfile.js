/**
 * Gulpfile.js
 * Uglify and concetenation automation
 */

gulp = require('gulp');

var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var pump   = require('pump');


var files = [

	// Libraries
	'www/vendors/neataptic.js',

	// Core
	'www/assets/js/utils.js',
	'www/assets/js/board.js',
	'www/assets/js/checkpoint.js',
	'www/assets/js/player.js',
	'www/assets/js/training.js',

	// Main
	'www/assets/js/cmd.js',

];

/**
 * Concaténation et minification
 */

// gulp.task('compile', function(){
//     return gulp.src(files)
//         .pipe(concat('ml.js'))
//         .pipe(gulp.dest('dist'))
//         .pipe(rename('ml.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist'));
// });


gulp.task('compress', function (cb) {

	// gulp.src(files)
	// 	.pipe(concat('ml.min.js'))
	// 	.pipe(gulp.dest('dist'));

  pump([
  		gulp.src(files),
  		concat('ml.js'),
    	//uglify(),
    	gulp.dest('dist')
    ],
    cb
  );
});


gulp.task('default', ['compress'], function(){});
