// JS
var body = document.body;
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var submitButton = document.querySelector('.btn-update-button');

var modalClose = modal.querySelector('.btn-close-modal');


var toggleModal = function() {
	console.log("click");


	body.classList.toggle('modal-open');
	modal.classList.toggle('hide');
	overlay.classList.toggle('hide');

	console.log(body.classList);
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