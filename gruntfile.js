module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            less:{
                files: ['src/styles/*.less'],
                tasks: ['less']
            },
            uglify:{
                files: ['src/scripts/*.js'],
                tasks: ['uglify']
            }
        },
        less: {
            build: {
                options: {
                    compress: true
                },
                files: {
                    'build/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'build/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less', 'uglify']);
}