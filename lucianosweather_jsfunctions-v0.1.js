	$(window.onbeforeunload = function () {
  			window.scrollTo(0, 0);
			  showSnow(0);
		});	
	$("#table5").hide().fadeIn(1000);
	$("#table12").hide().fadeIn(1000);
	$("#table11").hide().fadeIn(1000);
	$("#table4").hide().fadeIn(1000);
	$("#table3").hide().slideDown(1000);
	$("#table2").hide().slideDown(1000);
	$("#table1").hide().slideDown(1000);
	$("#table").hide().slideDown(1000).css("display","table");
	$("#date").fadeIn(1000).css("display","inline-block");
	$(function(){
	var d = new Date();
	var dateObj = new Date();
	var day = dateObj.getDate();
	var weekday = new Array(7);
	weekday[6] = "Sunday";
	weekday[0] = "Monday";
	weekday[1] = "Tuesday";
	weekday[2] = "Wednesday";
	weekday[3] = "Thursday";
	weekday[4] = "Friday";
  	weekday[5] = "Saturday";
  	var n = weekday[d.getDay()];
	$("#day1").fadeIn(1000).text(n + ' ' + (day+1));
	});

	var makeItRain = function() {
		//clear out everything
		$('.rain').empty();
	  
		var increment = 0;
		var drops = "";
		var backDrops = "";
	  
		while (increment < 100) {
		  //couple random numbers to use for various randomizations
		  //random number between 98 and 1
		  var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
		  //random number between 5 and 2
		  var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
		  //increment
		  increment += randoFiver;
		  //add in a new raindrop with various randomizations to certain CSS properties
		  drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
		  backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
		}
	  
		$('.rain.front-row').append(drops);
		$('.rain.back-row').append(backDrops);
	  }
	  
	function set_Daily(data){

		$("#displayDegree").fadeIn(1000).css("display","inline-block").html(`${Math.round(data.current.temp_f)}<sup>o</sup>`);

		$(".degree > .highlowtemp").html(`<div class = "highlowtemp" style = "font-size:medium"> Feels like: ${Math.round(data.current.feelslike_f)}<sup>o</sup></div>`);

		$(".forecast-icon > .forecasttext").html(`<div class = "forecasttext" style = "font-size:medium"> Humidity: ${data.current.humidity}%<br /> Wind Speed: ${Math.round(data.current.wind_mph)} mph</div>`);
		
		if (Math.round(data.current.wind_mph) >= 10){
			makeItLeaf();
		}
		else{
			makeItNotLeaf();
		}

		var currentWeatherCondition = data.current.condition.code;
		$('.rain').empty();



		if (currentWeatherCondition == 1000){
			$('#cloudy').attr("src", "images/icons/icon-2.svg");
		}

		if ([1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1279, 1282].includes(currentWeatherCondition)) {
			$('#cloudy').attr("src", "images/icons/icon-14.svg");
			showSnow(1);
		}

		if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246].includes(currentWeatherCondition)) {
			$('#cloudy').attr("src", "images/icons/icon-9.svg");
			makeItRain();
		}
		

		if ([1087, 1273, 1276, 1279, 1282].includes(currentWeatherCondition)) {
			$('#cloudy').attr("src", "images/icons/icon-11.svg");
			makeItRain();
		}

		if ([1003].includes(currentWeatherCondition)) {
			$('#cloudy').attr("src", "images/icons/icon-3.svg");
		}


		if ([1006].includes(currentWeatherCondition)) {
			$('#cloudy').attr("src", "images/icons/icon-5.svg");
		}

		$('#cloudy').fadeIn(1000);

	}
	function get_Daily(){
		$.getJSON('https://api.weatherapi.com/v1/forecast.json?key=4cc8de0e01e84d058fc61338241210&q=Baltimore&days=5', function(data) {
			set_Daily(data);

		});

		$.getJSON('https://api.weatherapi.com/v1/forecast.json?key=4cc8de0e01e84d058fc61338241210&q=Baltimore&days=7', function(data) {
			set_Weekly(data);
		});
		
	}

	function clickHandler(data){
		document.getElementById("newLocation").textContent=data;
		var a = 'https://api.weatherapi.com/v1/current.json?key=4cc8de0e01e84d058fc61338241210&q=';
		var b = data;
		var position = 80;
		var output = [a.slice(0, position), b, a.slice(position)].join('');
		a = 'https://api.weatherapi.com/v1/forecast.json?key=4cc8de0e01e84d058fc61338241210&q=&days=7';
		b = data;
		position = 81;
		var output2 = [a.slice(0, position), b, a.slice(position)].join('');
		let element = document.getElementById("imageOfCity");
		element.classList.toggle('fade');
		if (data.includes("New York")){
			element.style.backgroundImage = "url('Test/nyc.jpg')";
		}
		else if (data.includes("Baltimore") ){
			element.style.backgroundImage = "url('Test/1477405396_Baltimore.jpg')";
		}
		else if (data.includes("Atlanta")) {
			element.style.backgroundImage = "url('Test/georgia.jpg')";
		}
		else if (data.includes("Austin")) {
			element.style.backgroundImage = "url('Test/austin.jpg')";
		}
		else if (data.includes("Boston")) {
			element.style.backgroundImage = "url('Test/boston.jpg')";
		}
		else if (data.includes("Chicago")) {
			element.style.backgroundImage = "url('Test/chicago.jpg')";
		}
		else if (data.includes("LA")) {
			element.style.backgroundImage = "url('Test/LA.jpg')";
		}
		else if (data.includes("Louisville")) {
			element.style.backgroundImage = "url('images/Louisville.jpg')";
		}
		else if (data.includes("Seattle")) {
			element.style.backgroundImage = "url('Test/seattle.jpg')";
		}
		else if (data.includes("Tampa")) {
			element.style.backgroundImage = "url('images/tampa.jpg')";
		}
		else if (data.includes("Temecula")) {
			element.style.backgroundImage = "url('Test/temecula.jpg')";
		}
		else if (data.includes("Toronto")) {
			element.style.backgroundImage = "url('Test/toronto.jpg')";
		}
		else if (data.includes("Towson")){
			element.style.backgroundImage = "url('Test/towson.jpg')";
		}
		else if (data.includes("Washington")){
			element.style.backgroundImage = "url('Test/DC.jpg')";
		}
		$.getJSON(output, function(data) {
			console.log(output);
			set_Daily(data);
		});
		$.getJSON(output2, function(data) {
			console.log(output2);
			set_Weekly(data);
		});
	}	
	
	get_Daily();
