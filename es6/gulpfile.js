var gulp = require('gulp'),
  babel = require('gulp-babel'),
  header = require('gulp-header'),
  browserSync = require('browser-sync'),
  tempDate = new Date(),
  tempTime = tempDate.getFullYear() + ' ' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + ' ' + tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds();

gulp.task('browser-sync', function() {
    browserSync({
        files: "**",
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', function() {
  return gulp.src('src/*.js')
    .pipe(babel())
    .pipe(header('/* lastModify ' + tempTime + ' */\n'))
    .pipe(gulp.dest('dist'));
    // browserSync.reload();
});

gulp.task('watch', function() {
  gulp.watch('src/*.js', ['default', 'browser-sync']);
});