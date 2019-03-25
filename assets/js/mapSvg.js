var mapContainer = document.getElementById('mapContainer');
var allNav = document.getElementsByClassName('linkCroisiere')

for (var i = 0; i < allNav.length; i++) {
	allNav[i].addEventListener('click', function(e) {
		e.preventDefault();
	}, false);
}

function toggle(elt) {
	var number = elt.getAttribute('data-ref');
	var journey = document.getElementsByClassName('journey');

	for (var i = 0; i < journey.length; i++) {
		if (elt.getAttribute('data-toggle') == '0' && i+1 == number) {
			journey[i].style.visibility = 'visible';
			journey[i].style.opacity = '1';
			elt.className += ' active';
			elt.setAttribute('data-toggle', '1');
		}
		else if (allNav[i].getAttribute('data-toggle') == '1') {
			allNav[i].className = 'valign linkCroisiere';
			journey[i].style.opacity = '0';
			journey[i].style.visibility = 'hidden';
			allNav[i].setAttribute('data-toggle', '0');
		}
	}

}
