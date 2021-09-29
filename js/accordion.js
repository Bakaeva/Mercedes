const featureLinks = document.querySelectorAll(".feature__link");
const featureSubs = document.querySelectorAll(".feature-sub");
let selectedItem = 0;

featureLinks.forEach((featureLink, ind) => {
	featureLink.addEventListener('click', () => {
		if (ind !== selectedItem)
		{
			featureLinks[selectedItem].classList.remove('feature__link_active');
			featureSubs[selectedItem].classList.add('hidden');
			featureLink.classList.add('feature__link_active');
			featureSubs[ind].classList.remove('hidden');
			selectedItem = ind;
		}	else {
			featureLink.classList.toggle('feature__link_active');
			featureSubs[ind].classList.toggle('hidden');
		}
	});
});