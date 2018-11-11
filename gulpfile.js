// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify-backoffice', function() {
    return browserify('./app/backoffice/app.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('app.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./dist/backoffice/'));
});

gulp.task('clean', function() {
    gulp.src('./dist/*')
        .pipe(clean({force: true}));
});

gulp.task('copy-bower-components', function () {
    gulp.src('./app/lib/bower_components/**')
        .pipe(gulp.dest('dist/lib/bower_components'));
});

gulp.task('copy-html-files-backoffice', function () {
    gulp.src('./app/backoffice/**/*.html')
        .pipe(gulp.dest('dist/backoffice'));

    gulp.src('./app/backoffice/index.html')
        .pipe(gulp.dest('dist/backoffice'));
});

gulp.task('lint', function() {
    gulp.src(['./lib/**/*.js', '!./lib/bower_components/**'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

// default task
gulp.task('default',
    ['lint', 'connect']
);

// dist
gulp.task('dist',
    ['clean', 'browserify-backoffice', 'copy-bower-components', 'copy-html-files-backoffice']
);

// connecting tasks
gulp.task('connect', function () {
    connect.server({
        root: 'app/',
        port: 8889
    });
});

gulp.task('connect-dist', function () {
    connect.server({
        root: 'dist/',
        port: 9000
    });
});

// watch
gulp.task("watch", function() {
    // Watch our scripts
    gulp.watch(
        ['app/backoffice/**/*.js'],
        ['browserify-backoffice']
    );
});
