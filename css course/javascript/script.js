var backdrop = document.querySelector('.main-backdrop');
var modal = document.querySelector('.main-modal');
var selectPlanButtons = document.querySelectorAll('.main-section__product .product-button');
var modalNoButton = document.querySelector('.main-modal__action--negative');
var hamburgerButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var buttonXclose = document.querySelector('.close-xbutton');









/***************************** Real Code*************************/





buttonXclose.addEventListener('click', function()
	{
		mobileNav.classList.remove('open');
		backdrop.classList.remove('open');

	}
);

if (modalNoButton) {
modalNoButton.addEventListener('click', function()
	{
		modal.classList.remove('open');
		backdrop.classList.remove('open');
	});
}




hamburgerButton.addEventListener('click', function()
	{
		mobileNav.classList.add('open');
		backdrop.classList.add('open');
	}
);






for (var i = 0; i < selectPlanButtons.length; i++)
{

	selectPlanButtons[i].addEventListener('click', function()

		{
			modal.classList.add('open');
			backdrop.classList.add('open');
		}
	);
};




backdrop.addEventListener('click', function()
	{
		backdrop.classList.remove('open');
		mobileNav.classList.remove('open');
		if (modal) {
		modal.classList.remove('open');
		}
		
	}
);