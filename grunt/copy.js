module.exports = {
  html: {
    files: [
      {
        expand: true,
        cwd: 'html/',
        src: ['**/*.html'],
        dest: 'dist/'
      }
    ]
  },
  data: {
    files: [
      {
        expand: true,
        cwd: 'data/',
        src: ['**/*'],
        dest: 'dist/'
      }
    ]
  }
};
