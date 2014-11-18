var packageJson = require('json!./package.json');
var lp = require('foundation-bundle-demo');

// var angular = require('angular');
// console.log(packageJson);
console.log(lp);
module.exports = angular.module( packageJson.name ,[]);
