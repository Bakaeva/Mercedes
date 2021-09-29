const tabButtons = document.querySelectorAll('[data-tabs-handler]');
const tabContentElems = document.querySelectorAll('[data-tabs-field]');
let selectedTab = 0;

tabButtons.forEach((tab, ind) => {
	tab.addEventListener('click', () => {
		if (ind !== selectedTab)
		{
			tabButtons[selectedTab].classList.remove('design-list__item_active');
			tab.classList.add('design-list__item_active');
			//const prevTabName = tabButtons[selectedTab].getAttribute('data-tabs-handler');
			const prevTabName = tabButtons[selectedTab].dataset.tabsHandler;
			const curTabName = tab.dataset.tabsHandler;
			tabContentElems.forEach(elem => {
				if (elem.dataset.tabsField === prevTabName) {
					elem.classList.add('hidden');
				} else if (elem.dataset.tabsField === curTabName){
					elem.classList.remove('hidden');
				}
			});
			selectedTab = ind;
		}
	});
});