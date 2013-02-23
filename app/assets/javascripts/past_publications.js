$(document).ready(function(){
    $("li").hover(
		function(){
        	$(this).toggleClass("active")
				.children("a.toggle").stop(true,true).toggle(1000);
				return false;
	});
});