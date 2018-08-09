$(function(){
	//메뉴 오버시
	$(".head_wrap .info_wrap .menu > ul > li").hover(function(){
		$(this).css("background","#fff");
		$(this).children("a").css("color","#000");
	},function(){
		$(this).css("background","#000");
		$(this).children("a").css("color","#fff");
	});
});