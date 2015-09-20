module.exports = {
  dist: {
    src: [
      'js/lib/jquery.js',
      'js/lib/**/*.js',
      'js/bookends/before.js',
      'js/src/**/*.js',
      '!js/bookends/after.js',
      'js/bookends/after.js'
    ],
    dest: 'dist/<%= pkg.name %>.js'
  }
};
