$(function(){
	//웹일때 화면 정중앙에 위치
	var browser_width = $(window).width();
	var browser_height = $(window).height();
	
	var wrapper_positionX = browser_width/2 - $(".container").width()/2;
	var wrapper_positionY = browser_height/2 - $(".wrapper").height()/2;
	//alert($(".container").width());
	$(".wrapper").css("top", wrapper_positionY).css("left", wrapper_positionX).css("position","absolute");
	
	//현재 메뉴 활성화
	
	//메뉴 오버시
	$(".head_wrap .info_wrap .menu > ul > li").hover(function(){
		//$(this).css("background","#fff");
		$(this).children("a").addClass("depth1_menu_active");
	},function(){
		//$(this).css("background","#000");
		$(this).children("a").removeClass("depth1_menu_active");
	});
});