// function myCallback(data){
//     // Do some processing!
// }
	function set_Weekly(data){

		//FIRST DAY FORECAST (GENERATES ICON FOR DAY 1)
		var currentWeatherCondition = data.forecast.forecastday[1].day.condition.code;

		if (currentWeatherCondition == 1000){
			$('#cloudy1').attr("src", "images/icons/icon-2.svg");
		}
		else if ([1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1279, 1282].includes(currentWeatherCondition)) {
			$('#cloudy1').attr("src", "images/icons/icon-14.svg");
		}

		else if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246].includes(currentWeatherCondition)) {
			$('#cloudy1').attr("src", "images/icons/icon-9.svg");
		}
		

		else if ([1087, 1273, 1276, 1279, 1282].includes(currentWeatherCondition)) {
			$('#cloudy1').attr("src", "images/icons/icon-11.svg");
		}

		else if ([1003].includes(currentWeatherCondition)) {
			$('#cloudy1').attr("src", "images/icons/icon-3.svg");
		}


		else if ([1006].includes(currentWeatherCondition)) {
			$('#cloudy1').attr("src", "images/icons/icon-5.svg");
		}
	
		/////////////////////////////////////////////////////////////
		
		
		//SECOND DAY FORECAST (GENERATES ICON FOR DAY 2)
		var currentWeatherCondition = data.forecast.forecastday[2].day.condition.code;
		
		
		if (currentWeatherCondition == 1000){
			$('#cloudy2').attr("src", "images/icons/icon-2.svg");
		}
		else if ([1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1279, 1282].includes(currentWeatherCondition)) {
			$('#cloudy2').attr("src", "images/icons/icon-14.svg");
		}

		else if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246].includes(currentWeatherCondition)) {
			$('#cloudy2').attr("src", "images/icons/icon-9.svg");
		}
		

		else if ([1087, 1273, 1276, 1279, 1282].includes(currentWeatherCondition)) {
			$('#cloudy2').attr("src", "images/icons/icon-11.svg");
		}

		else if ([1003].includes(currentWeatherCondition)) {
			$('#cloudy2').attr("src", "images/icons/icon-3.svg");
		}


		else if ([1006].includes(currentWeatherCondition)) {
			$('#cloudy2').attr("src", "images/icons/icon-5.svg");
		}
		/////////////////////////////////////////////////////////////
		
		//THIRD DAY FORECAST (GENERATES ICON FOR DAY 3)
		var currentWeatherCondition = data.forecast.forecastday[3].day.condition.code;
		
		if (currentWeatherCondition == 1000){
			$('#cloudy3').attr("src", "images/icons/icon-2.svg");
		}
		else if ([1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1279, 1282].includes(currentWeatherCondition)) {
			$('#cloudy3').attr("src", "images/icons/icon-14.svg");
		}

		else if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246].includes(currentWeatherCondition)) {
			$('#cloudy3').attr("src", "images/icons/icon-9.svg");
		}
		

		else if ([1087, 1273, 1276, 1279, 1282].includes(currentWeatherCondition)) {
			$('#cloudy3').attr("src", "images/icons/icon-11.svg");
		}

		else if ([1003].includes(currentWeatherCondition)) {
			$('#cloudy3').attr("src", "images/icons/icon-3.svg");
		}


		else if ([1006].includes(currentWeatherCondition)) {
			$('#cloudy3').attr("src", "images/icons/icon-5.svg");
		}
		///////////////////////////////////////////////////////////////////////////////
		
		
		//FOURTH DAY FORECAST (GENERATES ICON FOR DAY 4)
		var currentWeatherCondition = data.forecast.forecastday[4].day.condition.code;
		
		if (currentWeatherCondition == 1000){
			$('#cloudy4').attr("src", "images/icons/icon-2.svg");
		}
		else if ([1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1279, 1282].includes(currentWeatherCondition)) {
			$('#cloudy4').attr("src", "images/icons/icon-14.svg");
		}

		else if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246].includes(currentWeatherCondition)) {
			$('#cloudy4').attr("src", "images/icons/icon-9.svg");
		}
		

		else if ([1087, 1273, 1276, 1279, 1282].includes(currentWeatherCondition)) {
			$('#cloudy4').attr("src", "images/icons/icon-11.svg");
		}

		else if ([1003].includes(currentWeatherCondition)) {
			$('#cloudy4').attr("src", "images/icons/icon-3.svg");
		}


		else if ([1006].includes(currentWeatherCondition)) {
			$('#cloudy4').attr("src", "images/icons/icon-5.svg");
		}
		///////////////////////////////////////////////////////////////////
		
		
		//FIFTH DAY FORECAST (GENERATES ICON FOR DAY 5)
		var currentWeatherCondition = data.forecast.forecastday[5].day.condition.code;
		if (currentWeatherCondition == 1000){
			$('#cloudy5').attr("src", "images/icons/icon-2.svg");
		}
		else if ([1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1279, 1282].includes(currentWeatherCondition)) {
			$('#cloudy5').attr("src", "images/icons/icon-14.svg");
		}

		else if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246].includes(currentWeatherCondition)) {
			$('#cloudy5').attr("src", "images/icons/icon-9.svg");
		}
		

		else if ([1087, 1273, 1276, 1279, 1282].includes(currentWeatherCondition)) {
			$('#cloudy5').attr("src", "images/icons/icon-11.svg");
		}

		else if ([1003].includes(currentWeatherCondition)) {
			$('#cloudy5').attr("src", "images/icons/icon-3.svg");
		}


		else if ([1006].includes(currentWeatherCondition)) {
			$('#cloudy5').attr("src", "images/icons/icon-5.svg");
		}
		
		///////////////////////////////////////////////////////////////////
		
		
		//SIXTH DAY FORECAST (GENERATES ICON FOR DAY 6)
		var currentWeatherCondition = data.forecast.forecastday[6].day.condition.code;
		
		if (currentWeatherCondition == 1000){
			$('#cloudy6').attr("src", "images/icons/icon-2.svg");
		}
		else if ([1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1279, 1282].includes(currentWeatherCondition)) {
			$('#cloudy6').attr("src", "images/icons/icon-14.svg");
		}

		else if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246].includes(currentWeatherCondition)) {
			$('#cloudy6').attr("src", "images/icons/icon-9.svg");
		}
		

		else if ([1087, 1273, 1276, 1279, 1282].includes(currentWeatherCondition)) {
			$('#cloudy6').attr("src", "images/icons/icon-11.svg");
		}

		else if ([1003].includes(currentWeatherCondition)) {
			$('#cloudy6').attr("src", "images/icons/icon-3.svg");
		}


		else if ([1006].includes(currentWeatherCondition)) {
			$('#cloudy6').attr("src", "images/icons/icon-5.svg");
		}

		$("#cloudy1").show("slow");
		$("#cloudy2").show("slow");
		$("#cloudy3").show("slow");
		$("#cloudy4").show("slow");
		$("#cloudy5").show("slow");
		$("#cloudy6").show("slow");
				//alert(JSON.stringify(main));
		//JSON.stringify(orig) == JSON.stringify(current) var changed = false
		$("#tempz").fadeIn(1000).css("display","inline-block").html(Math.round(data.forecast.forecastday[1].day.maxtemp_f) + '<sup>o</sup>');
		$("#tempz1").fadeIn(1000).html(Math.round(data.forecast.forecastday[1].day.mintemp_f) + '<sup>o</sup>');
		$("#tempz2").fadeIn(1000).css("display","inline-block").html(Math.round(data.forecast.forecastday[2].day.maxtemp_f) + '<sup>o</sup>');
		$("#tempz3").fadeIn(1000).html(Math.round(data.forecast.forecastday[2].day.mintemp_f) + '<sup>o</sup>');
		$("#tempz4").fadeIn(1000).css("display","inline-block").html(Math.round(data.forecast.forecastday[3].day.maxtemp_f) + '<sup>o</sup>');
		$("#tempz5").fadeIn(1000).html(Math.round(data.forecast.forecastday[3].day.mintemp_f) + '<sup>o</sup>');
		$("#tempz6").fadeIn(1000).css("display","inline-block").html(Math.round(data.forecast.forecastday[4].day.maxtemp_f) + '<sup>o</sup>');
		$("#tempz7").fadeIn(1000).html(Math.round(data.forecast.forecastday[4].day.mintemp_f) + '<sup>o</sup>');
		$("#tempz8").fadeIn(1000).html(Math.round(data.forecast.forecastday[5].day.maxtemp_f) + '<sup>o</sup>');
		$("#tempz9").fadeIn(1000).html(Math.round(data.forecast.forecastday[5].day.mintemp_f) + '<sup>o</sup>');
		$("#tempz10").fadeIn(1000).html(Math.round(data.forecast.forecastday[6].day.maxtemp_f) + '<sup>o</sup>');
		$("#tempz11").fadeIn(1000).html(Math.round(data.forecast.forecastday[6].day.mintemp_f) + '<sup>o</sup>');
	}	
	
