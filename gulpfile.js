const fileinclude = require('gulp-file-include');
const gulp = require('gulp');

gulp.task('fileinclude', function() {
    gulp.src(['index.html', 'image-gallery.html', 'projects.html', 'form.html', 'viver-mais-tipo1.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./final-html'));
});