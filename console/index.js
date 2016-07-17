#!/usr/bin/env node
var argv = require('yargs').argv;

var fs = require('fs');

var CONFIG = require('../config.js');
var path = require('path');
var COMP_CONFIG = CONFIG.COMPONENT;
var _ = require('underscore');
var mkdirp = require('mkdirp');
/**
 * Checking if first parameter is supplied
 */
if ( argv._.length === 0 ) {
    throw ('Component Namespace is undefined');
}
if ( argv._.length > 1 ) {
    argv._ = [argv._.join('/')];
}
/**
 * Helpers
 */
/**
 * Helpers. To capital letter
 * @param str
 * @returns {string}
 */
function ucfirst(str){
    return typeof str != "undefined" ? (str += '', str[0].toUpperCase() + str.substr(1)) : '';
}
/**
 * Reads and renders template from file in templates folder.
 * @param tempName
 * @param data
 */
function parseTemplate(tempName, data){

    return _.template(fs.readFileSync(path.join(__dirname, 'templates', tempName)).toString())(data);
}

var compPath = argv._.pop().split('/');
compPath.map(function(val){
    return ucfirst(val);
});

var fullPath = compPath.slice(0);
fullPath.unshift(CONFIG.SRC_COMPONENTS);
fullPath = path.join.apply(null, fullPath);

try {
    mkdirp(fullPath, function(er){
        if ( er ) {
            throw ('cannot write to path ' + fullPath);
        } else {

            var data = {
                componentClass: compPath.join(''),
                path:compPath,
            };

            var fileName = 'data.' + (argv.data || COMP_CONFIG.defaults.data);
            fs.writeFileSync(path.join(fullPath, fileName), parseTemplate(fileName, data));

            fileName = 'index.' + (argv.js || COMP_CONFIG.defaults.js);
            fs.writeFileSync(path.join(fullPath, fileName), parseTemplate(fileName, data));

            fileName = 'index.' + (argv.css || COMP_CONFIG.defaults.css);
            fs.writeFileSync(path.join(fullPath, fileName), parseTemplate(fileName, data));

            fileName = 'README.md';
            fs.writeFileSync(path.join(fullPath, fileName), parseTemplate(fileName, data));

            fileName = 'test.js';
            fs.writeFileSync(path.join(fullPath, fileName), parseTemplate(fileName, data));

        }
    });
} catch ( e ) {
    return e;
}