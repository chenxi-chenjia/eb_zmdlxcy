//整体效果
var screen_top_data=new Array();
var screen_heigth=$(window).height();
var trans_index=0;
var flag_arr=new Object();

var rc=document.getElementById('red_canvas-box');
var bc=document.getElementById('blue_canvas-box');
var canvas_flag=true;

$('.container').each(function(i,v){
	screen_top_data.push($(this).offset().top);
	flag_arr[i]=true;
})
screen_top_data.forEach(function(v,i){
	if($(window).scrollTop()+screen_heigth-400>=v){
		trans_index=i;
	}
})
$('.container').each(function(i,v){
	if(i<=trans_index){
		floor_animate(i);
		flag_arr[i]=false;
	}
})






//canvas 动画效果
function r_canvas_move(){
	cas(rc,'#f00909',40);
}
function b_canvas_move(){
	cas(bc,'#0090f4',20);
}




//滚屏动画效果

$(window).scroll(function(){
	var w_top=$(window).scrollTop()+screen_heigth-400;
	screen_top_data.forEach(function(v,i){
		if(w_top>=v){
			trans_index=i;
			if(flag_arr[i]){
				floor_animate(i);
				flag_arr[i]=false;
			}
		}
	})
})

$('.wyxq .check-box').on('click','span',function(){
	$(this).parent().find('.checked').removeClass('checked');
	$(this).addClass('checked');
})



// 楼层动画效果
function floor_animate(i){
	if(i==0){
		
	}else if(i==1){
		$('.wmdcp').find('.animate').removeClass('animate').end().find('h2').addClass('fadeInDown').addClass('animated');
		$('.wmdcp .row').find('.col-xs-12').addClass('rotateInDownLeft').addClass('animated');
	}else if(i==2){
		$('.hzms').find('.animate').removeClass('animate').end().find('.zz-font').addClass('zoomIn').addClass('animated');
		$('.hzms').find('h2').addClass('fadeInDown').addClass('animated').end().find('h3').addClass('lightSpeedIn').addClass('animated').end().find('.pl').addClass('fadeInRight').addClass('animated').end().find('.canvas').addClass('zoomIn').addClass('animated');
			if(canvas_flag){
				setTimeout(r_canvas_move,1750);
				setTimeout(b_canvas_move,2000);
				canvas_flag=false;
			}
	}else if(i==4){
		$('.mxqt').find('.animate').removeClass('animate').end().find('h2').addClass('fadeInDown').addClass('animated').end().find('.col-xs-6').addClass('fadeInUp').addClass('animated');
	}else if(i==5){
		$('footer').find('.animate').removeClass('animate').end().find('.img-box').addClass('zoomIn').addClass('animated').end().find('.col-xs-12:last').addClass('slideInUp').addClass('animated');
	}
}



