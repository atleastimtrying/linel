module.exports = {
  generate: {
    options: {
      basePath: 'dist',
      preferOnline: true,
      verbose: true,
      timestamp: true,
      hash: true,
      master: ['index.html']
    },
    src: [
      '**/*.html',
      '**/*.js',
      '**/*.css',
      '**/*.css.map',
      '**/*.json',
      '**/*.jpg',
      '**/*.png',
      '**/*.gif',
      '**/*.svg',
      '**/*.*',
      '!**/*.appcache'
    ],
    dest: 'dist/manifest.appcache'
  }
};
