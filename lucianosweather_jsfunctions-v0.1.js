$(function(){

  var d = new Date();
  var weekday = new Array(7);
	weekday[6] = "Sunday";
	weekday[0] = "Monday";
	weekday[1] = "Tuesday";
	weekday[2] = "Wednesday";
	weekday[3] = "Thursday";
	weekday[4] = "Friday";
  	weekday[5] = "Saturday";
  var n = weekday[d.getDay()];
	$("#day1").text(n);
});

$(function(){

  var d = new Date();
  var weekday = new Array(7);
	weekday[5] = "Sunday";
	weekday[6] = "Monday";
	weekday[0] = "Tuesday";
	weekday[1] = "Wednesday";
	weekday[2] = "Thursday";
	weekday[3] = "Friday";
  	weekday[4] = "Saturday";
  var n = weekday[d.getDay()];
	$("#day2").text(n);
});
$(function(){

  var d = new Date();
  var weekday = new Array(7);
	weekday[4] = "Sunday";
	weekday[5] = "Monday";
	weekday[6] = "Tuesday";
	weekday[0] = "Wednesday";
	weekday[1] = "Thursday";
	weekday[2] = "Friday";
	weekday[3] = "Saturday";
  var n = weekday[d.getDay()];
	$("#day3").text(n);
});

  var d = new Date();
  var weekday = new Array(7);
	weekday[3] = "Sunday";
	weekday[4] = "Monday";
	weekday[5] = "Tuesday";
	weekday[6] = "Wednesday";
	weekday[0] = "Thursday";
	weekday[1] = "Friday";
	weekday[2] = "Saturday";
  var n = weekday[d.getDay()];
	$("#day4").text(n);
});
  var d = new Date();
  var weekday = new Array(7);
	weekday[2] = "Sunday";
	weekday[3] = "Monday";
	weekday[4] = "Tuesday";
	weekday[5] = "Wednesday";
	weekday[6] = "Thursday";
	weekday[0] = "Friday";
	weekday[1] = "Saturday";
  var n = weekday[d.getDay()];
	$("#day5").text(n);
});

var d = new Date();
  var weekday = new Array(7);
	weekday[1] = "Sunday";
	weekday[2] = "Monday";
	weekday[3] = "Tuesday";
	weekday[4] = "Wednesday";
	weekday[5] = "Thursday";
	weekday[6] = "Friday";
	weekday[0] = "Saturday";
  var n = weekday[d.getDay()];
	$("#day6").text(n);
});


















