"use strict"

const url = "https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=ad0ad46e12935e5d07614976f2b10ef1"

$.ajax ({
	url: url,
	success: function (result){
		console.log(result);
		console.log(result.name)

		$("#location").text(result.name);
	}
})