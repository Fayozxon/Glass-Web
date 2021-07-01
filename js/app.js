/* Section Title */

var sectionTitle = document.getElementById('sectionTitle');


var home = document.getElementById('home');
var about = document.getElementById('about');
var services = document.getElementById('services');
var testimonials = document.getElementById('testimonials');
var contact = document.getElementById('contact');
var contactAnimSec = document.querySelector('.contact-animation-sec');

home.addEventListener('mouseover', function() {
	sectionTitle.innerHTML = 'Home';
	sectionTitle.style.opacity = 1;
});
about.addEventListener('mouseover', function() {
	sectionTitle.innerHTML = 'About';
	sectionTitle.style.opacity = 1;
});

services.addEventListener('mouseover', function() {
	sectionTitle.innerHTML = 'Services';
	sectionTitle.style.opacity = 1;
});

testimonials.addEventListener('mouseover', function() {
	sectionTitle.innerHTML = 'Testimonials';
	sectionTitle.style.opacity = 1;
});

contact.addEventListener('mouseover', function() {
	sectionTitle.style.cssText = 'opacity: 0; pointer-events: none;'
});


/* Header */

var navToggle = document.getElementById('navToggle');
var nav = document.getElementById('nav');

navToggle.addEventListener('click', function() {
	navToggle.classList.toggle('active');
	nav.classList.toggle('responsive');
	nav.classList.toggle('glass');
});



/* Contact Section Animation */

window.addEventListener('click', function(e) {
	var clickEl = document.createElement('div');
	clickEl.classList.add('click-el');
	contactAnimSec.appendChild(clickEl);

	clickEl.style.top = e.y + 'px';
	clickEl.style.left = e.x + 'px';
});

setInterval(function() {
	if (contactAnimSec.firstElementChild) {
		contactAnimSec.firstElementChild.remove();
	};
}, 2000);