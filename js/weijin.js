/*
 * @Author: zhengwei
 * @Date:   2016-07-03 01:22:47
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2016-07-03 11:53:15
 */


// 这个tooltips插件需要初始化一下
//$('[data-toggle="tooltip"]').tooltip();
'use strict';


// a) 得定义一个大小图的档次 比如小于768认为他是小图
//因为获取到的屏幕宽度是一个数字的形式
var isSmall = 768
var smallImg = ['img/slide_01_640x340.jpg', 'img/slide_02_640x340.jpg', 'img/slide_03_640x340.jpg']
var bigImg = ['img/slide_01_2000x410.jpg', 'img/slide_02_2000x410.jpg', 'img/slide_03_2000x410.jpg']
var item = $('.carousel-inner .item')
$(function () {
    $(window).on('resize', function () {
//窗口时刻发生变换，所以我们每次进入前获取窗口宽度
        var windowWidth = $(window).width()
        if (windowWidth < isSmall) {
            item.each(function (index) {
                $(this).html('<img src="' + smallImg[index] + '"/>');
                $(this).css('background-image', '')
            })
        } else {
            item.each(function (index) {
                $(this).css('background-image', 'url('+bigImg[index]+')')
                $(this).html('')
            })
        }
    }).trigger('resize')

})

//b  因为当我们拖拽窗口 窗口宽度时刻发生改变windows有一个窗口变化事件 resize
//c判断当窗口<768时候 给img标签  大于的时候给背景图片


