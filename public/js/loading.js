  	$(document).ready(function() {
  		$("body").append(jQuery("<div><dt/><dd/></div>").attr("id", "progress"));
  		$("#progress").width(100+ "%");
  		$("#progress").width("101%").delay(800).fadeOut(400, function() {
  			$(this).remove();
  		});
  	});