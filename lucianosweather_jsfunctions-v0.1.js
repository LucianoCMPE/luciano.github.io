	$(window.onbeforeunload = function () {
  			window.scrollTo(0, 0);
		});	
	$("#table4").hide().fadeIn();
	$("#table3").hide().slideDown(1000);
	$("#table2").hide().slideDown(1000);
	$("#table1").hide().slideDown(1000);
	$("#table").hide().slideDown(1000).css("display","table");
	$("#date").fadeIn(1000).css("display","inline-block");
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
	$("#day1").fadeIn(1000).text(n);
	});

	// Change this to your API key between the single quotes ('):
	//var api_key = '924dbd1a7a384a1d6dfb73f3a1319631';
	//var request = new XMLHttpRequest();
	//request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Baltimore,us&units=imperial&appid=' + api_key);
	//request.responseType = 'json';
	//request.send();
	// var weather_data = loadjson('http://api.openweathermap.org/data/2.5/weather?q=Baltimore,ca&units=imperial&appid=' + api_key);
	//request.onload = function() {
  	//	alert(request.response['main']); // get the string from the response
	//}
	
		
	$.getJSON('http://api.weatherbit.io/v2.0/current?city=Towson,MD&days=16&units=I&key=b079da81f71d4ebba36ee3dc544a3931', function(data) {
		$("#temp1").fadeIn(1000).css("display","inline-block").html(Math.round(data[0].temp) + '<sup>o</sup>');
		
		//$(".forecast.today > .highlowtemp").html(`<div class = "highlowtemp" style = "font-size:medium"> High: ${data.rh}%<br /> Wind Speed: ${Math.round(data.wind_spd)} mph</div>`);
		
		
		$(".forecast-icon > .forecasttext").html(`<div class = "forecasttext" style = "font-size:medium"> Humidity: ${data.rh}%<br /> Wind Speed: ${Math.round(data.wind_spd)} mph</div>`);
		
		var currentWeatherCondition = data[0].weather[0].code;
		
		if((currentWeatherCondition > 299) && (currentWeatherCondition < 523)){
			$('#cloudy1').attr("src", "images/icons/icon-9.svg");
		}
		
		if((currentWeatherCondition > 599) && (currentWeatherCondition < 611)){
			$('#cloudy1').attr("src", "images/icons/icon-14.svg");
		}	
		
		if(currentWeatherCondition == 800){
			$('#cloudy1').attr("src", "images/icons/icon-2.svg");
		}
		
		if((currentWeatherCondition == 801) || (currentWeatherCondition == 802)){
			$('#cloudy1').attr("src", "images/icons/icon-3.svg");
		}
		
		if((currentWeatherCondition > 802) && (currentWeatherCondition < 805)){
			$('#cloudy1').attr("src", "images/icons/icon-5.svg");
		}
		$('#cloudy').show("slow");
});
	$.getJSON('http://api.weatherbit.io/v2.0/forecast/daily?city=Towson,MD&days=16&units=I&key=b079da81f71d4ebba36ee3dc544a3931', function(data) {
		//FIRST DAY FORECAST (GENERATES ICON FOR DAY 1)
		var currentDayCondition = data.data[1].weather.code
		
		if((currentDayCondition > 299) && (currentDayCondition < 523)){
			$('#cloudy1').attr("src", "images/icons/icon-9.svg");
		}
		
		if((currentDayCondition > 599) && (currentDayCondition < 611)){
			$('#cloudy1').attr("src", "images/icons/icon-14.svg");
		}	
		
		if(currentDayCondition == 800){
			$('#cloudy1').attr("src", "images/icons/icon-2.svg");
		}
		
		if((currentDayCondition == 801) || (currentDayCondition == 802)){
			$('#cloudy1').attr("src", "images/icons/icon-3.svg");
		}
		
		if((currentDayCondition > 802) && (currentDayCondition < 805)){
			$('#cloudy1').attr("src", "images/icons/icon-5.svg");
		}
		/////////////////////////////////////////////////////////////
		
		
		//SECOND DAY FORECAST (GENERATES ICON FOR DAY 2)
		currentDayCondition = data.data[2].weather.code
		
		if((currentDayCondition > 299) && (currentDayCondition < 523)){
			$('#cloudy2').attr("src", "images/icons/icon-9.svg");
		}
		
		if((currentDayCondition > 599) && (currentDayCondition < 611)){
			$('#cloudy2').attr("src", "images/icons/icon-14.svg");
		}	
		
		if(currentDayCondition == 800){
			$('#cloudy2').attr("src", "images/icons/icon-2.svg");
		}
		
		if((currentDayCondition == 801) || (currentDayCondition == 802)){
			$('#cloudy2').attr("src", "images/icons/icon-3.svg");
		}
		
		if((currentDayCondition > 802) && (currentDayCondition < 805)){
			$('#cloudy2').attr("src", "images/icons/icon-5.svg");
		}
	
		/////////////////////////////////////////////////////////////
		
		//THIRD DAY FORECAST (GENERATES ICON FOR DAY 3)
		currentDayCondition = data.data[3].weather.code
		
		if((currentDayCondition > 299) && (currentDayCondition < 523)){
			$('#cloudy3').attr("src", "images/icons/icon-9.svg");
		}
		
		if((currentDayCondition > 599) && (currentDayCondition < 611)){
			$('#cloudy3').attr("src", "images/icons/icon-14.svg");
		}	
		
		if(currentDayCondition == 800){
			$('#cloudy3').attr("src", "images/icons/icon-2.svg");
		}
		
		if((currentDayCondition == 801) || (currentDayCondition == 802)){
			$('#cloudy3').attr("src", "images/icons/icon-3.svg");
		}
		
		if((currentDayCondition > 802) && (currentDayCondition < 805)){
			$('#cloudy3').attr("src", "images/icons/icon-5.svg");
		}
		
		///////////////////////////////////////////////////////////////////////////////
		
		
		//FOURTH DAY FORECAST (GENERATES ICON FOR DAY 4)
		currentDayCondition = data.data[4].weather.code
		
		if((currentDayCondition > 299) && (currentDayCondition < 523)){
			$('#cloudy4').attr("src", "images/icons/icon-9.svg");
		}
		
		if((currentDayCondition > 599) && (currentDayCondition < 611)){
			$('#cloudy4').attr("src", "images/icons/icon-14.svg");
		}	
		
		if(currentDayCondition == 800){
			$('#cloudy4').attr("src", "images/icons/icon-2.svg");
		}
		
		if((currentDayCondition == 801) || (currentDayCondition == 802)){
			$('#cloudy4').attr("src", "images/icons/icon-3.svg");
		}
		
		if((currentDayCondition > 802) && (currentDayCondition < 805)){
			$('#cloudy4').attr("src", "images/icons/icon-5.svg");
		}
		///////////////////////////////////////////////////////////////////
		
		
		//FIFTH DAY FORECAST (GENERATES ICON FOR DAY 5)
		currentDayCondition = data.data[5].weather.code
		
		if((currentDayCondition > 299) && (currentDayCondition < 523)){
			$('#cloudy5').attr("src", "images/icons/icon-9.svg");
		}
		
		if((currentDayCondition > 599) && (currentDayCondition < 611)){
			$('#cloudy5').attr("src", "images/icons/icon-14.svg");
		}	
		
		if(currentDayCondition == 800){
			$('#cloudy5').attr("src", "images/icons/icon-2.svg");
		}
		
		if((currentDayCondition == 801) || (currentDayCondition == 802)){
			$('#cloudy5').attr("src", "images/icons/icon-3.svg");
		}
		
		if((currentDayCondition > 802) && (currentDayCondition < 805)){
			$('#cloudy5').attr("src", "images/icons/icon-5.svg");
		}
		
		///////////////////////////////////////////////////////////////////
		
		
		//SIXTH DAY FORECAST (GENERATES ICON FOR DAY 6)
		currentDayCondition = data.data[6].weather.code
		
		if((currentDayCondition > 299) && (currentDayCondition < 523)){
			$('#cloudy6').attr("src", "images/icons/icon-9.svg");
		}
		
		if((currentDayCondition > 599) && (currentDayCondition < 611)){
			$('#cloudy6').attr("src", "images/icons/icon-14.svg");
		}	
		
		if(currentDayCondition == 800){
			$('#cloudy6').attr("src", "images/icons/icon-2.svg");
		}
		
		if((currentDayCondition == 801) || (currentDayCondition == 802)){
			$('#cloudy6').attr("src", "images/icons/icon-3.svg");
		}
		
		if((currentDayCondition > 802) && (currentDayCondition < 805)){
			$('#cloudy6').attr("src", "images/icons/icon-5.svg");
		}
		$("#cloudy1").show("slow");
		$("#cloudy2").show("slow");
		$("#cloudy3").show("slow");
		$("#cloudy4").show("slow");
		$("#cloudy5").show("slow");
		$("#cloudy6").show("slow");
		
		
});
	
	//$.getJSON('http://api.weatherbit.io/v2.0/forecast/daily?city=Baltimore,MD&days=5&units=I&key=b079da81f71d4ebba36ee3dc544a3931', function(data) {
	
	$.getJSON('http://api.weatherbit.io/v2.0/forecast/daily?city=Towson,MD&days=16&units=I&key=b079da81f71d4ebba36ee3dc544a3931', function(data) {	
   	 //data is the JSON string
		//alert(JSON.stringify(main));
		//JSON.stringify(orig) == JSON.stringify(current) var changed = false
		$("#tempz").fadeIn(1000).css("display","inline-block").html(Math.round(data.data[1].max_temp) + '<sup>o</sup>');
		//$("#tempz").fadeIn(1000).css("display","inline-block").html(Math.round(data.max_temp.datetime[1]) + '<sup>o</sup>'); // start at the 2nd temp max 0 for each aray//
		//$("#tempz1").fadeIn(1000).html(Math.round(data.list[3].main.temp_min) + '<sup>o</sup>');
		$("#tempz1").fadeIn(1000).html(Math.round(data.data[1].min_temp) + '<sup>o</sup>');
		$("#tempz2").fadeIn(1000).css("display","inline-block").html(Math.round(data.data[2].max_temp) + '<sup>o</sup>');
		$("#tempz3").fadeIn(1000).html(Math.round(data.data[2].min_temp) + '<sup>o</sup>');
		$("#tempz4").fadeIn(1000).css("display","inline-block").html(Math.round(data.data[3].max_temp) + '<sup>o</sup>');
		$("#tempz5").fadeIn(1000).html(Math.round(data.data[3].min_temp) + '<sup>o</sup>');
		$("#tempz6").fadeIn(1000).css("display","inline-block").html(Math.round(data.data[4].max_temp) + '<sup>o</sup>');
		$("#tempz7").fadeIn(1000).html(Math.round(data.data[4].min_temp) + '<sup>o</sup>');
		$("#tempz8").fadeIn(1000).html(Math.round(data.data[5].max_temp) + '<sup>o</sup>');
		$("#tempz9").fadeIn(1000).html(Math.round(data.data[5].min_temp) + '<sup>o</sup>');
		$("#tempz10").fadeIn(1000).html(Math.round(data.data[6].max_temp) + '<sup>o</sup>');
		$("#tempz11").fadeIn(1000).html(Math.round(data.data[6].min_temp) + '<sup>o</sup>');
		
});
	
		
	//alert(weather_data);
	//alert(weather_data.main.temp);
	//$("#temp1").text(weather_data.main.temp);


