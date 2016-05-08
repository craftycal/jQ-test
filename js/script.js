
$(document).ready(function(){


	$( "#clickMe" ).click(function() {
		$("#orange").fadeToggle("slow");
	});

	$( "#up" ).click(function() {
		$("html, body").animate({ scrollTop: 0 }, 'slow');
	});


});


