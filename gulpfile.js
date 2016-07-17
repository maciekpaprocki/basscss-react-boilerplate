var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var CONFIG = require('./config.js');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var connect = plugins.connect;
var yargs = require('yargs');

gulp.task('js', function(){
    return browserify({ entries: CONFIG.SRC_JS_FROM, extensions: ['.jsx', '.js'], debug: true })
        .transform('babelify', { presets: ['es2015', 'react'] })
        .bundle()
        .pipe(source(CONFIG.SRC_JS_TO_FILE))
        .pipe(gulp.dest(CONFIG.DIST))
        .pipe(connect.reload());
});

gulp.task('css', function(){
    return gulp.src(CONFIG.SRC_CSS_FROM)
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.basswork())
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(CONFIG.DIST))
        .pipe(connect.reload());
});

gulp.task('watch', function(){
    connect.server({
        root: '.',
        livereload: true
    });
    gulp.watch(CONFIG.SRC_CSS_WATCH, ['css']);
    gulp.watch(CONFIG.SRC_JS_WATCH, ['js']);
});
gulp.task('build', function(){
    return gulp.run(['css', 'js']);
})