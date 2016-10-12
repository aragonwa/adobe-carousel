module.exports = function(grunt) {
  'use strict';

  var globalConfig = {
    src: 'src',
    build: 'build'
  };

  var path = require('path');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    globalConfig: globalConfig
  });

  require('load-grunt-config')(grunt,{
    configPath: path.join(process.cwd(), 'grunt'),
    init: true,
    data: globalConfig
  });

  grunt.registerTask(
    'build',
    'Compiles all of the assets into to the build directory',
    [ 'less:development', 'handlebars', 'uglify', 'copy']
  );
};