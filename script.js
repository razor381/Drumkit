function playSound(e) {
	let sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	let key = document.querySelector(`div[data-key="${e.keyCode}"`);

	if(!sound) return;


	key.classList.add('playing');
	sound.currentTime = 0;
	sound.play();
}

function removePlaying(e) {
	if(e.propertyName !== 'transform') return;
	e.target.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

let keys = document.querySelectorAll('.key');
keys.forEach(key=>key.addEventListener('transitionend', removePlaying));
