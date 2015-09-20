module.exports = {
  dist: {
    'files': [
      {
        expand: true,
        cwd: 'html/',
        src: ['**/*.haml'],
        dest: 'dist/',
        ext: '.html',
        extDot: 'first'
      }
    ]
  }
};
