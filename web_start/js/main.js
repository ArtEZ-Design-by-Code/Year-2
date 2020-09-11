let bodyElement = document.querySelector("body");

function changeBackground() {
	let red = Math.round(Math.random() * 255);
	let green = Math.round(Math.random() * 255);
	let blue = Math.round(Math.random() * 255);

	let string = "rgb(" + red + ", " + green + ", " + blue + ")";

	bodyElement.style.background = string;
	document.title = string;
}

setInterval(changeBackground, 10);
