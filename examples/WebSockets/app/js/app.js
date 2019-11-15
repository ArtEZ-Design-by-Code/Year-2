const socket = io();

socket.on('background', color => {
	document.body.style.backgroundColor =
		`rgb(${color.r}, ${color.g}, ${color.b})`;
})
