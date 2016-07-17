var path = require('path');
var DIST = path.join(__dirname, 'dist');
var SRC = path.join(__dirname, 'src');
var SRC_COMPONENTS = path.join(SRC, 'components');
var SRC_JS = path.join(SRC, 'js');
var SRC_CSS = path.join(SRC, 'css');

module.exports = {
    DIST: DIST,
    SRC: SRC,
    SRC_COMPONENTS: SRC_COMPONENTS,
    SRC_JS: SRC_JS,
    SRC_JS_FROM: path.join(SRC_JS, 'index.js'),
    SRC_JS_WATCH: [
        path.join(SRC_JS, '**', '*.js'),
        path.join(SRC_JS, '**', '*.jsx'),
        path.join(SRC_COMPONENTS, '**', '*.js'),
        path.join(SRC_COMPONENTS, '**', '*.jsx'),
    ],
    SRC_JS_TO_FILE: 'index.js',
    SRC_CSS: SRC_CSS,
    SRC_CSS_FROM: path.join(SRC_CSS, 'index.css'),
    SRC_CSS_WATCH: [
        path.join(SRC_CSS, '**', '*.css'),
        path.join(SRC_COMPONENTS, '**', '*.css'),
    ],
    LIVERELOAD: {
        port: 8081,
        host: 'localhost',
        start: true,
        quiet: false,
        reloadPage: 'index.html',
        livereload: 3579
    },
    COMPONENT: {
        defaults: {
            data: 'json',
            js: 'js',
            css: 'css',
        }
    }
}