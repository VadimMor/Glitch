let container = document.querySelector('.container');
let count = 24;

for (let i = 0; i < count; i++) {
	let glichContainer = document.createElement('div');

	glichContainer.className = 'glichContainer';
	container.appendChild(glichContainer);
}

setInterval(function() {
	let glitch = document.querySelectorAll('.glichContainer');


	for (let i = 0; i < glitch.length; i++) {
		glitch[i].style.left = Math.floor(Math.random() * 100) + 'vw';
		glitch[i].style.top = Math.floor(Math.random() * 100) + 'vh';
		glitch[i].style.width = Math.floor(Math.random() * 400) + 'px';
		glitch[i].style.height = Math.floor(Math.random() * 100) + 'px';
		glitch[i].style.backgroundPosition = Math.floor(Math.random() * 50) + 'px';
	}
}, 400)