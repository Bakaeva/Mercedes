const links = [...document.querySelectorAll('.menu-list__link'),
	document.querySelector('.main__scroll'),
	document.querySelector('.main__button')];

for (let link of links) {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		document.getElementById(e.target.getAttribute('href').substr(1)).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
}