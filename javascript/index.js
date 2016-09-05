// JS
var body = document.body;
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var submitButton = document.querySelector('.btn-update-button');
var toggleSlide = document.querySelectorAll('.toggle-slide');

var modalClose = modal.querySelector('.btn-close-modal');

var slide = function(event) {
	var ct = event.currentTarget;
	var column = ct.parentNode.parentNode.parentNode;
	var row = column.parentNode;

	ct.classList.toggle('active-slide');
	column.classList.toggle('active');
	row.classList.toggle('start-slide');
}


var toggleModal = function() {
	body.classList.toggle('modal-open');
	modal.classList.toggle('hide');
	overlay.classList.toggle('hide');
}

// Close modal with esc key

document.onkeydown = function(evt) {
	evt = evt || window.event;
	var isEscape = false;

	if ("key" in evt) {
	   	isEscape = evt.key == "Escape";
	}
	else {
		isEscape = evt.keyCode == 27;
	}

	if (isEscape && body.classList.contains('modal-open')) {
		toggleModal();
	}
};

submitButton.addEventListener('click', toggleModal);
modalClose.addEventListener('click', toggleModal);

for (var i = 0; i < toggleSlide.length; i++) {
	toggleSlide[i].addEventListener('click', slide, false);
}