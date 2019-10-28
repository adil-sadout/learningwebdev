var backdrop = document.querySelector('.main-backdrop');
var modal = document.querySelector('.main-modal');
var selectPlanButtons = document.querySelectorAll('.main-section__product .product-button');
var modalNoButton = document.querySelector('.main-modal__action--negative')
console.dir(selectPlanButtons);
console.dir(modal);

for (var i = 0; i < selectPlanButtons.length; i++) {
	selectPlanButtons[i].addEventListener('click', function() {
		modal.style.display = 'block';
		backdrop.style.display = 'block';
	})
}

modalNoButton.addEventListener('click', function(){
	modal.style.display = 'none';
	backdrop.style.display = 'none';
})

//Trying a to make the modal's 'no' button close the modal itself and remove the backdrop