$(function(){

  var q = new Date();
  var weekday = new Array(7);
  var dateObj = new Date();
  var day = dateObj.getDate();
	weekday[5] = "Sunday";
	weekday[6] = "Monday";
	weekday[0] = "Tuesday";
	weekday[1] = "Wednesday";
	weekday[2] = "Thursday";
	weekday[3] = "Friday";
  	weekday[4] = "Saturday";
  	var c = weekday[q.getDay()];
	$("#day2").fadeIn(1000).text(c + ' ' + (day+2));
});

$(function(){

  var j = new Date();
  var weekday = new Array(7);
  var dateObj = new Date();
  var day = dateObj.getDate();
	weekday[4] = "Sunday";
	weekday[5] = "Monday";
	weekday[6] = "Tuesday";
	weekday[0] = "Wednesday";
	weekday[1] = "Thursday";
	weekday[2] = "Friday";
	weekday[3] = "Saturday";
  var z = weekday[j.getDay()];
	$("#day3").fadeIn(1000).text(z + ' ' + (day+3));
});

$(function(){
  var x = new Date();
  var weekday = new Array(7);
  var dateObj = new Date();
  var day = dateObj.getDate();
	weekday[3] = "Sunday";
	weekday[4] = "Monday";
	weekday[5] = "Tuesday";
	weekday[6] = "Wednesday";
	weekday[0] = "Thursday";
	weekday[1] = "Friday";
	weekday[2] = "Saturday";
  var w = weekday[x.getDay()];
	$("#day4").fadeIn(1000).text(w + ' ' + (day+4));
});

