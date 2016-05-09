
$(document).ready(function(){


	$(".control").click(function(){
		$(this).next(".box").slideToggle({"display" : "block"});
	});

	$("#loginclick").click(function(){
		$("#login").slideToggle({"display" : "block"});
	});	

});//document


