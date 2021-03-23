'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();


// Sass
function sassInit() {
  return gulp
    .src('./sass/**/*.scss')
    .pipe(sass.sync({
    	outputStyle: 'expanded',
    	sourceComments: true
    }).on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest('./stylesheets'))
    .pipe(browserSync.stream());
}

// Watch
function sassWatch() {
	gulp.watch('./sass/**/*.scss', sassInit);
}

function watchBrowser() {
	 browserSync.init({
	    server: {
	      baseDir: './'
	    },
	    port: 3000
	  });
	gulp.watch('./sass/**/*.scss', sassInit);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
function watchBrowserServer() {
	  browserSync.init({
	        proxy: 'http://localhost/forovitivinicola/patio/patio_template/foro-vitivinicola/menu.html'
	    });
	gulp.watch('./sass/**/*.scss', sassInit);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}


exports.watchBrowser = watchBrowser;
exports.watchBrowserServer = watchBrowserServer;
exports.sassWatch = sassWatch;
