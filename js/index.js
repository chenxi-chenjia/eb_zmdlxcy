var mySwiper = new Swiper('.swiper-container', {
	autoplay: 0,//可选选项，自动滑动
	noSwiping:false,
	direction: 'vertical',
	pagination: '.swiper-pagination',
    paginationClickable: true,
    mousewheelControl : true
})



//canvas 动画
function cas(fa,color,percent){
	var obj=fa.getElementsByTagName('canvas')[0];
	var wh=obj.clientWidth;
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
var rc=document.getElementById('red_canvas-box');
cas(rc,'#f00909',40);

var bc=document.getElementById('blue_canvas-box');
cas(bc,'#0090f4',20)