let list = document.querySelector('.list');
let toggle = document.querySelector('.list-toggle');

function wasClicked() {
	let isHidden = list.classList.contains('hide');
	
	if (isHidden) {
		list.classList.remove('hide');
		list.classList.add('show');

		toggle.innerHTML = 'Collapse list';
	} else {
		list.classList.add('hide');
		list.classList.remove('show');

		toggle.innerHTML = 'Expand list';
	}
}

toggle.addEventListener('click', wasClicked);
