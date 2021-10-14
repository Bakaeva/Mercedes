const forms = document.querySelectorAll('form');
const modal2 = document.querySelector('.modal');

function isEmpty(str) {
    return (!str.trim() || str.length === 0);
}

for (let form of forms) {
	form.addEventListener('submit', (event) => {
		event.preventDefault(); // отключаем перезагрузку страницы

		let user = {};
		// for (let {name, value} of form.elements) { if (name) {...}
		let dataIsValid = true;
		for (let {name, value} of form.querySelectorAll('.input')) {
			if (isEmpty(value)) {
			  dataIsValid = false;
				break;
			} else {
				user[name] = value;
			}
		}

		if (dataIsValid) {
			let response = fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify(user)
			}).then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(response.status);
				}
			}).then(result => {
				alert('Данные успешно отправлены!');
				form.reset();
				if (form.classList.contains('modal__form')) {
					modal2.classList.add('hidden');
				}
			}).catch(err => {
				alert('Произошла ошибка, статус ' + err.message);
			});
		} else {
			alert ('Введены не все данные! Данные не отправлены');
		}
	});
}