const burgerMenu = document.querySelector(".menu");
const burgerMenuBtn = document.querySelector(".humburger-menu");
const menuLinks = document.querySelectorAll('.menu-list__link');

const toggleMenu = () => {
	burgerMenu.classList.toggle('menu-active');
	burgerMenuBtn.classList.toggle('humburger-menu-active');
};

burgerMenuBtn.addEventListener('click', () => toggleMenu());
for (let link of menuLinks) {
	link.addEventListener('click', () => toggleMenu());
}