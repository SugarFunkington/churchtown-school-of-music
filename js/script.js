// function initMap() {
//     var mapCanvas = document.getElementById('map');

//     var myLatLng = {lat: 53.290593, lng: -6.245671};

//     var map = new google.maps.Map(mapCanvas, {
//     	center: myLatLng,
//     	zoom:16
//     });

//     var marker = new google.maps.Marker({
//     	position: myLatLng,
//     	map: map,
//     	title: "Churchtown School of Music"
//     });
// }

// Code block swaps the calendar to a mobile version when screen size is below a certain amount.
var mobileCalendarActive = false;

function checkCalendarType() {
	if ($(window).width() < 610) {
		if (mobileCalendarActive === false) {
			mobileCalendarActive = true;
			buildSmallCalendar();
		}
	} else if ($(window).width() > 610) {
		if (mobileCalendarActive === true) {
			mobileCalendarActive = false;
			buildBigCalendar();
		}
	}
}

function buildSmallCalendar() {
	// Section to replace the full week (1 2 3 4 5 6 7) with an abbreviated version (1 - 7)
	var elements = document.querySelectorAll('.calendar-flex-row');

	for (var i=0; i < elements.length; i++) {
		var html;
		html = $(elements[i]).children().first()[0].outerHTML;
		html += '<div>-</div>';
		html += $(elements[i]).children().last()[0].outerHTML;

		$(elements[i]).html(html);
	}


}

function buildBigCalendar() {
	console.log('bigCalendar');
}

$(document).ready(function() {
	checkCalendarType();
	$(window).resize(function() {
		checkCalendarType();
	});
});