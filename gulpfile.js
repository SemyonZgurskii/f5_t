const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const del = require("del");
const rename = require("gulp-rename");
const csso = require("gulp-csso")

function copy() {
  return gulp.src([
    "source/assets/fonts/*.{woff,woff2}",
    "source/assets/images/*.{jpg,png,svg,ico}",
    "source/*.js"
  ], {base: "source"})
    .pipe(gulp.dest("public"))
}

function html() {
  return gulp.src("source/index.html")
    .pipe(gulp.dest("public"))
    .pipe(sync.stream());
}

function styles() {
  return gulp.src("source/scss/main.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(rename("style.min.css"))
    .pipe(csso())
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("public/css"))
    .pipe(sync.stream());
}

function server(done) {
  sync.init({
    server: {
      baseDir: 'public'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

function watcher() {
  gulp.watch("source/**/*.scss", gulp.series(styles));
  gulp.watch("source/*.html", gulp.series(html));
}

function clean() {
  return del("public");
}

exports.build = gulp.series(clean, copy, html, styles);

exports.default = gulp.series(
  clean, copy, html, styles, server, watcher
);
