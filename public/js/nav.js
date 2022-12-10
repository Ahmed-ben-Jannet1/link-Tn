


(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	//Switch light/dark

	window.addEventListener('load', (event) => {
		console.log('page is fully loaded');
		if (!$("body").hasClass("dark") && localStorage.getItem("white")=="true") {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
			
		}
		else {
			console.log('window',localStorage.getItem("white"))
  
			$("body").addClass("dark");
			$("#switch").addClass("switched");
			
		}
	  });
	
	$("#switch").on('click', function () {
		
		if ($("body").hasClass("dark") && localStorage.getItem("white")=="false") {
			console.log('oo',localStorage.getItem('white'))
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
			localStorage.setItem("white",true);
		}
		else {
			console.log('ohghk',localStorage.getItem("white"))
  
			$("body").addClass("dark");
			$("#switch").addClass("switched");
			localStorage.setItem("white",false);
		}
		
	});  
	
  })(jQuery); 