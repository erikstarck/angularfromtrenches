'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }])
    .filter('twodecimals', function() {
        return function(number) {
            if(number)
            {
                var num = new Number(number);
                return num.toFixed(2);
            }
            return "0.00";
        }
    })

;

