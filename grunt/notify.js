module.exports = {
  server: {
    options: {
      title: 'Site served',
      message: 'Site served on port <%= grunt.config.get("http-server").dev.port %>'
    }
  },
  watch: {
    options: {
      title: 'Site updated',
      message: "Site files updated"
    }
  },
  deploy: {
    options: {
      title: 'Site deployed',
      message: "Deployment completed!"
    }
  }
};
