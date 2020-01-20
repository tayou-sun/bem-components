

const { src, dest, series, postcss, watch, task} = require('gulp');

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gp_concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');


var params = {
    out: 'stub/build/',
    htmlSrc: 'index.potter.html',
    levels: ['common.blocks', 'potter.blocks']
};

function js(){
    return src(['node_modules/jquery/dist/jquery.min.js','common.blocks/**/*.js'])
    .pipe(babel())
    .pipe(gp_concat('script.js'))
    .pipe(uglify())
    .pipe(dest(params.out));
};

function css(){ 
    return src('common.blocks/**/*.css')
            .pipe(gp_concat('style.css'))
            .pipe(autoprefixer({
                cascade: false
            }))
            .pipe(dest(params.out))
}

 function images() {
    return src('assets/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(dest(params.out+'images'));
};

exports.js = js;
exports.css = css;
exports.images = images;


task('default', series(
    css,
    js,
    images
));

exports.default = () =>{
    watch('common.blocks/**/*.css', css);
    watch('common.blocks/**/*.js', js);
    watch('assets/images/**/*.+(png|jpg|jpeg|gif|svg', images);
}