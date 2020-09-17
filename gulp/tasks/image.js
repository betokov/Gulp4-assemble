module.exports = function () {
	$.gulp.task("image", function () {
		return $.gulp.src("src/img/**/*.{png,jpg,gif,svg,jpeg,webp,ico}")
			.pipe($.gulp.dest("build/img"))
			.pipe($.bs.reload({
				stream: true
			}))
	})
}