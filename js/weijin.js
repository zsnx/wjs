/*
 * @Author: zhengwei
 * @Date:   2016-07-03 01:22:47
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2016-07-03 11:53:15
 */


// ���tooltips�����Ҫ��ʼ��һ��
//$('[data-toggle="tooltip"]').tooltip();
'use strict';


// a) �ö���һ����Сͼ�ĵ��� ����С��768��Ϊ����Сͼ
//��Ϊ��ȡ������Ļ�����һ�����ֵ���ʽ
var isSmall = 768
var smallImg = ['img/slide_01_640x340.jpg', 'img/slide_02_640x340.jpg', 'img/slide_03_640x340.jpg']
var bigImg = ['img/slide_01_2000x410.jpg', 'img/slide_02_2000x410.jpg', 'img/slide_03_2000x410.jpg']
var item = $('.carousel-inner .item')
$(function () {
    $(window).on('resize', function () {
//����ʱ�̷����任����������ÿ�ν���ǰ��ȡ���ڿ��
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

//b  ��Ϊ��������ק���� ���ڿ��ʱ�̷����ı�windows��һ�����ڱ仯�¼� resize
//c�жϵ�����<768ʱ�� ��img��ǩ  ���ڵ�ʱ�������ͼƬ


