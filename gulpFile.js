'use strict';

var gulp = require('gulp');
var g = require('gulp-load-plugins')();

gulp.task('bower', function() {
  return g.bower();
});
gulp.task('default',['bower'], function() {
    return gulp.src('src/index.js')
        .pipe(g.webpack({
            output: {
                filename:  'lp-core.js',
                libraryTarget: 'amd'
            },
            resolve: {
                modulesDirectories: ['bower_components', 'node_modules']
            },
            externals: [
                {
                    angular: 'angular',
                    jquery: '$',
                    lodash: '_'
                }
            ]
        }))
        //.pipe(g.uglify())
        .pipe(gulp.dest('./'));
});
