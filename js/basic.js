$(function(){

	//웹일때 화면 정중앙에 위치(홈페이지 노출시)
	resize_wrap();
	$( window ).resize(function() {
		//웹일때 화면 정중앙에 위치(화면 리사이즈시)
		clearTimeout(null);
		timer  = setTimeout(resize_wrap(), 300);
	});
	
	function resize_wrap(){
		var browser_width = $(window).width();
		var browser_height = $(window).height();
		
		var wrapper_positionX = browser_width/2 - $(".container").width()/2;
		var wrapper_positionY = browser_height/2 - $(".wrapper").height()/2;
		//alert($(".container").width());
		
		//테블릿 크기일 경우는 상단으로 붙여서 노출(모바일 포함)
		if(browser_width<=1200){
			wrapper_positionY=0;
		}
		//새로크기가 작을시는 그냥 상단으로 붙여서 노출
		if(browser_height<0){
			wrapper_positionY=0;
		}
		$(".wrapper").css("top", wrapper_positionY).css("left", wrapper_positionX).css("position","absolute");
	}

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

