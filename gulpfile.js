var browserSync  = require('browser-sync').create();
var gulp         = require('gulp');
var imagemin     = require('gulp-imagemin');
var jade         = require('gulp-jade');
var sitemap      = require('gulp-sitemap');
var postcss      = require('gulp-postcss');
var rename       = require('gulp-rename');
var sourcemaps   = require('gulp-sourcemaps');
var uglify       = require('gulp-uglify');

var autoprefixer = { 
    browsers: ['last 2 versions']
};

var bem = {
    style: 'bem', 
    separators: {
        namespace: '_',
        descendent: '__',
        modifier: '--' 
    }
};

var processors = [
    require('postcss-import')(),
    require('postcss-url')(),
    require('autoprefixer')(autoprefixer),
    require('postcss-bem')(bem),
    require('postcss-nested')(),
    require('postcss-cssnext')(),
    require('postcss-browser-reporter')(),
    require('postcss-reporter')(),
    require('lost')(),
    require("csswring")()
];

gulp.task('templates', function () {
    return gulp.src('./src/jade/*.jade')
        .pipe(jade())
        .pipe(rename(function(path){
            if ( path.basename == 'index' ){
                return;
            }
            path.dirname = path.basename.split('-')[0];
            path.basename = 'index';
        }))
        .pipe(sitemap({
            siteUrl: 'http://hornslet-akupunktur.dk'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('styles', function () {
    return gulp.src('./src/css/main.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('images', function () {
    gulp.src('./src/images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/images'));
});

gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', ['templates', 'scripts', 'styles', 'images'], function() {
    
    browserSync.init({
        server: './dist'
    });

    gulp.watch('./src/js/**/*.js', ['scripts', browserSync.reload]);
    gulp.watch('./src/css/**/*.css', ['styles', browserSync.reload]);
    gulp.watch('./src/jade/**/*.jade', ['templates', browserSync.reload]);
    gulp.watch('./src/images/**/*', ['images']);
    
});

gulp.task('default', ['watch']);
