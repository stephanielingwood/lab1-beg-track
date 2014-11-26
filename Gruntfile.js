module.exports = function(grunt) {

  var srcFiles = ["lab1.js"];
  grunt.initConfig({
    jshint: {
      files: srcFiles,
      options: {
        sub: true
      }
    },
    jscs: {
      src: srcFiles,
      options: {
        preset: "jquery"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-jscs");

  grunt.registerTask("default", [ "jshint", "jscs"]);

};
