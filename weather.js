"use strict"

const url = "http://api.openweathermap.org/data/2.5/weather?q=pontiac&appid=ad0ad46e12935e5d07614976f2b10ef1"

$.ajax ({
	url: url,
	success: function (result){
		console.log(result);
	}
})