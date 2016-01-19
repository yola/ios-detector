'use strict';

module.exports = function(config) {
  config.set({
    frameworks: [
      'browserify',
      'mocha'
    ],
    browsers: [
      'PhantomJS'
    ],
    browserify: {
      debug: true,
      watch: true,
    },
    preprocessors: {
      'tests/**/*.js': [
        'browserify'
      ]
    },
    files: [
      'tests/*-spec.js'
    ],
    reporters: [
      'spec'
    ],
    singleRun: true
  });
};
