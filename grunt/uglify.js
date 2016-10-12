module.exports = {
    my_target: {
        files: {
            'build/js/index.js': [
                'node_modules/jquery/dist/jquery.min.js',
                'node_modules/handlebars/dist/handlebars.runtime.min.js',
                'node_modules/underscore/underscore-min.js',
                '<%= src %>/js/templates.js',
                '<%= src %>/js/index.js'
                ]
        }
    }
}