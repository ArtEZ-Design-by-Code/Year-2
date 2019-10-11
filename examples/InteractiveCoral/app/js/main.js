let coralImages = [];
let fishImages = [];

for (let i=0; i<2; i++) {
    coralImages.push(`img/coral/${i}.png`);
}

for (let i = 0; i < 2; i++) {
    fishImages.push(`img/fish/${i}.png`);
}

let mouse = {
    x: 0,
    y: 0,
    px: 0,
    py: 0,
    dx: 0,
    dy: 0,
    target: null
};

window.addEventListener('mousemove', event => {
    mouse.px = mouse.x;
    mouse.py = mouse.y;
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    mouse.dx = mouse.x - mouse.px;
    mouse.dy = mouse.y - mouse.py;

    if (mouse.target) {
        let newOffsetX = parseInt(mouse.target.dataset.offsetX) + mouse.dx;
        let newOffsetY = parseInt(mouse.target.dataset.offsetY) + mouse.dy;

        mouse.target.dataset.offsetX = newOffsetX;
        mouse.target.dataset.offsetY = newOffsetY;

        mouse.target.style.left = `calc(${newOffsetX}px + ${mouse.target.dataset.originalX})`;
        mouse.target.style.top = `calc(${newOffsetY}px + ${mouse.target.dataset.originalY})`;
    }
});

window.addEventListener('mouseup', event => {
    mouse.target = null;
});

let fishContainer = document.querySelector('.fishes');
let coralContainer = document.querySelector('.corals');

for (let i=0; i<100; i++) {
    let fish = document.createElement('div');
    fish.classList.add('fish');
    fish.style.width = (Math.random() * 300 + 100) + 'px';
    fish.style.left = (Math.random() * 100) + '%';
    fish.style.top = (Math.random() * 100) + '%';

    let fishImageIndex = Math.floor(Math.random() * fishImages.length);
    let fishImage = document.createElement('img');
    fishImage.src = fishImages[fishImageIndex];

    fish.appendChild(fishImage);
    fishContainer.appendChild(fish);
}

for (let i = 0; i < 100; i++) {
    let coral = document.createElement('div');
    coral.classList.add('coral');
    coral.style.width = (Math.random() * 300 + 100) + 'px';
    
    coral.dataset.originalX = (Math.random() * 100) + '%';
    coral.dataset.originalY = (Math.random() * 100) + '%';
    coral.dataset.offsetX = 0;
    coral.dataset.offsetY = 0;

    coral.style.left = coral.dataset.originalX;
    coral.style.top = coral.dataset.originalY;

    let coralImageIndex = Math.floor(Math.random() * coralImages.length);
    let coralImage = document.createElement('img');
    coralImage.src = coralImages[coralImageIndex];

    coral.appendChild(coralImage);
    coralContainer.appendChild(coral);

    coral.addEventListener('mousedown', event => {
        mouse.target = coral;
    });
}













// let coral = document.getElementsByClassName("coral");



// let current_cor = undefined;

// let start_cursor_x;

// let start_cursor_y;

// let start_cor_x_pos;

// let start_cor_y_pos;





// for (let i = 0; i < coral.length; i++) {

//     let cor = coral[i];

    

//     cor.onmousedown = function(e) {

//         current_cor = cor;

//         start_cursor_x = e.clientX;

//         start_cursor_y = e.clientY;

//         start_cor_x_pos = current_cor.offsetLeft;

//         start_cor_y_pos = current_cor.offsetTop;

//     }
// }




// document.onmouseup = function(e) {

//     current_cor = undefined;

// }



// document.onmousemove = function(e) {

//     if (current_cor != undefined) {

//         let drag_x = e.clientX - start_cursor_x;

//         let drag_y = e.clientY - start_cursor_y;

//         current_cor.style.left = start_cor_x_pos + drag_x + "px";

//         current_cor.style.top  = start_cor_y_pos  + drag_y + "px";

        

//     }

// }
