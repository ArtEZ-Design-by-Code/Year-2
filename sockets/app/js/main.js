let socket = io();

let containerDiv = document.querySelector('.cursor-container');

function mouseHasMoved(event) {
	let x = event.clientX;
	let y = event.clientY;

	socket.emit('cursor-moved', {
		x: x,
		y: y
	});
}

document.body.addEventListener('mousemove', mouseHasMoved);

function cursorsChanged(cursors) {
	let allCursorDivs = containerDiv.querySelectorAll('.cursor');

	for (let i = 0; i < allCursorDivs.length; i++) {
		allCursorDivs[i].dataset.updated = false;
	}

	let ids = Object.keys(cursors);

	for (let i = 0; i < ids.length; i++) {
		let id = ids[i];

		let cursorDiv = containerDiv.querySelector('.cursor[data-id="' + id + '"]');

		if (cursorDiv == null) {
			// There's no div on the page with that ID yet.
			cursorDiv = document.createElement('div');
			cursorDiv.classList.add('cursor');
			cursorDiv.dataset.id = id;

			containerDiv.appendChild(cursorDiv);
		}

		cursorDiv.style.left = cursors[id].x + "px";
		cursorDiv.style.top = cursors[id].y + "px";

		cursorDiv.dataset.updated = true;
	}

	for (let i = 0; i < allCursorDivs.length; i++) {
		if (allCursorDivs[i].dataset.updated == "false") {
			allCursorDivs[i].parentNode.removeChild(allCursorDivs[i]);
		}
	}
}

socket.on('cursor-object-changed', cursorsChanged);
