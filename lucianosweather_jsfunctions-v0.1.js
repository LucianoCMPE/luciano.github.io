	$(window.onbeforeunload = function () {
  			window.scrollTo(0, 0);
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

	function set_Daily(data){
		$("#displayDegree").fadeIn(1000).css("display","inline-block").html(`${Math.round(data.data[0].temp)}<sup>o</sup>`);

		$(".degree > .highlowtemp").html(`<div class = "highlowtemp" style = "font-size:medium"> Feels like: ${Math.round(data.data[0].app_temp)}<sup>o</sup></div>`);
		$(".forecast-icon > .forecasttext").html(`<div class = "forecasttext" style = "font-size:medium"> Humidity: ${data.data[0].rh}%<br /> Wind Speed: ${Math.round(data.data[0].wind_spd)} mph</div>`);

		var currentWeatherCondition = data.data[0].weather.code;

		if((currentWeatherCondition > 299) && (currentWeatherCondition < 523)){
			$('#cloudy').attr("src", "images/icons/icon-9.svg");
		}

		if((currentWeatherCondition > 599) && (currentWeatherCondition < 611)){
			$('#cloudy').attr("src", "images/icons/icon-14.svg");
		}	

		if(currentWeatherCondition == 800){
			$('#cloudy').attr("src", "images/icons/icon-2.svg");
		}

		if((currentWeatherCondition == 801) || (currentWeatherCondition == 802)){
			$('#cloudy').attr("src", "images/icons/icon-3.svg");
		}

		if((currentWeatherCondition > 802) && (currentWeatherCondition < 805)){
			$('#cloudy').attr("src", "images/icons/icon-5.svg");
		}
		$('#cloudy').fadeIn(1000);

	}

	function get_Daily(){
		$.getJSON('https://api.weatherbit.io/v2.0/current?city=Towson,MD&days=16&units=I&key=76a6ac25a4d64a89ad678c4746842362', function(data) {
			set_Daily(data);
		});
		$.getJSON('https://api.weatherbit.io/v2.0/forecast/daily?city=Towson,MD&days=16&units=I&key=76a6ac25a4d64a89ad678c4746842362', function(data) {
			set_Weekly(data);
		});
		
	}

	function clickHandler(data){
		document.getElementById("newLocation").textContent=data;
		var a = 'https://api.weatherbit.io/v2.0/current?city=&days=16&units=I&key=76a6ac25a4d64a89ad678c4746842362';
		var b = data;
		var position = 44;
		var output = [a.slice(0, position), b, a.slice(position)].join('');
		a = 'https://api.weatherbit.io/v2.0/forecast/daily?city=&days=16&units=I&key=76a6ac25a4d64a89ad678c4746842362';
		b = data;
		position = 51;
		var output2 = [a.slice(0, position), b, a.slice(position)].join('');
		let element = document.getElementById("imageOfCity");
		element.classList.toggle('fade');
		if (data.includes("NewYork")){
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
		else if (data.includes("LosAngeles")) {
			element.style.backgroundImage = "url('Test/LA.jpg')";
		}
		else if (data.includes("Seattle")) {
			element.style.backgroundImage = "url('Test/seattle.jpg')";
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
	// $.getJSON('https://api.weatherbit.io/v2.0/forecast/daily?city=Towson,MD&days=16&units=I&key=76a6ac25a4d64a89ad678c4746842362', function(data) {		
		//FIRST DAY FORECAST (GENERATES ICON FOR DAY 1)
		var currentDayCondition = data.data[1].weather.code
		
		if((currentDayCondition > 299) && (currentDayCondition < 523)){
			$('#cloudy1').attr("src", "images/icons/icon-9.svg");
		}

		else if(currentDayCondition == 201){
			$('#cloudy1').attr("src", "images/icons/icon-11.svg");
		}

		else if((currentDayCondition > 599) && (currentDayCondition < 611)){
			$('#cloudy1').attr("src", "images/icons/icon-14.svg");
		}	
		
		else if(currentDayCondition == 800){
			$('#cloudy1').attr("src", "images/icons/icon-2.svg");
		}
		
		else if((currentDayCondition == 801) || (currentDayCondition == 802)){
			$('#cloudy1').attr("src", "images/icons/icon-3.svg");
		}
		
		else if ((currentDayCondition > 802) && (currentDayCondition < 805)){
			$('#cloudy1').attr("src", "images/icons/icon-5.svg");
		}
		/////////////////////////////////////////////////////////////
		
		
		//SECOND DAY FORECAST (GENERATES ICON FOR DAY 2)
		currentDayCondition = data.data[2].weather.code
		
		if((currentDayCondition > 299) && (currentDayCondition < 523)){
			$('#cloudy2').attr("src", "images/icons/icon-9.svg");
		}

		else if(currentDayCondition == 201){
			$('#cloudy2').attr("src", "images/icons/icon-11.svg");
		}
		
		else if((currentDayCondition > 599) && (currentDayCondition < 611)){
			$('#cloudy2').attr("src", "images/icons/icon-14.svg");
		}	
		
		else if(currentDayCondition == 800){
			$('#cloudy2').attr("src", "images/icons/icon-2.svg");
		}
		
		else if((currentDayCondition == 801) || (currentDayCondition == 802)){
			$('#cloudy2').attr("src", "images/icons/icon-3.svg");
		}
		
		else if ((currentDayCondition > 802) && (currentDayCondition < 805)){
			$('#cloudy2').attr("src", "images/icons/icon-5.svg");
		}
	
		/////////////////////////////////////////////////////////////
		
		//THIRD DAY FORECAST (GENERATES ICON FOR DAY 3)
		currentDayCondition = data.data[3].weather.code
		
		if((currentDayCondition > 299) && (currentDayCondition < 523)){
			$('#cloudy3').attr("src", "images/icons/icon-9.svg");
		}

		else if(currentDayCondition == 201){
			$('#cloudy3').attr("src", "images/icons/icon-11.svg");
		}
		
		else if((currentDayCondition > 599) && (currentDayCondition < 611)){
			$('#cloudy3').attr("src", "images/icons/icon-14.svg");
		}	
		
		else if (currentDayCondition == 800){
			$('#cloudy3').attr("src", "images/icons/icon-2.svg");
		}
		
		else if((currentDayCondition == 801) || (currentDayCondition == 802)){
			$('#cloudy3').attr("src", "images/icons/icon-3.svg");
		}
		
		else if ((currentDayCondition > 802) && (currentDayCondition < 805)){
			$('#cloudy3').attr("src", "images/icons/icon-5.svg");
		}
		
		///////////////////////////////////////////////////////////////////////////////
		
		
		//FOURTH DAY FORECAST (GENERATES ICON FOR DAY 4)
		currentDayCondition = data.data[4].weather.code
		
		if((currentDayCondition > 299) && (currentDayCondition < 523)){
			$('#cloudy4').attr("src", "images/icons/icon-9.svg");
		}

		else if(currentDayCondition == 201){
			$('#cloudy4').attr("src", "images/icons/icon-11.svg");
		}
		
		else if((currentDayCondition > 599) && (currentDayCondition < 611)){
			$('#cloudy4').attr("src", "images/icons/icon-14.svg");
		}	
		
		else if(currentDayCondition == 800){
			$('#cloudy4').attr("src", "images/icons/icon-2.svg");
		}
		
		else if((currentDayCondition == 801) || (currentDayCondition == 802)){
			$('#cloudy4').attr("src", "images/icons/icon-3.svg");
		}
		
		else if ((currentDayCondition > 802) && (currentDayCondition < 805)){
			$('#cloudy4').attr("src", "images/icons/icon-5.svg");
		}
		///////////////////////////////////////////////////////////////////
		
		
		//FIFTH DAY FORECAST (GENERATES ICON FOR DAY 5)
		currentDayCondition = data.data[5].weather.code
		
		if((currentDayCondition > 299) && (currentDayCondition < 523)){
			$('#cloudy5').attr("src", "images/icons/icon-9.svg");
		}

		else if(currentDayCondition == 201){
			$('#cloudy5').attr("src", "images/icons/icon-11.svg");
		}
		
		else if((currentDayCondition > 599) && (currentDayCondition < 611)){
			$('#cloudy5').attr("src", "images/icons/icon-14.svg");
		}	
		
		else if(currentDayCondition == 800){
			$('#cloudy5').attr("src", "images/icons/icon-2.svg");
		}
		
		else if((currentDayCondition == 801) || (currentDayCondition == 802)){
			$('#cloudy5').attr("src", "images/icons/icon-3.svg");
		}
		
		else if ((currentDayCondition > 802) && (currentDayCondition < 805)){
			$('#cloudy5').attr("src", "images/icons/icon-5.svg");
		}
		
		///////////////////////////////////////////////////////////////////
		
		
		//SIXTH DAY FORECAST (GENERATES ICON FOR DAY 6)
		currentDayCondition = data.data[6].weather.code
		
		if((currentDayCondition > 299) && (currentDayCondition < 523)){
			$('#cloudy6').attr("src", "images/icons/icon-9.svg");
		}

		else if(currentDayCondition == 201){
			$('#cloudy6').attr("src", "images/icons/icon-11.svg");
		}
		
		else if((currentDayCondition > 599) && (currentDayCondition < 611)){
			$('#cloudy6').attr("src", "images/icons/icon-14.svg");
		}	
		
		else if(currentDayCondition == 800){
			$('#cloudy6').attr("src", "images/icons/icon-2.svg");
		}
		
		else if((currentDayCondition == 801) || (currentDayCondition == 802)){
			$('#cloudy6').attr("src", "images/icons/icon-3.svg");
		}
		
		else if ((currentDayCondition > 802) && (currentDayCondition < 805)){
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
	}	
	
	//$.getJSON('http://api.weatherbit.io/v2.0/forecast/daily?city=Baltimore,MD&days=5&units=I&key=b079da81f71d4ebba36ee3dc544a3931', function(data) {
	
// 	$.getJSON('http://api.weatherbit.io/v2.0/forecast/daily?city=Towson,MD&days=16&units=I&key=b079da81f71d4ebba36ee3dc544a3931', function(data) {	
//    	 //data is the JSON string
// 		//alert(JSON.stringify(main));
// 		//JSON.stringify(orig) == JSON.stringify(current) var changed = false
// 		$("#tempz").fadeIn(1000).css("display","inline-block").html(Math.round(data.data[1].max_temp) + '<sup>o</sup>');
// 		//$("#tempz").fadeIn(1000).css("display","inline-block").html(Math.round(data.max_temp.datetime[1]) + '<sup>o</sup>'); // start at the 2nd temp max 0 for each aray//
// 		//$("#tempz1").fadeIn(1000).html(Math.round(data.list[3].main.temp_min) + '<sup>o</sup>');
// 		$("#tempz1").fadeIn(1000).html(Math.round(data.data[1].min_temp) + '<sup>o</sup>');
// 		$("#tempz2").fadeIn(1000).css("display","inline-block").html(Math.round(data.data[2].max_temp) + '<sup>o</sup>');
// 		$("#tempz3").fadeIn(1000).html(Math.round(data.data[2].min_temp) + '<sup>o</sup>');
// 		$("#tempz4").fadeIn(1000).css("display","inline-block").html(Math.round(data.data[3].max_temp) + '<sup>o</sup>');
// 		$("#tempz5").fadeIn(1000).html(Math.round(data.data[3].min_temp) + '<sup>o</sup>');
// 		$("#tempz6").fadeIn(1000).css("display","inline-block").html(Math.round(data.data[4].max_temp) + '<sup>o</sup>');
// 		$("#tempz7").fadeIn(1000).html(Math.round(data.data[4].min_temp) + '<sup>o</sup>');
// 		$("#tempz8").fadeIn(1000).html(Math.round(data.data[5].max_temp) + '<sup>o</sup>');
// 		$("#tempz9").fadeIn(1000).html(Math.round(data.data[5].min_temp) + '<sup>o</sup>');
// 		$("#tempz10").fadeIn(1000).html(Math.round(data.data[6].max_temp) + '<sup>o</sup>');
// 		$("#tempz11").fadeIn(1000).html(Math.round(data.data[6].min_temp) + '<sup>o</sup>');
		
// });
	
		
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