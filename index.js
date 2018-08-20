var city;
var temp;
var tempre;
var tempC;
var tempF;
var country;
var icon;
var description;
var lat;
var lng;
var tempre;
var url;
var iconUrl;
var iconId;


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert("Your location is not supported by this browser.");
    }
}

getLocation()
function showPosition(position) {
	lat = (position.coords.latitude).toFixed(2);
	lng = (position.coords.longitude).toFixed(2);
	var key = "&appid=b578a4df13590976fe460f18d875b6f7"
	url ="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&"+ "lon="+lng+key;
	console.log(url);
	console.log(lat); 
	console.log(lng);
 }


 $(document).ready(function(){
    $("#btn-left").click(function(json){
        $.get(url, function(json){
		console.log(json)
		temp = json.main.temp;
		tempC = (temp - 273.15).toFixed(2);	
		tempF = (temp * (9/5) - 459.67).toFixed(2);
		description = json.weather[0].description;
		city = json.name;
		country = json.sys.country;

		iconID = json.weather[0].icon;
		console.log(iconID);
		iconUrl= "http://openweathermap.org/img/w/"+iconID+".png";

		var img = document.createElement("img");
		img.src = iconUrl;
		var src = document.getElementById("pic-output");
		src.appendChild(img);
		document.getElementById("weather-output").innerHTML =  description
		+ " in " + city + ", " + country;
		document.getElementById("temp-output").innerHTML = tempC+ "°C";
		myTemp()
				
        });
    });
});

$(document).ready(function(){
	$("#btn-right").click(function myTemp(){
			var x = document.getElementById("btn-right");
			var y = document.getElementById("temp-output");
			if (document.getElementById("btn-right").innerHTML === "°C") {
				tempre = tempC +"°C";
				document.getElementById("temp-output").innerHTML= tempre;
				console.log(tempC +"°C");
				document.getElementById("btn-right").innerHTML = "°F";
			} else {
				tempre = tempF +"°F";
				document.getElementById("temp-output").innerHTML= tempre;
				console.log(tempF +"°F");
				document.getElementById("btn-right").innerHTML = "°C";
				
			}
		
	})
});

