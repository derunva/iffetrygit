var gulp = require('gulp');

gulp.task('images-copy',function(){
	gulp.src('./dev/images/*')
	.pipe(gulp.dest('./app/images/'));
});
gulp.task('default',['images-copy']);