module.exports = function(config) {
  config.set({
    singleRun: true,
    frameworks: ['mocha', 'chai'],
    browsers: ['Chrome'],
    files: [
      'test/test.js'
    ],
    preprocessors: {
      'test/test.js': ['rollup']
    },
    rollupPreprocessor: {
      format: 'iife',
      plugins: [
        require('rollup-plugin-istanbul')({
          exclude: ['test/**/*.js']
        })
      ]
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'lcov',
      subdir: '.'
    }
  });
};
