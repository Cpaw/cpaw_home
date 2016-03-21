$(document).ready(function () {
  	hsize = $(window).width();
	$("#top_active").css("height", hsize / 3.5);
});

$(window).resize(function () {
	hsize = $(window).width();
	$("#top_active").css("height", hsize / 3.5);
});

