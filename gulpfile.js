global.$ = {
	gulp: require("gulp"),
	del: require("del"),
	gp: require("gulp-load-plugins")(),
	minifyjs: require("gulp-js-minify"),
	bs: require("browser-sync").create(),
	path: {
		tasks: require("./gulp/config/tasks.js")
	}
};

$.path.tasks.forEach(function (taskPath) {
	require(taskPath)();
});

$.gulp.task("default", $.gulp.series(
	$.gulp.series("clean", "copy"),
	$.gulp.parallel("less", "scripts", "html", "fonts", "image"),
	$.gulp.parallel("css:libs", "scripts:libs"),
	$.gulp.parallel("watch", "serve")
));
