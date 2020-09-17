module.exports = function () {
	$.gulp.task("copy", function () {
		return $.gulp.src([
			"src/.htaccess",
		], {
			base: "src"
		})
			.pipe($.gulp.dest("build"))
	});
}