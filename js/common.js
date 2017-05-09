//星星函数
var star={
	banner_width:$('.banner').width(),
	banner_height:$('.banner').height(),
	star_width:$('.banner .icon1').width(),
	lster_width:$('.banner .icon2').width(),
	star_num:6,
	star_move:function(){
		var self=star;
		$('.star-box').empty();
		for(var i=0;i<self.star_num;i++){
			$('<div class="icon icon1 animate-shoot_star"></div>').appendTo($('.star-box'));
		}
		$('.star-box').find('.icon').each(function(){
			var star_X=Math.random()*self.banner_width;
			var star_Y=Math.random()*self.banner_height;
			var new_star_width=Math.random()*self.star_width;
			var new_star_height=new_star_width*9/8.7;
			$(this).css({
				width:new_star_width+'px',
				height:new_star_height+'px',
				top:star_Y+'px',
				left:star_X+'px',
				backgroundSize:new_star_width+'px '+new_star_height+'px'
			})
		})
		
	},
	lstar_move:function(){
		var self =star;
		$('.lstar-box').empty();
		for(var i=0;i<self.star_num;i++){
			$('<div class="icon icon2 animate-flicker"></div>').appendTo($('.lstar-box'))
		}
		$('.lstar-box').find('.icon').each(function(){
			var lstar_X=Math.random()*self.banner_width;
			var lstar_Y=Math.random()*self.banner_height;
			var new_lstar_width=Math.random()*self.lster_width;
			var new_lstar_height=new_lstar_width*9/8.7;
			$(this).css({
				width:new_lstar_width+'px',
				height:new_lstar_height+'px',
				top:lstar_Y+'px',
				left:lstar_X+'px',
				backgroundSize:new_lstar_width+'px '+new_lstar_height+'px'
			})
		})
		
	},
	enter_fn:function(){
		$('.banner').find('.transform').addClass('translate_move');
		setTimeout(this.star_move,0);
		setTimeout(this.lstar_move,0);
		this.star_t=setInterval(this.star_move,4000);
		this.lstar_t=setInterval(this.lstar_move,3000);
	},
	leave_fn:function(){
		$('.banner').find('.translate_move').removeClass('translate_move');
		clearInterval(this.star_t);
		clearInterval(this.lstar_t);
		$('.star-box').empty();
		$('lstar-box').empty();
		$('<div class="icon icon1"></div>').appendTo($('.star-box'));
		$('<div class="icon icon2"></div>').appendTo($('lsstar-box'));
	}
}






//canvas 动画
function cas(fa,color,percent){
	var obj=fa.getElementsByTagName('canvas')[0];
	var wh=$(fa).width();
	obj.width=wh;
	obj.height=wh;
	var zb=wh/2;
	var lw=wh*0.07;
	var r=wh/2-lw;
	var ctx=obj.getContext('2d');
	var num=0;
	function rc(p){
		ctx.clearRect(0,0,wh,wh);
		ctx.save(p);
		ctx.beginPath();
		ctx.arc(zb,zb,r,0,Math.PI*2);
		ctx.lineWidth=lw;
		ctx.strokeStyle='#f1f1f1';
		ctx.fillStyle=color;
		ctx.closePath();
		ctx.stroke();


		var startAngle = Math.PI;
		var anglePerSec = 2 * Math.PI * p/100;
		ctx.beginPath();
		ctx.arc(zb, zb, r, startAngle, startAngle + anglePerSec, false)
		ctx.strokeStyle = color;
		ctx.lineCap='round';
		ctx.stroke();
		ctx.closePath();


	}
	var t=setInterval(an,10);
	function an(){
		rc(num);
		var span=fa.getElementsByTagName('span')[0];
		span.innerHTML=num+'%';
		if(num>=percent){
			clearInterval(t);
		}
		num++;
	}
}

//banner 动画初始化
star.enter_fn();

function over_cas(fa){
	var obj=fa.getElementsByTagName('canvas')[0];
	var wh=obj.clientWidth;
	var ctx=obj.getContext('2d');
	ctx.clearRect(0,0,wh,wh);

	var span=fa.getElementsByTagName('span')[0];
	span.innerHTML='0%';

}