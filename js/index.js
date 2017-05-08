var rc=document.getElementById('red_canvas-box');
var bc=document.getElementById('blue_canvas-box');

var ca_flag=true;

function begin_canvas(){
	if(ca_flag){
		cas(rc,'#f00909',40);
	}else{
		cas(bc,'#0090f4',20);
	}
	
}
function close_canvas(){
	if(ca_flag){
		over_cas(bc);
	}else{
		over_cas(rc);
	}
	
}


var mySwiper = new Swiper('.swiper-container', {
	autoplay: 0,//可选选项，自动滑动
	noSwiping:false,
	direction: 'vertical',
	pagination: '.swiper-pagination',
    paginationClickable: true,
    mousewheelControl : true,
    onSlideChangeStart:function(swiper){
    	$('.swiper-slide').css('zIndex',0).eq(swiper.activeIndex).css('zIndex',1);
    	if(swiper.activeIndex==0){
			var f=$('.swiper-slide').eq(0);
			f.find('.l_spring').addClass('animate-l_spring').end().find('.r_spring').addClass('animate-r_spring');
			star.enter_fn();
    	}else if(swiper.activeIndex==1){
			$('.swiper-slide').eq(1).find('.transform').addClass('translate_move');
    	}else if(swiper.activeIndex==2){
			$('.swiper-slide').eq(2).find('.transform').addClass('translate_move');
    	}else if(swiper.activeIndex==3){
			$('.swiper-slide').eq(3).find('.transform').addClass('translate_move');
			ca_flag=true;
			setTimeout(begin_canvas,1000);
			
    	}else if(swiper.activeIndex==4){
			$('.swiper-slide').eq(4).find('.transform').addClass('translate_move');
			ca_flag=false;
			setTimeout(begin_canvas,1000);
			
    	}else if(swiper.activeIndex==5){
			$('.swiper-slide').eq(5).find('.transform').addClass('translate_move');
    	}else if(swiper.activeIndex==6){
			$('.swiper-slide').eq(6).find('.transform').addClass('translate_move');
			$('.swiper-slide').eq(6).find('.scale').addClass('scale_move');
    	}
    },
    onSlideChangeEnd:function(swiper){
    	if(swiper.activeIndex!=0){
			var f=$('.swiper-slide').eq(0);
			f.find('.animate-l_spring').removeClass('animate-l_spring').end().find('.animate-r_spring').removeClass('animate-r_spring');
			star.leave_fn();
    	}
    	if(swiper.activeIndex!=1){
			$('.swiper-slide').eq(1).find('.translate_move').removeClass('translate_move');
    	}
    	if(swiper.activeIndex!=2){
			$('.swiper-slide').eq(2).find('.translate_move').removeClass('translate_move');
    	}
    	if(swiper.activeIndex!=3){
			$('.swiper-slide').eq(3).find('.translate_move').removeClass('translate_move');
			close_canvas();
    	}
    	if(swiper.activeIndex!=4){
			$('.swiper-slide').eq(4).find('.translate_move').removeClass('translate_move');
			close_canvas();
    	}
    	if(swiper.activeIndex!=5){
			$('.swiper-slide').eq(5).find('.translate_move').removeClass('translate_move');
    	}
    	if(swiper.activeIndex!=6){
			$('.swiper-slide').eq(6).find('.translate_move').removeClass('translate_move');
			$('.swiper-slide').eq(6).find('.scale_move').removeClass('scale_move');
    	}
    }
})