$(function(){

  var q = new Date();
  var weekday = new Array(7);
	weekday[5] = "Sunday";
	weekday[6] = "Monday";
	weekday[0] = "Tuesday";
	weekday[1] = "Wednesday";
	weekday[2] = "Thursday";
	weekday[3] = "Friday";
  	weekday[4] = "Saturday";
  	var c = weekday[q.getDay()];
	$("#day2").fadeIn(1000).text(c);
});

$(function(){

  var j = new Date();
  var weekday = new Array(7);
	weekday[4] = "Sunday";
	weekday[5] = "Monday";
	weekday[6] = "Tuesday";
	weekday[0] = "Wednesday";
	weekday[1] = "Thursday";
	weekday[2] = "Friday";
	weekday[3] = "Saturday";
  var z = weekday[j.getDay()];
	$("#day3").fadeIn(1000).text(z);
});

$(function(){
  var x = new Date();
  var weekday = new Array(7);
	weekday[3] = "Sunday";
	weekday[4] = "Monday";
	weekday[5] = "Tuesday";
	weekday[6] = "Wednesday";
	weekday[0] = "Thursday";
	weekday[1] = "Friday";
	weekday[2] = "Saturday";
  var w = weekday[x.getDay()];
	$("#day4").fadeIn(1000).text(w);
});

$(function(){
  var f = new Date();
  var weekday = new Array(7);
	weekday[2] = "Sunday";
	weekday[3] = "Monday";
	weekday[4] = "Tuesday";
	weekday[5] = "Wednesday";
	weekday[6] = "Thursday";
	weekday[0] = "Friday";
	weekday[1] = "Saturday";
  var i = weekday[f.getDay()];
	$("#day5").fadeIn(1000).text(i);
});

$(function(){
  var a = new Date();
  var weekday = new Array(7);
	weekday[1] = "Sunday";
	weekday[2] = "Monday";
	weekday[3] = "Tuesday";
	weekday[4] = "Wednesday";
	weekday[5] = "Thursday";
	weekday[6] = "Friday";
	weekday[0] = "Saturday";
  var s = weekday[a.getDay()];
	$("#day6").fadeIn(1000).text(s);
});  
	

