module.exports = {
  dist:{
    files: 'dist/**/*',
    tasks: ['notify:watch'],
    options: {
      livereload: true,
      spawn: false
    }
  },
  js:{
    files: ['js/{src,lib}/**/*.js'],
    tasks: [
      'browserify',
      'uglify',
      'jasmine'
    ],
    options: { spawn: false }
  },
  react:{
    files: ['js/jsx/**/*.jsx'],
    tasks: ['react']
  },
  jasmine:{
    files: ['js/test/**/*.js'],
    tasks: [ 'browserify', 'jasmine' ]
  },
  sass: {
    files: ['css/**/*.scss'],
    tasks: ['sass'],
    options: { spawn: false }
  },
  images: {
    files: ['images/**/*.{png,jpg,gif}'],
    tasks: ['imagemin'],
    options: { spawn: false }
  },
  svg: {
    files: ['images/**/*.svg'],
    tasks: ['svgmin'],
  },
  haml: {
    files: ['html/**/*.haml'],
    tasks: ['haml'],
    options: { spawn: false }
  },
  jade: {
    files: ['html/**/*.jade'],
    tasks: ['jade'],
    options: { spawn: false }
  },
  html: {
    files: ['html/**/*.html'],
    tasks: ['copy:html']
  },
  data: {
    files: ['data/**/*'],
    tasks: ['copy:data']
  }
};
