// JavaScript Document

	$(document).ready(function () {
	    $("body").queryLoader2({
	        barColor: "#6e6d73",
	        backgroundColor: "#fff",
	        percentage: true,
	        barHeight: 1,
	        completeAnimation: "grow",
	        minimumTime: 100
	    });

	});

$(function() {
	var topBtn = $('#page-top');	
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
});