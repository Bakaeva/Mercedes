const burgerMenu = document.querySelector(".menu");
const burgerMenuBtn = document.querySelector(".humburger-menu");
const menuLinks = document.querySelectorAll('.menu-list__link');

burgerMenuBtn.addEventListener('click', () => {
	burgerMenu.classList.toggle('menu-active');
	burgerMenuBtn.classList.toggle('humburger-menu-active');
});
for (let link of menuLinks) {
	link.addEventListener('click', () => {
		burgerMenu.classList.remove('menu-active');
		burgerMenuBtn.classList.remove('humburger-menu-active');
	});
}