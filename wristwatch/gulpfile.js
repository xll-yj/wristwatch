//导入模块
const gulp=require('gulp');
//压缩html
const html=require('gulp-htmlmin');
//sass转css
const sass=require('gulp-sass');
//压缩css
const cssnano=require('gulp-cssnano');
//重命名
const rename=require('gulp-rename');
//压缩js
const uglify=require('gulp-uglify');
//压缩图片
const imagemin=require('gulp-imagemin');
//将ES6转换为ES5
const babel=require('gulp-babel');

//发布任务
//拷贝首页
function fnCopy(){
    return gulp.src('./src/index.html').pipe(gulp.dest('./dist'));
}
//压缩pages的页面
function fnHTML(){
    return gulp.src('./src/pages/*.html').pipe(html()).pipe(gulp.dest('./dist/pages'));
}
//sass转css---(!!)
function fnCss(){
    return gulp.src('./src/sass/*.scss').pipe(sass()).pipe(gulp.dest('./dist/css'));
}
//拷贝fontcss文件
function fnCopyCss(){
    return gulp.src('./src/sass/*.css').pipe(gulp.dest('./dist/css'));
}
//压缩图片
function fnImg(){
    return gulp.src('./src/imgs/*').pipe(imagemin()).pipe(gulp.dest('./dist/imgs'));
}
//压缩js---(!!)
function fnJS(){
    return gulp.src('./src/js/*.js').pipe(babel({
        presets: ['@babel/env']
    })).pipe(gulp.dest('./dist/js'));
}
//拷贝插件
function fnLib(){
    return gulp.src('./src/lib/*.js').pipe(gulp.dest('./dist/lib'));
}
//监听
function fnWatch(){
    gulp.watch('./src/index.html',fnCopy);
    gulp.watch('./src/pages/*.html',fnHTML);
    gulp.watch('./src/sass/*.scss',fnCss);
    gulp.watch('./src/js/*.js',fnJS);
    gulp.watch('./src/imgs/*',fnImg);
}
//导出模块
exports.copy=fnCopy;
exports.html=fnHTML;
exports.sass=fnCss;
exports.fontcss=fnCopyCss;
exports.imgs=fnImg;
exports.js=fnJS;
exports.lib=fnLib;
exports.default=fnWatch;