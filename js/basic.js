$(function(){
	var browser_width = $("window").width();
	var browser_height = $("window").height();
	var wrapper_positionX = browser_width/2 - $("#wrapper").width()/2;
	var wrapper_positionY = browser_height/2 - $("#wrapper").height()/2;
	
	$("#wrapper").css("top", wrapper_positionY).css("left", wrapper_positionX);
});