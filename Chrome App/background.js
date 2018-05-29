

chrome.app.runtime.onLaunched.addListener(function() {
    chrome.alarms.create("logLocation", {delayInMinutes : 0.09, periodInMinutes : 0.09} );
	chrome.app.window.create("disploc.html",{ 
        'id':'displayloc',
		'outerBounds': { 'width': 825, 'height': 650 }
		});

	
});



chrome.alarms.onAlarm.addListener(function(alarm) {
   logLocation();
});

