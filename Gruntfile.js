module.exports = function(grunt) {
  // loadNpmTasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-simple-mocha');

  // initConfig
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      src: ['*.js'],
      options: {
        node: true
      }
    },
    jscs: {
      src: '*.js',
      options: {
          config: '.jscsrc',
          requireCurlyBraces: [ 'if' ]
      }
    },
    simplemocha: {
      src: ['test/**/*test.js']
    }
  });

  // registerTask list
  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha']);
  grunt.registerTask('default', ['test']);
};
