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
		mobileNav.style.display = 'none';
		backdrop.style.display = 'none';


		modalNoButton.addEventListener('click', function()
			{
				modal.style.display = 'none';
				backdrop.style.display = 'none';
			});
	}
);








hamburgerButton.addEventListener('click', function()
	{
		mobileNav.style.display = 'block';
		backdrop.style.display = 'block';
	}
);






for (var i = 0; i < selectPlanButtons.length; i++)
{

	selectPlanButtons[i].addEventListener('click', function()

		{
			modal.style.display = 'block';
			backdrop.style.display = 'block';
		}
	);
};


backdrop.addEventListener('click', function()
	{
		backdrop.style.display = 'none';
		modal.style.display = 'none';
		mobileNav.style.display = 'none';
	}
);