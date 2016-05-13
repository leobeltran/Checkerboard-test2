$(document).ready(function(){
		$("body").click(function(){
			$(".white").removeClass("white").addClass("marine");
			$(".black").removeClass("black").addClass("white");
			$(".marine").removeClass("marine").addClass("black");
		});
			
	$(".row div").mouseover(function() {
		if($(this).hasClass("black"))
			$(this).addClass("blue");
		else
			$(this).addClass("red");
});

$(".row div").mouseout(function() {
    $(this).removeClass("blue");
	    $(this).removeClass("red");
});
	
	
	
		});





			