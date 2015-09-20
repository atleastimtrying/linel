module.exports = {
  options: {
    cache: false
  },
  dist: {
    files: [{
      expand: true,
      cwd: 'images/',
      src: ['**/*.{png,jpg,gif,ico}'],
      dest: 'dist/images/'
    }]
  }
};
