module.exports = {
  dist: {
    src: [
      'js/lib/**/*.js',
      'js/src/**/*.js'
    ],
    dest: 'dist/<%= pkg.name %>.js'
  },
  specs: {
    src: ["js/test/src/**/*spec.js"],
    dest: "js/test/compiled/specs.js",
  }
};

