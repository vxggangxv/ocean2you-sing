$(function() {
	
	headerFn();
	scrFn();
	
});

function headerFn() {
	var hd = $(".header"),
		gnb = $(".header .gnb .menu a");
	
	gnb.click(function() {
		$('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 800, 'easeInOutQuad');
	});
}

function scrFn() {
	// top, 실시간예약버튼
	$(window).on('scroll', function() {
		var scr = $(window).scrollTop();
		var setTop = $(".wrap.about").offset().top;
		
		if (scr < setTop) {
			$("#goTop").removeClass("on");
			// $("#goTop, #rtBookingBn").removeClass("on");
		}
		if (scr >= setTop) {
			$("#goTop").addClass("on");
			// $("#goTop, #rtBookingBn").addClass("on");
		}
	});

	$("#goTop").on("click", function() {
		$(window).scrollTop(0);
	});
}