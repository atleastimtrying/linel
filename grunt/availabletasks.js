module.exports = {
    tasks: {
      options:{
        groups: {
          'main': ['dev', 'test', 'default', 'clean', 'deploy']
        },
        filter: 'exclude',
        tasks: ['availabletasks'],
        descriptions: {
          'default': 'Run build and test',
          'build': 'Compile and minify all the things!',
          'dev': 'Build & Serve the project on port 8080 and process files as they change',
          'deploy': 'Build and deploy the dist folder. Defaults to Github Pages',
          'test': 'Run Jasmine tests and jshint',
          'tasks': 'Show the tasks Carabiner offers'
        }
      }
    }
};
