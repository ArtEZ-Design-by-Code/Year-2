const blobs = [];

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);

	for (let i = 0; i < 500; i++) {
		blobs.push(new Blob());
	}
}

function draw() {
	background(255);

	blobs.forEach(blob => {
		blob.move();
		blob.display();
	});
}

class Blob {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.xSpeed = random(-2, 2);
		this.ySpeed = random(-2, 2);
	}

	move() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;

		if (this.x < 0) {
			this.x = width;
		}

		if (this.y < 0) {
			this.y = height;
		}

		if (this.x > width) {
			this.x = 0;
		}

		if (this.y > height) {
			this.y = 0;
		}
	}

	display() {
		noStroke();
		fill(0);
		ellipse(this.x, this.y, 5, 5);

		stroke(0);
		noFill();

		for (let i = blobs.indexOf(this) + 1; i < blobs.length; i++) {
			let thatBlob = blobs[i];

			let distance = dist(this.x, this.y, thatBlob.x, thatBlob.y);

			if (distance < 50) {
				line(this.x, this.y, thatBlob.x, thatBlob.y);
			}
		}

		///
		// let startChecking = false;

		// blobs.forEach(thatBlob => {
		// 	if (startChecking) {
		// 		let distance = dist(this.x, this.y, thatBlob.x, thatBlob.y);

		// 		if (distance < 50) {
		// 			line(this.x, this.y, thatBlob.x, thatBlob.y);
		// 		}
		// 	}

		// 	if (this === thatBlob) {
		// 		startChecking = true;
		// 	}
		// });
	}
}
