var sp = document.getElementById("spaceText");
var map = document.getElementById("map");
var glat,glon;

var getLocation = function(){
   
    var lati,lon;
	if(navigator.geolocation){
        
		navigator.geolocation.getCurrentPosition(function showPosition(position){
            
				lati = position.coords.latitude;
				lon = position.coords.longitude
               
                glat = lati;
                glon=lon;
            
                
        });
        
        return true;
    }
    else{
		
	    return false;       
    }
   
}
 
var printLocation = function(){
    
    var bool = getLocation();
    
    if(bool===true && typeof glat !=="undefined" && typeof glon !=="undefined"){
        
        var check=document.getElementById("spaceText");
        if(typeof check !=="undefined" && check!==null){
            
            sp.innerHTML = " <h4 style=' font-size: 1.5em; margin-bottom: 1em;'>&nbsp;&nbsp;&emsp;Latitude = " + glat + "<br> &nbsp;&nbsp;&emsp;Longitude = " +glon+"</h4>";
	        map.innerHTML = "<webview id='gmaps' style='margin-left:10px; width:99%; height:70%;' src=http://maps.google.com/maps?z=1&t=m&q=loc:"+glat+"+"+glon+"></webview>";
        }
    }
    else if(bool===false){
        sp.innerHTML = " Location cannot be found";
    }
    else{
		
        setTimeout(printLocation , 250);
	}
}
    


var logLocation = function(){
    
    var bool = getLocation();
    if(bool===true && typeof glat !=="undefined" && typeof glon !=="undefined"){
        
        console.log("\nLatitude: "+glat+", Longtitude: "+glon+";" );
    }
    else if(bool===false){
        
        console.log("\n Location cannot be found");
    }
    else{
		
        setTimeout(logLocation , 250);
	}
}
    
window.onload = printLocation();   
    
    
    
    
    
    
