const modalOpenBtns = document.querySelectorAll(".more");
const modal = document.querySelector(".modal");

modalOpenBtns.forEach(modalBtn => {
	modalBtn.addEventListener('click', () =>  modal.classList.remove('hidden'));
});

modal.addEventListener('click', (event) => {
	if (event.target.classList.contains('overlay') || event.target.classList.contains('modal__close')) {
		modal.classList.add('hidden');
	}
});