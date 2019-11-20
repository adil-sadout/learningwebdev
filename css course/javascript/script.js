var backdrop = document.querySelector('.main-backdrop');
var modal = document.querySelector('.main-modal');
var selectPlanButtons = document.querySelectorAll('.main-section__product .product-button');
var modalNoButton = document.querySelector('.main-modal__action--negative');
var hamburgerButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var buttonXclose = document.querySelector('.close-xbutton');
var recommendedBadge = document.querySelector('.main-products__plan--plus--badge');
var signButton = document.querySelector('.main-nav__item--signup');

var signupPopup = document.querySelector('.main-signup');
var signinPopup = document.querySelector('.main-signin');

var signinButtonOnSignupPopup = document.querySelector('.main-signup__action--signin');
var signupButtonOnSigninPopup = document.querySelector('.main-signin__action--signup');







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

		if (signinPopup) {
			signupPopup.classList.remove('open');
		}

		if (signinPopup) {
			signinPopup.classList.remove('open');
		}
		
	}
);







signButton.addEventListener('click', function()
	{
		backdrop.classList.add('open');
		signupPopup.classList.add('open');
	}
);


signinButtonOnSignupPopup.addEventListener('click', function()
	{
		signupPopup.classList.remove('open');
		signinPopup.classList.add('open');
	}
);


signupButtonOnSigninPopup.addEventListener('click', function()
	{
		signinPopup.classList.remove('open');
		signupPopup.classList.add('open');
	}
);

