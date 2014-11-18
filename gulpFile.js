var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var packageJson = require('./package.json');
// console.log(packageJson);
// var name = __dirname + '/client';

var webpackConfig = {
    cache: true,
    entry: {
        bundle: './index.js'
    },
    output: {
        path: path.join(__dirname),
        filename: 'lp-core.js'
    },
    externals: {
        'angular': 'angular',
        'jquery': 'jquery'
    },
    module: {
        loaders: [

        ],
        noParse: [

        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        alias: {

        }
    },
    plugins: [
    ]
};

// The development server (the recommended option for development)
gulp.task('default', function (callback) {
    var compiler = webpack(webpackConfig);
    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(3000, 'localhost', function(err) {
        if(err) throw new gutil.PluginError('webpack-dev-server', err);
        // Server listening
        gutil.log('[webpack-dev-server]', 'http://localhost:3000/webpack-dev-server/index.html');

        // keep the server alive or continue?
        // callback();
    });
});
