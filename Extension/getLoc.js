var sp = document.getElementById("spaceText");
	var lati,lon;
	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(function showPosition(position)
			{
				lati = position.coords.latitude;
				lon = position.coords.longitude;
				sp.innerHTML = " <h4>&emsp;Latitude = " + lati + "<br>&emsp;Longitude = " +lon+"</h4>";
				
			}
			);
	}	
	else
	{
		sp.innerHTML = " Location cannot be found";
	}
	

function initMap()
{
	if(typeof lati !== "undefined" && typeof lon !== "undefined")
	{
	console.log(lati + "latitude");
	console.log(lon + "longitude");
	
	var userloc = { lat : lati, lng : lon};
	
	var map = new google.maps.Map( document.getElementById("map") , {zoom: 4 , center:userloc});
	var marker = new google.maps.Marker({ position:userloc, map:map});
	}
	else
	{
		setTimeout(initMap , 250);
	}
}


