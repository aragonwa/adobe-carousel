module.exports = {
  development: {
    options: {
      paths: ['<%= src %>/styles'],
      cleancss: false,
      compress: false,
      modifyVars: {
        'fa-font-path' : '"//netdna.bootstrapcdn.com/font-awesome/4.6.3/fonts"'
      }
    },
    files: {
      '<%= build %>/css/styles.css': '<%= src %>/styles/styles.less',
    }
  },
  deploy: {
    options: {
      paths: ['<%= src %>/styles'],
      cleancss: true,
      compress: true,
      modifyVars: {
        'fa-font-path' : '"//netdna.bootstrapcdn.com/font-awesome/4.6.3/fonts"'
      }
    },
    files: {
      '<%= build %>/css/styles.css': '<%= src %>/styles/styles.less',
    }
  }
};