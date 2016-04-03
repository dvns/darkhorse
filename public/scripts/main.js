'use strict';

var aboutNav = function aboutNav() {
	var currentWidth = window.innerWidth;

	if (currentWidth >= 480) {
		$('.aboutNav ul').each(function () {
			// For each set of tabs, keep track of which tab is active and its associated content
			var active,
			    content,
			    links = $(this).find('a');

			// If the location.hash matches one of the links, set that as the active tab.
			// If no match is found, use the first link as the initial active tab.
			active = $(links.filter('[href="' + location.hash + '"]')[0] || links[0]);
			active.addClass('active');

			console.log(active);

			content = $(active[0].hash);

			// Hide the remaining content
			links.not(active).each(function () {
				$(this.hash).hide();
			});

			// Bind the click event handler
			$(this).on('click', 'a', function (e) {
				e.preventDefault();

				// Make other tabs inactive
				active.removeClass('active');
				content.hide();

				// Update variables with the new link and content
				active = $(this);
				content = $(this.hash);

				// Make the tab active.
				active.addClass('active');
				content.show();
			});
		}); // End of about tabs function
	} else {
			$('section').show();
		}
};

var initMap;
var map;

$(function () {

	initMap = function initMap() {
		// This is where the new map is created
		map = new google.maps.Map(document.getElementById('mapContainer'), {
			//You can set a center
			center: { lat: 43.656, lng: -79.4 },
			//0-18
			zoom: 13,
			styles: [{ "featureType": "landscape", "stylers": [{ "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" }] }, { "featureType": "poi", "stylers": [{ "saturation": -100 }, { "lightness": 51 }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "road.arterial", "stylers": [{ "saturation": -100 }, { "lightness": 30 }, { "visibility": "on" }] }, { "featureType": "road.local", "stylers": [{ "saturation": -100 }, { "lightness": 40 }, { "visibility": "on" }] }, { "featureType": "transit", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "administrative.province", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "lightness": -25 }, { "saturation": -100 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "hue": "#ffff00" }, { "lightness": -25 }, { "saturation": -97 }] }]
		});
	};

	// If the width is greater than 480 px when the page initially loads, enable about navigation
	aboutNav();

	$(window).on('resize', function () {
		// If the window is resized to a width less than 480px, show all sections
		aboutNav();
	});
});
//# sourceMappingURL=main.js.map
