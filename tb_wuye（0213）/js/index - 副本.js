/*
* @Author: Administrator
* @Date:   2016-12-06 17:16:50
* @Last Modified by:   Administrator
* @Last Modified time: 2016-12-15 10:45:47
*/

'use strict';
$(function(){

// ---------------------------------------------首页---------------------------------------------
		// banner轮播图
		var timer;
		var num=0;
		$('.line li').click(function(){
			$(this).addClass('current').siblings().removeClass('current');
			var index=$(this).index();
			num=index;
			$('.banner_img li').eq(index).show().siblings().hide();

		});

		var  show=function(){
	          	num++;
	          	if(num>3){
	          		num=0;
	          	}
	          	$('.line li').eq(num).addClass('current').siblings().removeClass('current');
	          	$('.banner_img li').eq(num).show().siblings().hide();

	          };
          timer=setInterval(show,2000);        
          $('.main').hover(function(){
          		// stop
          		clearInterval(timer);
          },function(){
          	clearInterval(timer);
          	timer=setInterval(show,2000);

          });
          // 左右箭头
          $('.arr_r').click(function(event){
          	num++;
          	if(num>2){
          		num=0;
          	}
          	$('.line li').eq(num).addClass('current').siblings().removeClass('current');
          	$('.banner_img li').eq(num).fadeIn(2000).siblings().fadeOut(2000);
          })
          $('.arr_l').click(function(event){
          	num--;
          	if(num<0){
          		num=2;
          	}
          	$('.line li').eq(num).addClass('current').siblings().removeClass('current');
          	$('.banner_img li').eq(num).fadeIn(1000).siblings().fadeOut(1000);
          })

          // 导航
      $('.nav_text>li').hover(function(){
  			$(this).children('#o1').stop().slideDown(300);
      	},function(){
  			$(this).children('#o1').stop().slideUp(300);
    	});

		// 新闻中心背景
		$('.new_icon>li').hover(function(){
			$(this).children('i').stop().slideDown(300);
    	},function(){
			$(this).children('i').stop().slideUp(300);
    });

  	// 项目与服务图片变大
  	$('.service_img').hover(function(){
  		$(this).children('img').css('transition','all 1s');
  		$(this).children('img').css('transform','scale(1.3,1.3)');
  	},function(){
  		$(this).children('img').css('transition','all 1s');
  		$(this).children('img').css('transform','scale(1,1)');
  	});


  


  // ---------------------------------------------关于我们---------------------------------------------
    

    $('.side_l>li').children('a').click(function () {     
        if ($(this).next('ol').css("display") == "block") {
              
              $(this).children('i').css('background-image', 'url(images/icon_left.png)');
              
          } else { 
                           
              $(this).children('i').css('background-image', 'url(images/icon_down.png)');
         }
              $(this).siblings('.side_child').slideToggle();
    });





      // 点击一级栏目第一个
    $('.side_l>li:nth-child(1)').children('a').click(function(event) {
          var num=$(this).parent().index();
			//alert(num);
          $('.about_content>li').eq(num).addClass('current_show').siblings().removeClass('current_show');
    });

    $('.side_l>li:nth-child(1) .side_child>li').children('a').click(function(event) {
          var num=$(this).parent().index();
			//alert(num);
          $('.about_content>li').eq(num).addClass('current_show').siblings().removeClass('current_show');

    });


      // 点击一级栏目第二个
    $('.side_l>li:nth-child(2)').children('a').click(function (event) {
        var num=$(this).parent().index();
		var a = $('.side_l>li:nth-child(1) .side_child>li').length;
		if(a==0){
			var a=0;

		}else{
			var a=a-1;

		}
		var b=a+num;
		$('.about_content>li').eq(b).addClass('current_show').siblings().removeClass('current_show');


    });

    $('.side_l>li:nth-child(2) .side_child>li').children('a').click(function(event) {
		var d=$(this).parent().parent().parent().index();

		var num=$(this).parent().index();

		var a = $('.side_l>li:nth-child(1) .side_child>li').length;
		if(a==0){
			var a=0;

		}else{
			var a=a-1;

		}

		var b=a+num+d;

		$('.about_content>li').eq(b).addClass('current_show').siblings().removeClass('current_show');

    });

     
      // 点击一级栏目第三个
    $('.side_l>li:nth-child(3)').children('a').click(function(event) {
          var a = $('.side_l>li:nth-child(1) .side_child>li').length;
          var c = $('.side_l>li:nth-child(2) .side_child>li').length;
		  var num = $(this).parent().index();
		  if(a==0){
			  var a=0;

		  }else{
			  var a=a-1;

		  }
		  if(c==0){
			var c=0;

		  }else{
			var c=c-1;

		  }
		  var b=a+c+num;

		  $('.about_content>li').eq(b).addClass('current_show').siblings().removeClass('current_show');
    });

	$('.side_l>li:nth-child(3) .side_child>li').children('a').click(function(event) {

		var num=$(this).parent().parent().parent().index();

		var d = $(this).parent().index();

		var a = $('.side_l>li:nth-child(1) .side_child>li').length;
		var c = $('.side_l>li:nth-child(2) .side_child>li').length;
		if(a==0){
			var a=0;

		}else{
			var a=a-1;

		}
		if(c==0){
			var c=0;

		}else{
			var c=c-1;

		}
		var b=a+num+c+d;

		$('.about_content>li').eq(b).addClass('current_show').siblings().removeClass('current_show');

	});





    




	});

