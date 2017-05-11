$(function(){
	var  _fangdajiang  =   $("#fangdajing"),
		 _input        =   $("#input").val(),
		 _lunbo_a      =   $(".content-e .contente .tow .left .left-b"),
		 _lunbo_b      =   $('.content-e .contente .tow .right')
		 
	

//	一众电气公司使命轮播图
	_lunbo_a.on('mouseover',function(){
		var index=$(this).index();
		_lunbo_a.removeClass('left-c');
		$(this).addClass('left-c');
		_lunbo_b.removeClass('active');
		_lunbo_b.eq(index-1).addClass('active');
	})
})
