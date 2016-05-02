$(document).ready(function() {

var check = true;

	$("#id").hover(function() {

		if(check) {

			$(this).finish().animate({

			});

			check = false;
			
		} else {

			$(this).finish().animate({

			});

			check = true;
		}
	})

/* Smooth Scrolling courtesy of https://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery*/
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
}