$(function(){
  var f = new Date();
  var weekday = new Array(7);
  var dateObj = new Date();
  var day = dateObj.getDate();
	weekday[2] = "Sunday";
	weekday[3] = "Monday";
	weekday[4] = "Tuesday";
	weekday[5] = "Wednesday";
	weekday[6] = "Thursday";
	weekday[0] = "Friday";
	weekday[1] = "Saturday";
  var i = weekday[f.getDay()];
	$("#day5").fadeIn(1000).text(i + ' ' + (day+5));
});

$(function(){
  var a = new Date();
  var weekday = new Array(7);
  var dateObj = new Date();
  var day = dateObj.getDate();
	weekday[1] = "Sunday";
	weekday[2] = "Monday";
	weekday[3] = "Tuesday";
	weekday[4] = "Wednesday";
	weekday[5] = "Thursday";
	weekday[6] = "Friday";
	weekday[0] = "Saturday";
  var s = weekday[a.getDay()];
	$("#day6").fadeIn(1000).text(s + ' ' + (day+6));
});  
	
// Simply choose any element and apply the .disableSelection(); method to disable text selection.

$(document).ready(function(){

   $('.num').disableSelection();
   $('.location').disableSelection();
   $('.highlowtemp').disableSelection();
   $('.forecasttext').disableSelection();
   $('.cloudy').disableSelection();
   $('.degree cloudy1').disableSelection();
});


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
  }
