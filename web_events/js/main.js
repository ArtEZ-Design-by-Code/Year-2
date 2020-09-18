let potsDiv = document.querySelector('.pots');

function moveDiv() {
	let left = Math.random() * 100;
	let top = Math.random() * 100;

	let leftString = left + "%";
	let topString = top + "%";

	potsDiv.style.left = leftString;
	potsDiv.style.top = topString;
}

potsDiv.addEventListener('mouseover', moveDiv);
