module.exports = {
  options: {
    plugins: [
      { removeViewBox: false },
      { cleanupIDs: false }
    ]
  },
  dist: {
    files: [
      {
        expand: true,
        cwd: 'images/',
        src: ['**/*.svg'],
        dest: 'dist/images/'
      }
    ]
  }
};
