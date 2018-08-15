$(function(){
	
	$( window ).resize(function() {
		//웹일때 화면 정중앙에 위치
		var browser_width = $(window).width();
		var browser_height = $(window).height();
		
		var wrapper_positionX = browser_width/2 - $(".container").width()/2;
		var wrapper_positionY = browser_height/2 - $(".wrapper").height()/2;
		//alert($(".container").width());
		if(browser_width<=1200){
			wrapper_positionY=0;
		}
		$(".wrapper").css("top", wrapper_positionY).css("left", wrapper_positionX).css("position","absolute");
	});
	//소개 서브젝트
	$(".subject > .header").click(function(){
		var class_name = $(this).next().attr("class");
		
		$(".subject >.content").removeClass("content_active");
		if(class_name=="content"){
			$(this).next().addClass("content_active");
		}else{
			$(this).next().addClass("content");
		}
	});
});

