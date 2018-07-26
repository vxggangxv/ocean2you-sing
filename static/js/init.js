$(function() {
	
	headerFn();
	
});

function headerFn() {
	var hd = $(".header"),
		gnb = $(".header .gnb .menu a");
	
	gnb.click(function() {
		$('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top -100
        }, 800, 'easeInOutQuad');
	});
}