const gulp = require('gulp');
const concat = require('gulp-concat');
const mincss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const browserSync = require('browser-sync').create();
const { series } = require('gulp');

const css_src = './src/css/*.css';
const css_dest = './dist/css';
const js_src = './src/js/*.js';
const js_dest = './dist/js';

function bSync() {
	browserSync.init({
		server: {
			baseDir: 'dist',
		},
	});
}

function htmlRdy() {
	return gulp
		.src('./src/index.html')
		.pipe(gulp.dest('./dist'))
		.pipe(
			browserSync.reload({
				stream: true,
			})
		);
}

function cleanCss() {
	return gulp
		.src(css_src)
		.pipe(concat('style.css'))
		.pipe(mincss())
		.pipe(gulp.dest(css_dest))
		.pipe(
			browserSync.reload({
				stream: true,
			})
		);
}

function cleanJs() {
	return gulp
		.src(js_src)
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest(js_dest))
		.pipe(
			browserSync.reload({
				stream: true,
			})
		);
}

function watchFiles() {
	gulp.watch('./src/*.html', htmlRdy);
	gulp.watch('./src/css/*.css', cleanCss);
	gulp.watch('./src/js/*.js', cleanJs);
}

const watch = gulp.parallel(bSync, watchFiles);

exports.watch = watch;