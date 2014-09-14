var packageJson = require('json!./package.json');
var lp = require('foundation-bundle-demo');

var angular = require('angular');

module.exports = angular.module( packageJson.name ,[]);
