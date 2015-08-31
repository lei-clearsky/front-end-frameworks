// browserify reactify vinyl-source-stream watchify gulp-util

var gulp = require('gulp'); // skeleton for build process
var gutil = require('gulp-util'); 
var source = require('vinyl-source-stream'); 
var browserify = require('browserify'); // ensure load order
var watchify = require('watchify'); // a tool for automatically watching changes in files
var reactify = require('reactify'); // convert jsx to js code

gulp.task('default', function() {
	var bundler = watchify(browserify({
		entries: ['./src/app.jsx'], // look for app.jsx file
		transform: [reactify], // compile jsx to js
		extensions: ['.jsx'], // looking for .jsx files
		debug: true,
		cache: {},
		packageCache: [],
		fullPaths: true
	}));

	function build(file) {
		if (file) gutil.log('Recompiling ' + file);
		return bundler
				.bundle()
				.on('error', gutil.log.bind(gutil, 'Browserify Error')) // error handler
				.pipe(source('main.js'))
				.pipe(gulp.dest('./'));
	};

	build(); // run build function
	bundler.on('update', build); // when updated, build again
});

// gulp-react gulp-concat
// gulp.task('default', function() {
//   return gulp.src('src/**')
//              .pipe(react())
//              .pipe(concat('application.js'))
//              .pipe(gulp.dest('./'))                  
// });
