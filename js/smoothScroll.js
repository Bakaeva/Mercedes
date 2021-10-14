const links = [...document.querySelectorAll('.menu-list__link'),
	document.querySelector('.main__scroll'),
	document.querySelector('.main__button'),
	document.querySelector('.header__logo')];

for (let link of links) {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		document.getElementById(e.target.closest('a').getAttribute('href').substr(1)).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
}