// This jQuery Plugin will disable text selection for Android and iOS devices.
// Stackoverflow Answer: http://stackoverflow.com/a/2723677/1195891
$.fn.extend({
    disableSelection: function() {
        this.each(function() {
            this.onselectstart = function() {
                return false;
            };
            this.unselectable = "on";
            $(this).css('-moz-user-select', 'none');
            $(this).css('-webkit-user-select', 'none');
        });
    }
});

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

var makeItRain = function() {
	//clear out everything
	$('.rain').empty();
  
	var increment = 0;
	var drops = "";
	var backDrops = "";
  
	while (increment < 100) {
	  //couple random numbers to use for various randomizations
	  //random number between 98 and 1
	  var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
	  //random number between 5 and 2
	  var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
	  //increment
	  increment += randoFiver;
	  //add in a new raindrop with various randomizations to certain CSS properties
	  drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
	  backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
	}
  
	$('.rain.front-row').append(drops);
	$('.rain.back-row').append(backDrops);
  }	

  var makeItLeaf = function(){
	
	const secondsToResetAnimation = 1000;
	const element = document.getElementById("leafToggle");

	setTimeout( function(){
	const clonedElement = element.cloneNode(true);
	element.parentNode.replaceChild(clonedElement, element);  
	}, secondsToResetAnimation );

	setTimeout( function(){
		let clonedElement = document.getElementById("leafToggle");
		clonedElement.style.display = "block";
	}, 1001)

  }
  var makeItNotLeaf = function(){
	let element = document.getElementById("leafToggle");
	element.style.display = "none";
  }
  

