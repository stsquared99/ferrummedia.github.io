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

submitButton.addEventListener('click', toggleModal);
modalClose.addEventListener('click', toggleModal);