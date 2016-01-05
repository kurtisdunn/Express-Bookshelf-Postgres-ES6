'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: 'dist/server.js'
        }
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: [{
             "expand": true,
             "cwd": "src",
             "src": ["**/*.js"],
             "dest": "dist",
             "ext": ".js"
         }]
      }
    },
    notify_hooks: {
      options: {
        enabled: true,
        max_jshint_notifications: 5,
        title: "ES6",
        success: false,
        duration: 3
      }
    },
    notify: {
      sass: {
        options: {
          title: "CSS Ready",
          message: "SASS files are compiled."
        }
      },
      ejs: {
        options: {
          title: "EJS Ready",
          message: "Templates are compiled"
        }
      },
      babel: {
        options: {
          title: "JS Transpiled",
          message: "ES6 scripts compiled"
        }
      }
    },
    watch: {
      files: ['app/**/*.js'],
      options: {
        livereload: true
      },
      babel: {
        files: [
          'src/**/*.js',
        ],
        options: {
          livereload: true
        },
        tasks: ['babel', 'notify:babel']
      },
      express: {
          files: ['dist/server.js', 'dist/app/**/*.js'],
          tasks: ['express:dev'],
          options: {
              spawn: false
          }
      },
      // scripts: {
      //   files: [
      //     'dist/app/_public/scripts/**/*.js',
      //   ],
      //   options: {
      //     livereload: true
      //   },
      //   tasks: ['notify:script']
      // },
      ejs: {
        files: ['src/app/views/**/*.ejs'],
        options: {
          livereload: true
        },
        tasks: ['copy:ejs', 'notify:ejs'],
      },
      css: {
        files: [
          'dist/app/_public/css/**/*.css',
        ],
        options: {
          livereload: true
        }
      },
      sass: {
        files: 'src/app/scss/*.scss',
        tasks: ['notify:sass', 'sass'],
        options: {
          livereload: true
        }
      },
      express: {
        files: ['server.js', 'bower.json', '!**/node_modules/**', '!Gruntfile.js'],
        tasks: ['express:dev'],
        options: {
          nospawn: true,
          livereload: true
        }
      }
    },
    copy: {
      ejs:{
        files: [{
            expand: true,
            cwd: 'src/app/views/',
            src: ['**'],
            dest: 'dist/app/views/'
        }]
      }
    },
    sass: {
      options: {
        cacheLocation: '.tmp/.sass-cache'
      },
      dev: {
        options: {
          style: 'expanded',
          lineComments: true
        },
        files: [{
          expand: true,
          cwd: 'src/app/scss',
          dest: 'dist/app/_public/css',
          src: ['*.scss'],
          ext: '.css'
        }],
      }
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "dist/app/_public/css/*.css",
            "src/app/views/**/*.ejs",
            "dist/app/**/*.js",
          ]
        },
        options: {
          watchTask: true,
          proxy: "localhost:3000"
        }
      }
    }
  });

  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.task.run('notify_hooks');

  grunt.registerTask('dev', 'Start working on this project.', [
    'copy:ejs',
    'babel',
   // 'express:dev',
    'browserSync',
    'watch',
  ]);
  
  grunt.registerTask('compile', 'Start working on this project.', [
    'babel',
    'watch'


  ]);

  // Build
  // grunt.registerTask('build', 'Build production ready assets and views.', [
  //TODO Fill this up with useful build methods
  // ]);

};
