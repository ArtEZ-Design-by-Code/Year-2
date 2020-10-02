let socket = io();

let myCursorDiv = document.querySelector('.my-cursor');

function mouseHasMoved(event) {
	let x = event.clientX;
	let y = event.clientY;

	myCursorDiv.style.left = x + "px";
	myCursorDiv.style.top = y + "px";
	myCursorDiv.style.display = "block";

	socket.emit('cursor-moved', {
		x: x,
		y: y
	});
}

document.body.addEventListener('mousemove', mouseHasMoved);
