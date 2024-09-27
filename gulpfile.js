const {src, dest, watch, series } = require('gulp');
const saas = require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('src/scss/**/*.scss')
    .pipe(saas())
    .pipe(dest('src/css'))
}

function watchTask(){
    watch(['src/scss/**/*.scss'],buildStyles)
}

exports.default = series(buildStyles, watchTask)