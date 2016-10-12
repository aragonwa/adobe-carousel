module.exports = {
    main: {
        files: [
            // includes files within path 
            { expand: true, flatten: true, src: ['<%= src %>/imgs/*'], dest: 'build/imgs'},
        ],
    }
}