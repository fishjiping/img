var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('build',  function() {
    gulp.src(["./src/*.js"])
        .pipe(minify({
            ext: {
                min: '.js',
                src: '.debug.js'
            }
        }))
        .pipe(gulp.dest('./build'))
});

gulp.task('default', ['build']);
