$(function() {
	
	headerFn();
	
});

function headerFn() {
	
	var hd = $(".header"),
		gnb = $(".header .gnb .menu a"),
		navBack = $(".nav-back"),
		navTab = $(".header .nav-tab"),
		navArea = $(".header .nav-area");
	
	navTab.click(function() {
		navFn();
	});
	
	gnb.click(function() {
		$("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - 52
        }, 800, "easeInOutQuad");
		
		navFn();
		
		return false;
	});
	
	function navFn() {
		navTab.toggleClass("active");
		navArea.slideToggle();
		navBack.fadeToggle();
		navArea.find(".gnb").slideToggle();
		if ( navTab.hasClass("active") ) {
			$("html, body").on("scroll touchmove mousewheel", function(e) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			});	
		} else { 
			$("html, body").off("scroll touchmove mousewheel");
		}
	}
	
}