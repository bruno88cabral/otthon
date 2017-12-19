var gulp = require("gulp");
var sass = require("gulp-sass");
var notify = require("gulp-notify");
var htmlmin = require("gulp-htmlmin")

gulp.task('sass', function(){
	return gulp.src('source/sass/*.scss')
	     .pipe(sass({outputStyle:'compressed'}))
	     .on('error', notify.onError({ title: 'Erro ao Compilar', massage: '<%= error.message %>'}))
	     .pipe(gulp.dest('dist/css'))
});

gulp.task('buildjs', function(){ 
	return gulp.src([
	'source/components/jquery/dist/jquery.min.js',
	'source/components/tether/dist/js/tether.min.js'
		])
	.pipe(gulp.dest('dist/js'))
});

gulp.task('move-fonts', function(){
	return gulp.src('source/components/components-font-awesome/fonts/**')
	.pipe(gulp.dest('dist/fonts'))
})

gulp.task('js', function(){
	return gulp.src('source/js/*.js')
	.pipe(gulp.dest('dist/js/'))
});

gulp.task('minify', function() {
  return gulp.src('source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('demolidor', function(){
	gulp.watch('source/sass/**/*.scss',['sass'])
	gulp.watch('source/js/**/*.js',['js'])
	gulp.watch('source/*.html',['minify'])
});

gulp.task('default',['buildjs','sass','js','minify','demolidor']);